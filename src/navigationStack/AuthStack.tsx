import React from "react";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ animation: "fade" }}></Stack.Screen>
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{ animation: "fade" }}></Stack.Screen>
    </>
  );
};

export default AuthStack;
