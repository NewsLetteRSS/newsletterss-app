import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import screenA from "../screens/screenA";
import screenB from "../screens/screenB";
import HomeMainScreen from "../screens/Home/HomeMainScreen";

const HomeStack = createStackNavigator();
const homeStackOptions = {
  headerStyle: { backgroundColor: "#4391f0" },
  headerTintColor: "#fff"
};

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator screenOptions={homeStackOptions}>
      <HomeStack.Screen name="Home" component={HomeMainScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
