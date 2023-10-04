import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

const SplashScreen = ({ navigation }) => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     navigation.navigate("Login");
  //   }, 2000);
  // }, []);

  return (
    <View
      style={{
        backgroundColor: "black",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Text style={{ color: "white", fontSize: 36, fontWeight: "700" }}>
        Petsmart
      </Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
