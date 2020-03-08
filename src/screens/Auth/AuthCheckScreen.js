import React, { Component } from "react";
import { ActivityIndicator, StyleSheet, View, Text } from "react-native";

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
      // TODO: SecureStore의 토큰 활용하여 로그인 여부 확인
      this.props.navigation.navigate("Auth");
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
