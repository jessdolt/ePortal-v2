import axios from "axios";
import { apiURL } from "../constants/base";

// axios.defaults.baseURL = apiURL;
// axios.defaults.withCredentials = true;

const instance = axios.create({
  withCredentials: true,
  baseURL: apiURL,
});

axios.defaults.headers.post["Authorization"] = `Bearer ${localStorage.getItem(
  "access_token"
)}`;

export default instance;
