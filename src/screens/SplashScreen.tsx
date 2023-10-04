import React, { useEffect } from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("OnBoarding");
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/dogbg.png")}
        style={styles.imageBackground}></ImageBackground>
      <Text style={styles.title}>Petsmart</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDD015",
    justifyContent: "center",
    alignItems: "center",
  },
  imageBackground: {
    height: "100%",
    paddingHorizontal: 20,
    resizeMode: "repeat",
  },
  title: {
    color: "black",
    fontSize: 36,
    fontWeight: "700",
    position: "absolute",
  },
});
