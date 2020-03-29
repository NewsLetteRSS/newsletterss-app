import React, { Component, useEffect } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { Spinner, Text } from "@ui-kitten/components";
import { inject, observer } from "mobx-react";

const AuthCheckScreen = inject("token")(
  observer(props => {
    useEffect(() => {
      loadApp();
    }, []);

    const loadApp = async () => {
      setTimeout(() => {
        // TODO: SecureStore의 토큰 활용하여 로그인 여부 확인
        if (!props.token.isToken()) {
          props.navigation.navigate("Auth");
        } else {
          props.navigation.navigate("Main");
        }
      }, 1000);
    };

    return (
      <View style={styles.container}>
        <Text style={styles.checkMsg}>로그인 정보 확인 중...</Text>
        <Spinner size="giant" />
      </View>
    );
  })
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  checkMsg: {
    marginBottom: 10
  }
});

export default AuthCheckScreen;
