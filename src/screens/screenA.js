import React, { Component } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { inject } from "mobx-react";

@inject(({ store }) => ({
  sample: store.sample
}))
class screenA extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text> textInComponent A </Text>
        {/* store values */}
        <Text> {this.props.sample.value1} </Text>
        <Text> {this.props.sample.value2} </Text>
        <Button
          title="상세페이지"
          onPress={() => navigation.navigate("Detail")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default screenA;
