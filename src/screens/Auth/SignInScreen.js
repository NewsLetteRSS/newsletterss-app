import React from "react";
import {
  View,
  Text as RNText,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TouchableOpacity
} from "react-native";
import { StyleSheet } from "react-native";
import { Item, Input, Icon, Button, Text, H1 } from "native-base";
import { Keyboard } from "react-native";

const SignInScreen = ({ navigation }) => {
  function login() {
    navigation.navigate("Main");
  }

  function goScreen(screen) {
    navigation.navigate(screen);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        {/* TODO: 로고 */}
        <H1 style={{ marginBottom: 10 }}>NewsLetteRSS</H1>
        <Item rounded style={styles.input}>
          <Input placeholder="아이디" autoCapitalize="none" />
          <Icon type="FontAwesome5" name="user-circle" />
        </Item>
        <Item rounded style={styles.input}>
          <Input placeholder="비밀번호" secureTextEntry={true} />
          <Icon type="FontAwesome5" name="key" />
        </Item>
        <Button
          onPress={() => login()}
          title="메인"
          style={styles.loginButton}
          block
        >
          <Text>로그인</Text>
        </Button>
        <TouchableOpacity
          onPress={() => goScreen("FindId")}
          style={styles.textButton}
        >
          <Text style={styles.buttonText}>아이디를 잊어버렸나요?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => goScreen("FindPw")}
          style={styles.textButton}
        >
          <Text style={styles.buttonText}>비밀번호를 잊어버렸나요?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => goScreen("SignUp")}
          style={styles.textButton}
        >
          <Text style={styles.buttonText}>가입하기</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10
  },
  input: {
    paddingHorizontal: 10,
    marginVertical: 5
  },
  loginButton: {
    marginTop: 10,
    marginHorizontal: 5
  },
  textButton: {
    marginTop: 15
  },
  buttonText: {
    color: "#666"
  }
});

export default SignInScreen;
