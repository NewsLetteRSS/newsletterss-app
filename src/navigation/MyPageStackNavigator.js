import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MyPageMainScreen from "../screens/MyPage/MyPageMainScreen";

const MyPageStack = createStackNavigator();
const myPageStackOptions = {
  headerStyle: { backgroundColor: "#4391f0" },
  headerTintColor: "#fff"
};

const MyPageStackNavigator = () => {
  return (
    <MyPageStack.Navigator screenOptions={myPageStackOptions}>
      <MyPageStack.Screen name="main" component={MyPageMainScreen} />
    </MyPageStack.Navigator>
  );
};

export default MyPageStackNavigator;
