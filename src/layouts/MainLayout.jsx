import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import { SelectedNewsContext } from "../contextes/SelectedNewsContext.jsx";
import { useContext } from "react";
import OpenSpecificNewsDetails from "../components/OpenSpecificNewsDetails";

function MainLayout() {
  const { selectedNews, setSelectedNews } = useContext(SelectedNewsContext);

  return (
    <div
      onClick={() => selectedNews && setSelectedNews("")}
      className={`min-h-[calc(100vh-6rem)]`}
    >
      <NavBar />
      <div className="container mx-auto px-5 mt-20 md:mt-24 mb-5 ">
        {selectedNews && (
          <div onClick={(e) => e.stopPropagation()}>
            <OpenSpecificNewsDetails data={selectedNews} />
          </div>
        )}
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default MainLayout;
