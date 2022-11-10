import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Explore from "../pages/Explore";
import Notification from "../pages/Notification";
import Messages from "../pages/Messages";
import Login from "./Login";
import ProtectedRoute from "../routes/ProtectedRoute";

const PageComponents = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/messages" element={<Messages />} />
      </Routes>
    </>
  );
};

export default PageComponents;
