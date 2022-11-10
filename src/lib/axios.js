import axios from "axios";
import { apiURL } from "../constants/base";

// axios.defaults.baseURL = apiURL;
// axios.defaults.withCredentials = true;

export const instance = axios.create({
  withCredentials: true,
  baseURL: apiURL,
});

axios.defaults.headers.post["Authorization"] = `Bearer ${localStorage.getItem(
  "access_token"
)}`;

// instance.get(requests.requestCsrf).then(() => {
//   instance
//     .post(requests.requestLogin, data)
//     .then((response) => {
//       console.log(response);
//     })
//     .catch((error) => console.error(error));
// });
