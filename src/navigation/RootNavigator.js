import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import HomeStackNavigator from "./HomeStackNavigator";
import TabNavigator from "./TabNavigator";
import { createStackNavigator } from "@react-navigation/stack";
import AuthCheckScreen from "../screens/Auth/AuthCheckScreen";

const RootStack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator headerMode="none">
        <RootStack.Screen name="AuthCheck" component={AuthCheckScreen} />
        {/* ...Auth Screens... */}
        <RootStack.Screen name="Main" component={TabNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
