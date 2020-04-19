import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from "../screens/Auth/SignInScreen";
import SignUpScreen from "../screens/Auth/SignUpScreen";
import FindIdScreen from "../screens/Auth/FindIdScreen";
import FindPwScreen from "../screens/Auth/FindPwScreen";

const AuthStack = createStackNavigator();
const otherOptions = {
  headerStyle: { backgroundColor: "#4391f0" },
  headerTintColor: "#fff"
};

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={otherOptions}>
      <AuthStack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{ title: "로그인", header: () => {} }}
      />
      <AuthStack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ title: "회원가입", header: () => {} }}
      />
      <AuthStack.Screen name="FindId" component={FindIdScreen} />
      <AuthStack.Screen name="FindPw" component={FindPwScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;
