import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import HomeStackNavigator from "./HomeStackNavigator";
import TabNavigator from "./TabNavigator";
import { createStackNavigator } from "@react-navigation/stack";
import AuthCheckScreen from "../screens/Auth/AuthCheckScreen";
import AuthStackNavigator from "./AuthStackNavigator";

const RootStack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator headerMode="none">
        <RootStack.Screen name="AuthCheck" component={AuthCheckScreen} />
        <RootStack.Screen name="Auth" component={AuthStackNavigator} />
        <RootStack.Screen name="Main" component={TabNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
