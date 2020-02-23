import React from "react";
import { View, Text } from "react-native";

const HomeMainScreen = ({ navigation }) => {
  navigation.setOptions({
    title: "홈!"
  });
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
};

export default HomeMainScreen;
