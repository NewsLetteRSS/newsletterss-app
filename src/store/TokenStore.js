import { observable, action } from "mobx";
import * as SecureStore from "expo-secure-store";

export default class TokenStore {
  @observable
  token = null;

  constructor() {
    this.getToken().then(token => {
      this.token = token;
    });
  }

  @action
  isToken = () => {
    return this.token != null;
  };

  @action
  getToken = async () => {
    return await SecureStore.getItemAsync("NLToken");
  };

  @action
  setToken = async data => {
    await SecureStore.setItemAsync("NLToken", data);
  };

  @action
  removeToken = async () => {
    await SecureStore.deleteItemAsync("NLToken");
  };
}
