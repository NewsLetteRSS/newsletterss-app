import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import screenA from "../screens/screenA";
import screenB from "../screens/screenB";

const HomeStack = createStackNavigator();
const homeStackOptions = {
  title: "Home",
  headerStyle: { backgroundColor: "#4391f0" },
  headerTintColor: "#fff"
};

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={screenA}
        options={homeStackOptions}
      />
      <HomeStack.Screen
        name="Detail"
        component={screenB}
        options={homeStackOptions}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
