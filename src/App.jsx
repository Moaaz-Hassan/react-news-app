import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Bookmark from "./pages/Bookmark";
import Category from "./pages/Category";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/book-mark", element: <Bookmark /> },
      { path: "/category/:categoryName", element: <Category /> },
      { path: "Search/:searchValue", element: <Search /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

const queryclient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryclient}>
        <RouterProvider router={appRouter}></RouterProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;

// (Arabic	ar) - (French	fr) - (German	de) - (English	en) - (German	de)
