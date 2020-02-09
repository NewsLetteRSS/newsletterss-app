import React, { Component } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const screenB = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text> textInComponent B </Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default screenB;
