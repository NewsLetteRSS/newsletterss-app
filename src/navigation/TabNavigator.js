import { FontAwesome5 } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import HomeStackNavigator from "./HomeStackNavigator";
import MyPageStackNavigator from "./MyPageStackNavigator";
import SubscriptionStackNavigator from "./SubscriptionStackNavigator";

const Tab = createBottomTabNavigator();

const tabBarOptions = { activeTintColor: "#4391f0" };

const homeTabOptions = {
  tabBarIcon: ({ focused, color, size }) => {
    return (
      <FontAwesome5 name="home" color={color} size={size} focused={focused} />
    );
  },
  tabBarLabel: "홈",
};

const subscriptionTabOptions = {
  tabBarIcon: ({ focused, color, size }) => {
    return (
      <FontAwesome5
        name="newspaper"
        color={color}
        size={size}
        focused={focused}
      />
    );
  },
  tabBarLabel: "구독관리",
};

const myPageTabOptions = {
  tabBarIcon: ({ focused, color, size }) => {
    return (
      <FontAwesome5 name="user" color={color} size={size} focused={focused} />
    );
  },
  tabBarLabel: "마이페이지",
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#4391f0",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={homeTabOptions}
      />
      <Tab.Screen
        name="Subscription"
        component={SubscriptionStackNavigator}
        options={subscriptionTabOptions}
      />
      <Tab.Screen
        name="MyPage"
        component={MyPageStackNavigator}
        options={myPageTabOptions}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
