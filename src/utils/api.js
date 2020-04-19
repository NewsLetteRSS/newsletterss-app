import axios from "axios";

export const apiGet = (url) => {
  axios
    .get(url)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.error(err);
    });
};

export const apiPost = (url, data) => {
  axios
    .post(url, data)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.error(err);
    });
};

export const apiPatch = (url, data) => {
  axios
    .patch(url, data)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.error(err);
    });
};

export const apiDelete = (url) => {
  axios
    .delete(url)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.error(err);
    });
};

// TODO: 공통 에러 함수
