import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { inject, observer } from "mobx-react";
import React from "react";
import AuthCheckScreen from "../screens/Auth/AuthCheckScreen";
import AuthStackNavigator from "./AuthStackNavigator";
import TabNavigator from "./TabNavigator";

const RootStack = createStackNavigator();

const RootNavigator = inject("token")(
  observer(props => {
    console.log("token ? " + props.token.isToken());
    return (
      <NavigationContainer>
        <RootStack.Navigator
          headerMode="none"
          screenOptions={{ gestureEnabled: false }}
        >
          <RootStack.Screen name="AuthCheck" component={AuthCheckScreen} />
          {!props.token.isToken() ? (
            <RootStack.Screen name="Auth" component={AuthStackNavigator} />
          ) : (
            <RootStack.Screen name="Main" component={TabNavigator} />
          )}
        </RootStack.Navigator>
      </NavigationContainer>
    );
  })
);

export default RootNavigator;
