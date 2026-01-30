import React from "react";
import { timeAgo } from "../Services/timeFormat";
import { toggleElement, isBookmarked } from "../Services/BookmarkServices";
import placeholder from "../assets/placeholder.jpg";
import { SelectedNewsContext } from "../contextes/selectedNewsContext";
import { useContext } from "react";
import { BookMarkContext } from "../contextes/BookMarkContext";

function NewsCard({ forHeader, data }) {
  const { setBookmarks } = useContext(BookMarkContext);
  const { setSelectedNews } = useContext(SelectedNewsContext);

  return (
    <div
      className={`bg-gray-200 flex ${forHeader ? "  flex-col md:flex-row h-[400px] md:h-[300px] " : " flex-col h-[400px] "}  items-center gap-2 p-2 rounded-xl cursor-pointer hover:scale-[1.01] hover:shadow-blue-200  hover:shadow-2xl transition-all z-0`}
      onClick={() => setSelectedNews(data)}
    >
      <img
        className={`${forHeader ? "md:w-[50%] w-full md:h-[95%] h-[60%] md:rounded-xl rounded-t-xl   object-cover" : "w-full md:h-[50%] h-[60%]  rounded-t-xl object-cover"}  `}
        src={data.image || placeholder}
        alt={data.title}
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = placeholder;
        }}
      />

      <div className=" flex flex-col gap-2 w-full ">
        <div className="flex items-center justify-between">
          <div
            className={` ${forHeader ? " md:flex-col  " : "  items-center "} w-[80%] gap-3 flex `}
          >
            <h2
              className={`${forHeader ? " border-r pr-2 border-l-gray-600  md:border-r-0" : "border-r pr-2 border-l-gray-600 "}  text-sm font-bold text-gray-600  `}
            >
              {data.source.name}
            </h2>
            <h2 className="text-sm  font-semibold text-gray-700">
              {timeAgo(data.publishedAt)}
            </h2>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className={`size-7 ${isBookmarked(data.id) && " text-orange-700 "}`}
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

        <h1 className="text-l md:text-xl font-bold text-gray-900 line-clamp-2 ">
          {data.title}
        </h1>
        <p
          className={` ${forHeader ? " line-clamp-1 md:line-clamp-4" : "line-clamp-1"} text-gray-700 font-light`}
        >
          {data.description}
        </p>
      </div>
    </div>
  );
}

export default NewsCard;
