import React from "react";
import { timeAgo } from "../Services/timeFormat";
import { isBookmarked, toggleElement } from "../Services/BookmarkServices";
import { useContext } from "react";
import { SelectedNewsContext } from "../contextes/SelectedNewsContext";
import { BookMarkContext } from "../contextes/BookMarkContext";
import placeholder from "../assets/placeholder.jpg";

function OpenSpecificNewsDetails({ data }) {
  const { setSelectedNews } = useContext(SelectedNewsContext);
  const { setBookmarks } = useContext(BookMarkContext);

  return (
    <div className="backdrop-blur-md fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-10">
      <div className=" h-[80vh] md:w-[65vw] lg:w-[55vw] w-[90vw] bg-gray-900  flex flex-col gap-10 items-center relative mt-24 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-900 rounded-2xl p-5 ">
        <svg
          onClick={() => setSelectedNews(null)}
          className="size-8 text-gray-400 absolute right-2 top-2 cursor-pointer active:text-gray-600"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
        <img
          className={`w-full md:w-[80%] rounded-t-xl object-cover `}
          src={data.image}
          alt={data.title}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = placeholder;
          }}
        />
        <div className=" flex flex-col gap-2  w-full">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <h2 className=" text-gray-100 border-r pr-2 border-l-gray-600">
                from {data.source.name}
              </h2>
              <h2 className="text-gray-100">{timeAgo(data.publishedAt)}</h2>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className={`size-5 ${isBookmarked(data.id) ? " text-orange-700 " : "text-white"}`}
              onClick={(e) => {
                e.stopPropagation();
                setBookmarks(toggleElement(data));
              }}
            >
              <path
                fillRule="evenodd"
                d="M10 2c-1.716 0-3.408.106-5.07.31C3.806 2.45 3 3.414 3 4.517V17.25a.75.75 0 0 0 1.075.676L10 15.082l5.925 2.844A.75.75 0 0 0 17 17.25V4.517c0-1.103-.806-2.068-1.93-2.207A41.403 41.403 0 0 0 10 2Z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <h1 className="text-l line-clamp-2 text-white ">{data.title}</h1>
          <p className={`text-gray-300 font-light`}>{data.description}</p>
        </div>

        <a
          className="text-white flex items-center gap-1 text-sm"
          href={data.url}
        >
          View original article from{" "}
          <span className="text-blue-400 text-sm">{data.source.name}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-5"
          >
            <path
              fillRule="evenodd"
              d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default OpenSpecificNewsDetails;
