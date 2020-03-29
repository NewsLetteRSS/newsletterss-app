import { Provider } from "mobx-react";
import React, { Component } from "react";
import RootNavigator from "./src/navigation/RootNavigator";
import { loadAsync } from "expo-font";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { light, mapping } from "@eva-design/eva";
import SampleStore from "./src/store/SampleStore";
import TokenStore from "./src/store/TokenStore";

const stores = {
  sample: new SampleStore(),
  token: new TokenStore()
};

class App extends Component {
  async componentDidMount() {
    await loadAsync({
      NanumGothic: require("./assets/fonts/NanumGothic.ttf")
    });
  }

  render() {
    return (
      <>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider mapping={mapping} theme={light}>
          <Provider {...stores}>
            <RootNavigator />
          </Provider>
        </ApplicationProvider>
      </>
    );
  }
}

export default App;
