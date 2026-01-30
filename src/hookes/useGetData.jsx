import React from "react";
import {
  getDataByCategory,
  searchForSpecificCategory,
} from "../Services/fichNewsDataApi";
import { useQuery } from "@tanstack/react-query";

function useGetData({ type, value }) {
  let functionType;

  if (type == "category") {
    functionType = getDataByCategory;
  } else {
    functionType = searchForSpecificCategory;
  }

  const { data, isLoading, isError } = useQuery({
    queryKey: ["news", type, value],
    queryFn: () => functionType(value),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5,
    enabled: !!value,
  });

  return { data, isLoading, isError };
}

export default useGetData;
