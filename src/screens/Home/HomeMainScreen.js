import { Layout, Text, Card, Button, List } from "@ui-kitten/components";
import React from "react";
import { StyleSheet, Image, View } from "react-native";
import { NRIcon, KittenIcon } from "../../utils/icon-utils";

const HomeMainScreen = ({ navigation }) => {
  navigation.setOptions({
    title: "홈!",
  });

  const seeMore = (item, index) => {
    console.log("더보기 >>>>>" + index);
  };

  const CustomHeader = (item, index) => (
    <React.Fragment>
      <Image
        style={styles.headerImage}
        source={{
          uri:
            "https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704__340.jpg",
        }}
      />
      <Text style={styles.headerText} category="h6">
        카드리스트 테스트 {index + 1}
      </Text>
    </React.Fragment>
  );

  const Footer = (item, index) => (
    <View style={styles.footerContainer}>
      <Button
        style={styles.footerControl}
        size="small"
        status="basic"
        onPress={() => seeMore(item, index)}
      >
        더보기
      </Button>
    </View>
  );

  const HomeCard = ({ item, index }) => (
    <Card
      header={() => CustomHeader(item, index)}
      footer={() => Footer(item, index)}
      style={styles.card}
    >
      <Text>카드리스트 테스트 어쩌구저쩌구</Text>
    </Card>
  );

  const data = new Array(8).fill({});

  return (
    <>
      {/* 컨텐츠가 없을 경우 */}
      {/*
        <Layout style={styles.container}>
          <KittenIcon name="alert-circle-outline" size={36} />
          <Text>컨텐츠가 없습니다.</Text>
        </Layout>
      */}
      {/* 컨텐츠가 있을 경우 */}
      <Layout style={styles.contentsContainer}>
        <List renderItem={HomeCard} data={data} />
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  contentsContainer: {
    flex: 1,
    marginVertical: 5,
    marginHorizontal: 5,
  },
  headerText: {
    marginHorizontal: 24,
    marginVertical: 16,
  },
  headerImage: {
    height: 160,
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  footerControl: {
    marginHorizontal: 4,
  },
  card: {
    marginVertical: 5,
  },
});

export default HomeMainScreen;
