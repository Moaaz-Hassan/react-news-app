import React, { useEffect, useState } from "react";
import Loder from "../components/loder";
import { useParams } from "react-router-dom";
import NewsCard from "../components/NewsCard";
import useGetData from "../hookes/useGetData";


function Category() {
  const { categoryName } = useParams();

  const { data, isLoading, isError } = useGetData({
    type: "category",
    value: categoryName,
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

  return (
    <>
      <div className="container mx-auto px-5 py-2 flex flex-col gap-4">
        <div className="">
          <NewsCard
            forHeader={true}
            data={data[0]}
          />
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-2 ">
          {data.map(
            (news, index) =>
              index != 0 && (
                <NewsCard
                  key={index}
                  data={news}
                />
              ),
          )}
        </div>
      </div>
    </>
  );
}

export default Category;
