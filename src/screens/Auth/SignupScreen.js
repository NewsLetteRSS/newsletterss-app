import React from "react";
import {
  View,
  Text as RNText,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet
} from "react-native";
import { Input, Item, Label, Form } from "native-base";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const SignupScreen = ({ navigation }) => {
  navigation.setOptions({
    title: "회원가입"
  });

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      {/* <KeyboardAvoidingView style={styles.container} behavior="padding" enabled> */}
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <Form>
            <Item fixedLabel>
              <Label>아이디</Label>
              <Input autoCapitalize="none" />
            </Item>
            <Item inlineLabel regular>
              <Label>아이디</Label>
              <Input autoCapitalize="none" />
            </Item>
            <Item floatingLabel>
              <Label>아이디</Label>
              <Input placeholder="aaa" autoCapitalize="none" />
            </Item>
            <Item stackedLabel>
              <Label>아이디</Label>
              <Input autoCapitalize="none" />
            </Item>
            <Item rounded>
              <Label>라벨</Label>
              <Input placeholder="아이디" autoCapitalize="none" />
            </Item>
            <Item>
              <Input placeholder="아이디" autoCapitalize="none" />
            </Item>
            <Item>
              <Input placeholder="아이디" autoCapitalize="none" />
            </Item>
            <Item>
              <Input placeholder="아이디" autoCapitalize="none" />
            </Item>
            <Item>
              <Input placeholder="아이디" autoCapitalize="none" />
            </Item>
            <Item>
              <Input placeholder="아이디" autoCapitalize="none" />
            </Item>
            <Item>
              <Input placeholder="아이디" autoCapitalize="none" />
            </Item>
            <Item>
              <Input placeholder="아이디" autoCapitalize="none" />
            </Item>
          </Form>
        </View>
      </KeyboardAwareScrollView>
      {/* </KeyboardAvoidingView> */}
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    paddingHorizontal: 10
  }
});

export default SignupScreen;
