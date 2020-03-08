import { Button, H1, Icon, Input, Item, Text } from "native-base";
import { Text as RNText } from "react-native";
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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        {/* TODO: 로고 */}
        <H1 style={{ marginBottom: 10 }}>NewsLetteRSS</H1>
        <Item rounded style={styles.input} error={errors.id && true}>
          <Input
            placeholder="아이디"
            autoCapitalize="none"
            ref={register({ name: "id" }, { required: true })}
            onChangeText={text => setValue("id", text, true)}
          />
          <Icon type="FontAwesome5" name="user-circle" />
        </Item>
        {errors.id && (
          <RNText style={styles.errorText}>아이디를 입력해주세요.</RNText>
        )}
        <Item rounded style={styles.input} error={errors.pw && true}>
          <Input
            placeholder="비밀번호"
            secureTextEntry={true}
            ref={register({ name: "pw" }, { required: true })}
            onChangeText={text => setValue("pw", text, true)}
          />
          <Icon type="FontAwesome5" name="key" />
        </Item>
        {errors.pw && (
          <RNText style={styles.errorText}>비밀번호를 입력해주세요.</RNText>
        )}
        <Button
          onPress={handleSubmit(login)}
          style={styles.loginButton}
          disabled={errors.id || errors.pw ? true : false}
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
  },
  errorText: {
    color: "red",
    alignSelf: "baseline",
    paddingHorizontal: 5
  }
});

export default SignInScreen;
