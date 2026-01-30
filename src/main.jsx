import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import NewsContext from "./contextes/SelectedNewsContext.jsx";
import Bookmarked from "./contextes/BookMarkContext.jsx";

createRoot(document.getElementById("root")).render(
  <Bookmarked>
    <NewsContext>
      <App />
    </NewsContext>
  </Bookmarked>,
);
