import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PageComponents from "../components/PageComponents";

const Main = () => {
  return (
    <>
      <div className="flex max-w-[1300px] mx-auto w-full">
        <div className="flex-1">Left Nav</div>
        <div className="flex flex-col h-screen max-w-[600px] relative">
          <Header />
          <div className="flex-1 mt-[53px]">
            <PageComponents />
          </div>
          <Footer />
        </div>
        <div className="flex-1">Widgets</div>
      </div>
    </>
  );
};

export default Main;
