import React from "react";
import { View, Text } from "react-native";

const SignupScreen = ({ navigation }) => {
  navigation.setOptions({
    title: "회원가입"
  });

  return (
    <View>
      <Text>회원가입</Text>
    </View>
  );
};

export default SignupScreen;
