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

export const board = {
  fetch() {
    return request("get", "/boards");
  },
};
