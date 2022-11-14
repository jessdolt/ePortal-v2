import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar/Navbar";
import PageComponents from "../components/PageComponents";
import Widget from "../components/Widgets";

const Main = () => {
  return (
    <>
      <div className="flex max-w-[1300px] mx-auto w-full">
        <Navbar />
        <div className="flex flex-col min-h-screen max-w-[600px] relative border-l border-r border-gray-50 xl:mr-5">
          <Header />
          <div className="flex-1 mt-[53px] sm:w-[598px]">
            <PageComponents />
          </div>
          <Footer />
        </div>
        <Widget />
      </div>
    </>
  );
};

export default Main;
