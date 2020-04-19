import React, { useState } from "react";
import { View } from "react-native";
import {
  Text,
  StyleService,
  useStyleSheet,
  Layout,
  Input,
  Button,
  CheckBox,
} from "@ui-kitten/components";
import { NRIcon } from "../../utils/icon-utils";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const SignUpScreen = ({ navigation }) => {
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const styles = useStyleSheet(stylesheet);

  const onSignUpButtonPress = () => {
    // navigation && navigation.goBack();
    // 가입하기 프로세스
  };

  const onSignInButtonPress = () => {
    navigation && navigation.navigate("SignIn");
  };

  const onPasswordIconPress = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <KeyboardAwareScrollView
      style={styles.container}
      bounces={false}
      bouncesZoom={false}
      alwaysBounceHorizontal={false}
      alwaysBounceVertical={false}
      contentContainerStyle={{
        flexGrow: 1,
      }}
    >
      <View style={styles.headerContainer}>
        <Text category="h1" status="control">
          /* LOGO */
        </Text>
      </View>
      <Layout style={styles.formContainer} level="1">
        <Input
          autoCapitalize="none"
          placeholder="사용자명"
          icon={(style) => NRIcon(style, "person")}
          value={userName}
          onChangeText={setUserName}
        />
        <Input
          style={styles.emailInput}
          autoCapitalize="none"
          placeholder="이메일"
          caption={"이메일은 비밀번호 찾는 용도로 사용됩니다."}
          icon={(style) => NRIcon(style, "email")}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <Input
          style={styles.passwordInput}
          autoCapitalize="none"
          secureTextEntry={!passwordVisible}
          placeholder="비밀번호"
          icon={(style) =>
            passwordVisible ? NRIcon(style, "eye") : NRIcon(style, "eye-off")
          }
          value={password}
          onChangeText={setPassword}
          onIconPress={onPasswordIconPress}
        />
        <Input
          style={styles.passwordInput}
          autoCapitalize="none"
          secureTextEntry={!passwordVisible}
          placeholder="비밀번호 확인"
          value={password}
          onChangeText={setPassword}
        />
        <CheckBox
          style={styles.termsCheckBox}
          textStyle={styles.termsCheckBoxText}
          checked={termsAccepted}
          onChange={(checked) => setTermsAccepted(checked)}
        >
          서비스 이용약관에 동의합니다.
        </CheckBox>
      </Layout>
      <Button
        style={styles.signUpButton}
        size="giant"
        onPress={onSignUpButtonPress}
      >
        가입하기
      </Button>
      <Button
        style={styles.signInButton}
        appearance="ghost"
        status="basic"
        onPress={onSignInButtonPress}
      >
        이미 계정이 있나요?
      </Button>
    </KeyboardAwareScrollView>
  );
};

const stylesheet = StyleService.create({
  container: {
    backgroundColor: "background-basic-color-1",
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    minHeight: 216,
    backgroundColor: "color-primary-default",
  },
  profileAvatar: {
    width: 116,
    height: 116,
    borderRadius: 58,
    alignSelf: "center",
    backgroundColor: "background-basic-color-1",
    tintColor: "color-primary-default",
  },
  editAvatarButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  formContainer: {
    flex: 1,
    paddingTop: 32,
    paddingHorizontal: 16,
  },
  emailInput: {
    marginTop: 16,
  },
  passwordInput: {
    marginTop: 16,
  },
  termsCheckBox: {
    marginTop: 24,
  },
  termsCheckBoxText: {
    color: "text-hint-color",
  },
  signUpButton: {
    marginHorizontal: 16,
  },
  signInButton: {
    marginVertical: 12,
    marginHorizontal: 16,
  },
});

export default SignUpScreen;
