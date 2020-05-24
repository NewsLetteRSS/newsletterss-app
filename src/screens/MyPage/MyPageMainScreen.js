import { Divider, Layout, Text } from "@ui-kitten/components";
import { inject, observer } from "mobx-react";
import React from "react";
import { TouchableOpacity } from "react-native";
import { KittenIcon } from "../../utils/icon-utils";

const MyPageMainScreen = inject("token")(
  observer((props) => {
    const navigation = props.navigation;
    navigation.setOptions({
      title: "마이페이지",
    });

    const ProfileItem = ({ hint, value }) => (
      <>
        <Layout
          level="1"
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 16,
          }}
        >
          <Text appearance="hint" category="s1">
            {hint}
          </Text>
          <Text category="s1">{value}</Text>
        </Layout>
        <Divider />
      </>
    );

    const GeneralItem = ({ label, handleGeneralItemPress }) => (
      <>
        <TouchableOpacity
          onPress={() =>
            handleGeneralItemPress
              ? handleGeneralItemPress()
              : console.log("pressed!! " + label)
          }
        >
          <Layout
            level="1"
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 16,
            }}
          >
            <Text appearance="default" category="s1">
              {label}
            </Text>
            <KittenIcon name="chevron-right" size={24} />
          </Layout>
        </TouchableOpacity>
        <Divider />
      </>
    );

    const logout = async () => {
      console.log("logout");
      await props.token.removeToken();
      navigation.navigate("Auth");
    };

    return (
      <>
        <Text
          style={{ paddingHorizontal: 10, paddingTop: 10 }}
          category="s1"
          appearance="hint"
        >
          정보
        </Text>
        <Layout style={{ marginTop: 10 }}>
          <ProfileItem hint="닉네임" value="홍길동" />
          <ProfileItem hint="이메일" value="hong@kildong.com" />
        </Layout>

        <Text
          style={{ paddingHorizontal: 10, paddingTop: 10 }}
          category="s1"
          appearance="hint"
        ></Text>
        <Layout style={{ marginTop: 10 }}>
          <GeneralItem label="설정" />
          <GeneralItem label="공지사항" />
          <GeneralItem label="로그아웃" handleGeneralItemPress={logout} />
        </Layout>
      </>
    );
  })
);

export default MyPageMainScreen;
