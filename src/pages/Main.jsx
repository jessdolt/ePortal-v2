import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PageComponents from "../components/PageComponents";

const Main = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-1 mt-[53px]">
        <PageComponents />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
