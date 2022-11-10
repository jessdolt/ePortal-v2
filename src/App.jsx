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

function App() {
  const user = useSelector((state) => state.user);
  // const [storedUser, setStoredUser] = useLocalStorage("empID");
  // const [storedToken, setStoredToken] = useLocalStorage("token");
  // console.log(storedToken);
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   if (storedUser) {
  //     instance
  //       .get(`${requests.singleEmployee}/${storedUser}`)
  //       .then((response) => {
  //         dispatch(
  //           userActions.initUser({
  //             user: response.data,
  //             token: "85|0tC0Ipfu9MyUfFlLBDj9EHu6TTha38VpwDgL7nPO",
  //           })
  //         );
  //         navigate("/");
  //       });
  //   }
  // }, []);

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
