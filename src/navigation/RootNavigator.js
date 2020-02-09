import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import HomeStackNavigator from "./HomeStackNavigator";

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <HomeStackNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;
