import React from "react";
import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import DetailScreen from "../screens/DetailScreen";
import Icon from "react-native-vector-icons/MaterialIcons";
import BellIcon from "react-native-vector-icons/SimpleLineIcons";
import DogIcon from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const Navigation = () => <Text>Navigation</Text>;
  const Profile = () => <Text>Profile</Text>;
  const Activity = () => <Text>Activity</Text>;

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: "#FDD015",
        tabBarInactiveTintColor: "gray",
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Activity"
        component={Activity}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="watch-later" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Navigation"
        component={Navigation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <BellIcon name="bell" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <DogIcon name="dog" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
