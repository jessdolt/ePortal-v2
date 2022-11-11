import { instance } from "../lib/axios";
import requests from "../Requests";
import { userActions } from "../store/user";

export const signInUser = async (data, dispatch, navigate) => {
  const csrf = await instance.get(requests.requestCsrf);
  const response = await instance.post(requests.requestLogin, data);

  dispatch(userActions.initUser(response.data));
  navigate("/");
  localStorage.setItem("empId", JSON.stringify(response.data.user.EmpID));
  localStorage.setItem("token", JSON.stringify(response.data.token));
};

export const logOutUser = async (token, dispatch, navigate) => {
  const csrf = await instance.get(requests.requestCsrf);
  const response = await instance.post(
    requests.requestLogout,
    {},
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  dispatch(userActions.userDestroy());
  navigate("/login");

  localStorage.removeItem("empId");
  localStorage.removeItem("token");
};

export const checkAutoLogin = (dispatch, navigate) => {
  const user = localStorage.getItem("empId");
  const token = localStorage.getItem("token");

  if (!token || !user) {
    dispatch(userActions.userDestroy());
    return;
  }

  confirmedLoggedIn(dispatch, navigate);
};

export const confirmedLoggedIn = async (dispatch, navigate) => {
  const user = localStorage.getItem("empId");
  const token = localStorage.getItem("token");

  const response = await instance.get(`${requests.singleEmployee}/${user}`);
  dispatch(
    userActions.initUser({ user: response.data, token: JSON.parse(token) })
  );
};
