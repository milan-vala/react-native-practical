import React from "react";
import SplashScreen from "../screens/SplashScreen";
import TabNavigator from "../navigators/TabNavigator";
import HomeScreen from "../screens/HomeScreen";
import DetailScreen from "../screens/DetailScreen";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const MainNav = () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ animation: "fade" }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ animation: "fade" }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ animation: "fade" }}
        />
        <Stack.Screen
          name="Tab"
          component={TabNavigator}
          options={{ animation: "fade" }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ animation: "fade" }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{ animation: "fade" }}
        />
      </Stack.Navigator>
    </>
  );
};

export default MainNav;
