import { Provider } from "mobx-react";
import React, { Component } from "react";
import RootNavigator from "./src/navigation/RootNavigator";
import store from "./src/store";
import { loadAsync } from "expo-font";

const stores = {
  store
};

class App extends Component {
  async componentDidMount() {
    await loadAsync({
      NanumGothic: require("./assets/fonts/NanumGothic.ttf")
    });
  }

  render() {
    return (
      <Provider {...stores}>
        <RootNavigator />
      </Provider>
    );
  }
}

export default App;
