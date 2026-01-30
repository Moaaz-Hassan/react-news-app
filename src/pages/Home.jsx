import React from "react";
import NewsCard from "../components/NewsCard";
import Loder from "../components/loder";
import useGetData from "../hookes/useGetData";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";


function Home() {
  const { data, isLoading, isError } = useGetData({ type: "category", value: "general" })

  const navigate = useNavigate();
  const searchInputValue = useRef("");

  function MoveToSearchPage() {
    if (searchInputValue.current.value.trim()) {
      navigate(`/Search/${searchInputValue.current.value.trim()}`);
      searchInputValue.current.value = "";
    }
  }


  

  if (isLoading) {
    return (
      <div className="w-full h-96 flex items-center justify-center">
        <Loder />
      </div>
    );
  }

  if (isError) {
    return (
      <h2 className="text-center text-red-600 font-bold pt-52">
        Something went wrong while loading news
      </h2>
    );
  }

  return (
    <>
      <div
            className=" mx-auto my-4 flex  px-1 md:px-2 items-center justify-between rounded-2xl border border-gray-900 h-10 w-[80%] md:w-[70%] lg:w-[50%] "
            onKeyDown={(e) => e.key == "Enter" && MoveToSearchPage()}
          >
            <input
              ref={searchInputValue}
              type="text"
              placeholder="Enter specific headline"
              className="text-lg border-gray-600 outline-hidden   "
            />
            <svg
              onClick={MoveToSearchPage}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className=" size-4 md:size-5 cursor-pointer active:scale-[1.05]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>

      <div className="mb-2">
        <NewsCard
          forHeader
          data={data[0]}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-2">
        {data.map(
          (news, index) =>
            index !== 0 && (
              <NewsCard
                key={news.id}
                data={news}
              />
            )
        )}
      </div>
    </>
  );
}

export default Home;
