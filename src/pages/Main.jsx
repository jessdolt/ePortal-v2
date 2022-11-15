import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar/Navbar";
import PageComponents from "../components/PageComponents";
import Widget from "../components/Widgets";

const Main = () => {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <>
      <div className={`w-full ${darkMode && "dark"}`}>
        <div className="w-full dark:bg-dark">
          <div className="flex max-w-[1300px] mx-auto w-full text-[#242424] dark:text-dark">
            <Navbar />
            <div className="flex flex-col min-h-screen max-w-[600px] relative border-l border-r border-gray-50 dark:border-dark xl:mr-5">
              <Header />
              <div className="flex-1 mt-[53px] sm:w-[598px] dark:bg-dark">
                <PageComponents />
              </div>
              <Footer />
            </div>
            <Widget />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
