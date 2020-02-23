import React, { Component } from "react";
import { ActivityIndicator, StyleSheet, View, Text } from "react-native";
import * as SecureStore from "expo-secure-store";

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
class AuthCheckScreen extends Component {
  componentDidMount = async () => {
    await this.loadApp();
  };

  loadApp = async () => {
    setTimeout(() => {
      this.props.navigation.navigate("Main");
    }, 1000);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.checkMsg}>로그인 정보 확인 중...</Text>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}
export default AuthCheckScreen;
