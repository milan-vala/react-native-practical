import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const Login = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <View>
      <Text>Login</Text>
      <Button
        title="Sign up"
        onPress={() => navigation.navigate("Signup")}></Button>
    </View>
  );
};

const styles = StyleSheet.create({});
export default Login;
