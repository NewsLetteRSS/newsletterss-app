import React from "react";
import { View, Text } from "react-native";

const MyPageMainScreen = ({ navigation }) => {
  navigation.setOptions({
    title: "마이페이지"
  });

  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default MyPageMainScreen;
