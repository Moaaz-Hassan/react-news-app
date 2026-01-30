import React from "react";
import { useState } from "react";
import { GetAllBookmarked } from "../Services/BookmarkServices";
import { createContext } from "react";

export const BookMarkContext = createContext();

function Bookmarked({ children }) {
  const [Bookmarks, setBookmarks] = useState(GetAllBookmarked());

  return (
    <BookMarkContext.Provider value={{ setBookmarks, Bookmarks }}>
      {children}
    </BookMarkContext.Provider>
  );
}

export default Bookmarked;
