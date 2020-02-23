import React from "react";
import { View, Text } from "react-native";

const SubscriptionMainScreen = ({ navigation }) => {
  navigation.setOptions({
    title: "구독관리"
  });
  return (
    <View>
      <Text>Subscription Screen</Text>
    </View>
  );
};

export default SubscriptionMainScreen;
