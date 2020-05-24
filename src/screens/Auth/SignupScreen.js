import React, { useState, useEffect, useRef } from "react";
import { View, Alert } from "react-native";
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
import { apiPost } from "../../utils/api";
import { useForm, Controller } from "react-hook-form";

const SignUpScreen = ({ navigation }) => {
  const {
    register,
    setValue,
    handleSubmit,
    errors,
    control,
    watch,
  } = useForm();
  const onSubmit = (data) => onSignUpButtonPress(data);
  const password = useRef({});
  password.current = watch("password", "");

  useEffect(() => {
    register({ name: "userName" }, { required: true });
    register(
      { name: "email" },
      {
        required: true,
        pattern: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
      }
    );
    register({ name: "password" }, { required: true, minLength: 8 });
    register(
      { name: "passwordConfirm" },
      {
        required: true,
        validate: (value) => {
          return value === password.current;
        },
        minLength: 8,
      }
    );
    register(
      { name: "termsAccepted" },
      {
        validate: (value) => {
          return value === true;
        },
      }
    );
  }, [register]);

  const [passwordVisible, setPasswordVisible] = useState(false);

  const styles = useStyleSheet(stylesheet);

  const onSignUpButtonPress = (data) => {
    // 가입하기 프로세스
    const response = apiPost("/user", {
      username: data.userName,
      password: data.password,
      email: data.email,
    });
    navigation && navigation.goBack();
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
          onChangeText={(text) => setValue("userName", text, true)}
        />
        <Input
          style={styles.emailInput}
          autoCapitalize="none"
          placeholder="이메일"
          caption={"이메일은 비밀번호 찾는 용도로 사용됩니다."}
          icon={(style) => NRIcon(style, "email")}
          keyboardType="email-address"
          onChangeText={(text) => setValue("email", text, true)}
        />
        <Input
          style={styles.passwordInput}
          autoCapitalize="none"
          secureTextEntry={!passwordVisible}
          placeholder="비밀번호"
          icon={(style) =>
            passwordVisible ? NRIcon(style, "eye") : NRIcon(style, "eye-off")
          }
          onChangeText={(text) => setValue("password", text, true)}
          onIconPress={onPasswordIconPress}
        />
        <Input
          style={styles.passwordInput}
          autoCapitalize="none"
          secureTextEntry={!passwordVisible}
          placeholder="비밀번호 확인"
          onChangeText={(text) => setValue("passwordConfirm", text, true)}
        />
        <Controller
          as={
            <CheckBox
              style={styles.termsCheckBox}
              textStyle={styles.termsCheckBoxText}
            >
              서비스 이용약관에 동의합니다.
            </CheckBox>
          }
          name="termsAccepted"
          type="checkbox"
          control={control}
          defaultValue={false}
        />
      </Layout>
      <Button
        style={styles.signUpButton}
        size="giant"
        onPress={handleSubmit(onSubmit)}
      >
        가입하기
      </Button>
      <Button
        style={styles.signInButton}
        appearance="ghost"
        status="basic"
        onPress={() => navigation.goBack()}
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
