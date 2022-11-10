import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/index.jsx";
import Header from "./components/Header/index.jsx";
import Login from "./components/Login.jsx";
import PageComponents from "./components/PageComponents.jsx";
import ProtectedRoute from "./routes/ProtectedRoute.jsx";
import { Sanctum } from "react-sanctum";
import { useEffect } from "react";

function App() {
  return (
    <>
      {/* <Routes>
        <Route path="/login" element={<Login />} />
      </Routes> */}

      <Login />

      {/* <div className="flex flex-col h-screen">
        <Header />
        <div className="flex-1 px-4 py-2 mt-[53px]">
          <PageComponents />
        </div>
        <Footer />
      </div> */}
    </>
  );
}

export default App;
