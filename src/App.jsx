import { useState } from "react";
import Footer from "./components/Footer/index.jsx";
import Header from "./components/Header/index.jsx";
import PageComponents from "./components/PageComponents.jsx";

function App() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Header />
        <div className="flex-1 px-4 py-2 mt-[53px]">
          <PageComponents />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
