import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import RootNavigator from "./src/navigation/RootNavigator";
import store from "./src/store";
import { Provider } from "mobx-react";

const stores = {
  store
};

class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <RootNavigator />
      </Provider>
    );
  }
}

export default App;
