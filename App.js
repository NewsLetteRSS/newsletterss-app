import { Provider } from "mobx-react";
import React, { Component } from "react";
import RootNavigator from "./src/navigation/RootNavigator";
import store from "./src/store";

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
