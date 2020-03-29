import axios from "axios";

const apiGet = url => {
  axios
    .get(url)
    .then(res => {
      return res;
    })
    .catch(err => {
      console.log(err);
    });
};

const apiPost = (url, data) => {
  axios
    .post(url, data)
    .then(res => {
      return res;
    })
    .catch(err => {
      console.log(err);
    });
};
