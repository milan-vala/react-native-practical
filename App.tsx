import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./src/navigators/TabNavigator";
import Login from "./src/screens/Login";
import Signup from "./src/screens/Signup";
import MainNav from "./src/navigationStack/MainNav";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Tab"
          component={TabNavigator}
          options={{animation: 'fade'}}></Stack.Screen>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{animation: 'fade'}}></Stack.Screen>
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{animation: 'fade'}}></Stack.Screen>
      </Stack.Navigator> */}
      <MainNav />
    </NavigationContainer>
  );
};

export default App;
