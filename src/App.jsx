import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Footer from "./components/Footer/index.jsx";
import Header from "./components/Header/index.jsx";
import Login from "./pages/Login.jsx";
import PageComponents from "./components/PageComponents.jsx";
import ProtectedRoutes from "./routes/ProtectedRoutes.jsx";
import Main from "./pages/Main.jsx";
import { useDispatch, useSelector } from "react-redux";
import useLocalStorage from "./hooks/useLocalStorage.jsx";
import { instance } from "./lib/axios.js";
import requests from "./Requests.js";
import { userActions } from "./store/user.jsx";
import { checkAutoLogin } from "./services/AuthServices.js";

function App() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    checkAutoLogin(dispatch, navigate);
  }, []);
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/*" exact element={<Main />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
