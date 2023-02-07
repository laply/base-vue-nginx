import axios from "axios";
import router from "../router";
const MAIN_URL = "http://localhost:3000";

const UNRECOGNIZED = 401;

const unRecognized = () => {
  router.replace("/login");
};

const request = async (method, url, data) => {
  return await axios({
    method,
    url: MAIN_URL + url,
    data,
  })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      const { status } = err.response;
      if (status === UNRECOGNIZED) return unRecognized();
      throw Error(err);
    });
};

export const setAuthInHeader = (token) => {
  axios.defaults.headers.common["Authorization"] = token ? `Bearer ${token}` : null;
};

export const board = {
  create(title) {
    return request("POST", "/boards", { title });
  },
  fetch() {
    return request("get", "/boards");
  },
};

export const auth = {
  login(email, password) {
    return request("post", "/login", { email, password });
  },
};
