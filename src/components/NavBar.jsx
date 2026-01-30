import React from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useParams } from "react-router-dom";

function NavBar() {
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const [openNav, setOpenNav] = useState(false);

  const categories = [
    "world",
    "business",
    "technology",
    "entertainment",
    "sports",
    "science",
    "health",
  ];

  const [selectKey, setSelectKey] = useState(0);

  return (
    <div
      className="bg-gray-100 fixed top-0 left-0 right-0 z-50
     overflow-hidden shadow-md"
    >
      <div
        className={`
    
     text-gray-900
    lg:px-5
    flex flex-col lg:flex-row
    
    justify-between items-center
    rounded-b-lg
    transition-all duration-300
    container mx-auto px-5
    ${openNav ? "h-28 " : "h-16"}
    lg:h-20
  `}
      >
        <div className=" w-full flex items-center justify-between  min-h-16">
          <div className="flex items-center gap-2">
            <img className=" w-12 lg:w-14" src={logo} alt="news spulse logo" />
            <h1 className=" font-extrabold text-xl lg:text-2xl">News Spulse</h1>
          </div>

          {openNav ? (
            <svg
              onClick={() => setOpenNav(!openNav)}
              className="size-8 cursor-pointer mr-2 active:text-gray-500 block lg:hidden"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              onClick={() => setOpenNav(!openNav)}
              className="size-8 cursor-pointer mr-2 active:text-gray-500 block lg:hidden"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          )}
        </div>

        <div
          className={`
          flex justify-between items-center md:gap-2
          transition-opacity duration-200
          ${openNav ? "opacity-100 mt-3 mb-4  " : "opacity-0 pointer-events-none "}
          lg:opacity-100 lg:pointer-events-auto lg:mt-0 lg:mb-0  w-full lg:w-auto
        `}
        >
          <NavLink
            to={"/"}
            className="flex items-center gap-1 cursor-pointer active:text-gray-500"
          >
            <svg
              className=" size-4 lg:size-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            <h2 className=" text-sm lg:text-lg font-medium">Home</h2>
          </NavLink>
          <div className={` ${categoryName && " active "} flex items-center `}>
            <svg
              className="size-4 lg:size-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
              />
            </svg>
            <h2 className="text-sm lg:text-lg font-medium">category</h2>
            <select
              key={selectKey}
              defaultValue=""
              onChange={(e) => {
                const value = e.target.value;
                navigate(`/category/${value}`);
                setSelectKey((prev) => prev + 1);
              }}
              className="cursor-pointer w-5 outline-none bg-transparent"
            >
              <option value="" disabled hidden>
                Select
              </option>

              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <NavLink
            to={"/book-mark"}
            className=" flex items-center gap-1 cursor-pointer active:text-gray-500"
          >
            <svg
              className="size-4 lg:size-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
              />
            </svg>
            <h2 className="  text-sm lg:text-lg font-medium">Bookmark</h2>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
