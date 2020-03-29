import {
  Button,
  Input,
  Layout,
  Text,
  StyleService,
  useStyleSheet
} from "@ui-kitten/components";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { View, Alert } from "react-native";
import { NRIcon } from "../../utils/icon-utils.js";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const SignInScreen = ({ navigation }) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const styles = useStyleSheet(stylesheet);

  const onSignUpButtonPress = () => {
    navigation && navigation.navigate("SignUp");
  };

  const onForgotPasswordButtonPress = () => {
    navigation && navigation.navigate("FindPw");
  };

  const onPasswordIconPress = () => {
    setPasswordVisible(!passwordVisible);
  };

  const login = data => {
    console.log(data);
    if (username && password) {
      // TODO: 로그인 프로세스 타고 토큰 저장 후 Main으로 이동
    } else {
      Alert.alert("확인", "아이디 또는 비밀번호를 확인해 주세요.");
    }
  };

  function goScreen(screen) {
    navigation.navigate(screen);
  }

  return (
    <KeyboardAwareScrollView
      style={styles.container}
      bounces={false}
      bouncesZoom={false}
      alwaysBounceHorizontal={false}
      alwaysBounceVertical={false}
      contentContainerStyle={{
        flexGrow: 1
      }}
    >
      <View style={styles.headerContainer}>
        <Text category="h1" status="control">
          /* LOGO */
        </Text>
        <Text style={styles.signInLabel} category="s1" status="control">
          NewsLetteRSS
        </Text>
      </View>
      <Layout style={styles.formContainer} level="1">
        <Input
          placeholder="사용자명"
          value={username}
          onChangeText={setUsername}
          icon={style => NRIcon(style, "person")}
          autoCapitalize="none"
        />
        <Input
          style={styles.passwordInput}
          placeholder="비밀번호"
          value={password}
          secureTextEntry={!passwordVisible}
          onChangeText={setPassword}
          icon={style =>
            passwordVisible ? NRIcon(style, "eye") : NRIcon(style, "eye-off")
          }
          onIconPress={onPasswordIconPress}
        />
        <View style={styles.forgotPasswordContainer}>
          <Button
            style={styles.forgotPasswordButton}
            appearance="ghost"
            status="basic"
            onPress={onForgotPasswordButtonPress}
          >
            비밀번호를 잊어버렸나요?
          </Button>
        </View>
      </Layout>
      <Button style={styles.signInButton} size="giant" onPress={login}>
        로그인
      </Button>
      <Button
        style={styles.signUpButton}
        appearance="ghost"
        status="basic"
        onPress={onSignUpButtonPress}
      >
        계정이 없다면? 만들기!
      </Button>
    </KeyboardAwareScrollView>
  );
};

const stylesheet = StyleService.create({
  container: {
    flex: 1,
    backgroundColor: "background-basic-color-1"
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    minHeight: 216,
    backgroundColor: "color-primary-default"
  },
  formContainer: {
    flex: 1,
    paddingTop: 32,
    paddingHorizontal: 16
  },
  signInLabel: {
    marginTop: 16
  },
  signInButton: {
    marginHorizontal: 16
  },
  signUpButton: {
    marginVertical: 12,
    marginHorizontal: 16
  },
  forgotPasswordContainer: {
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  passwordInput: {
    marginTop: 16
  },
  forgotPasswordButton: {
    paddingHorizontal: 0
  }
});

export default SignInScreen;
