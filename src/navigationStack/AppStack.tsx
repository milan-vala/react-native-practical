import React from "react";
import HomeScreen from "../screens/HomeScreen";
import DetailScreen from "../screens/DetailScreen";
import TabNavigator from "../navigators/TabNavigator";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Tab"
        component={TabNavigator}
        options={{ animation: "fade" }}></Stack.Screen>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ animation: "fade" }}></Stack.Screen>
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{ animation: "fade" }}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default AppStack;
