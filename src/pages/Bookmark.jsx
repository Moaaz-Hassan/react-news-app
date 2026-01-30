import React from "react";
import NewsCard from "../components/NewsCard";
import { useContext } from "react";
import { BookMarkContext } from "../contextes/BookMarkContext";

function Bookmark() {
  const { Bookmarks } = useContext(BookMarkContext);

  
  if(!Bookmarks || Bookmarks.length == 0){
    return<h2 className=" text-gray-800 font-bold text-2xl text-center pt-52">
      You haven't saved any news yet.
    </h2>
  }
  
  return (
    <div className="flex flex-col gap-4">
      {[...Bookmarks].reverse().map((news) => (
        <NewsCard key={news.id} forHeader={true} data={news} />
      ))}
    </div>
  );
}

export default Bookmark;
