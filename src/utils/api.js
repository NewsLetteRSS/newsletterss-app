import axios from "axios";
import { Alert } from "react-native";

let apiUrl = "http://localhost:8080";

export const apiGet = (url) => {
  axios
    .get(apiUrl + url)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.error(err);
      Alert.alert(err);
    });
};

export const apiPost = (url, data) => {
  return axios
    .post(apiUrl + url, data)
    .then((res) => {
      console.log(res.status === 200);
      if (res.status === 200) {
        console.log("200!!!!");
        return res.data;
      } else {
        console.log(res.status);
      }
    })
    .catch((err) => {
      console.error(err);
      Alert.alert(err);
      return;
    });
};

export const apiPatch = (url, data) => {
  axios
    .patch(apiUrl + url, data)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.error(err);
    });
};

export const apiDelete = (url) => {
  axios
    .delete(apiUrl + url)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.error(err);
    });
};

// TODO: 공통 에러 함수
