import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import SubscriptionMainScreen from "../screens/Subscription/SubscriptionMainScreen";

const StackNavigator = createStackNavigator();
const subscriptionStackOptions = {
  headerStyle: { backgroundColor: "#4391f0" },
  headerTintColor: "#fff"
};

const SubscriptionStackNavigator = () => {
  return (
    <StackNavigator.Navigator
      screenOptions={subscriptionStackOptions}
      initialRouteName="main"
    >
      <StackNavigator.Screen name="main" component={SubscriptionMainScreen} />
    </StackNavigator.Navigator>
  );
};

export default SubscriptionStackNavigator;
