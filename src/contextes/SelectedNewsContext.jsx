import React from "react";
import { createContext } from "react";
import { useState } from "react";

export const SelectedNewsContext = createContext();

function NewsContext({ children }) {
  const [selectedNews, setSelectedNews] = useState("");

  return (
    <SelectedNewsContext.Provider value={{ selectedNews, setSelectedNews }}>
      {children}
    </SelectedNewsContext.Provider>
  );
}

export default NewsContext;
