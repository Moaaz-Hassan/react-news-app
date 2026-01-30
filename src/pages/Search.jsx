import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import NewsCard from "../components/NewsCard";
import Loder from "../components/loder";
import useGetData from "../hookes/useGetData";


function Search() {
  const { searchValue } = useParams();

  const { data, isLoading, isError } = useGetData({
    type: "search",
    value: searchValue,
  });

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

  if (!data || data.length === 0) {
    return (
      <>
        <h2 className=" text-xl md:text-2xl font-bold text-gray-900 text-center pt-52">
          Can't find any news related to "{searchValue}"
        </h2>
        <h3 className=" text-lg md:text-xl font-semibold text-gray-900 text-center">
          Try searching with different keywords.
        </h3>
      </>
    );
  }

  return (
    <div>
      <div className=" flex flex-col gap-4">
        {data.map((news) => (
          <NewsCard key={news.id} forHeader={true} data={news} />
        ))}
      </div>
    </div>
  );
}

export default Search;
