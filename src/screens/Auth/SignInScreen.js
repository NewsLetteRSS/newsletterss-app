import { Button } from "@ui-kitten/components";
import { Text, View } from "react-native";
import React from "react";
import { useForm } from "react-hook-form";
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native";

const SignInScreen = ({ navigation }) => {
  const { register, errors, handleSubmit, setValue } = useForm();

  const login = data => {
    console.log(data);
    if (data.id && data.pw) {
      goScreen("Main");
    }
  };

  function goScreen(screen) {
    navigation.navigate(screen);
  }

  return (
    <View style={styles.container}>
      <Text>로그인</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default SignInScreen;
