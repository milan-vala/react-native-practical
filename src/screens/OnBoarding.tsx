import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

const OnBoarding = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/onboarding.png")}
        style={styles.imageBackground}>
        <View style={styles.subContainer}>
          <View style={styles.content}>
            <Text style={styles.title}>Welcome To Our App</Text>
            <Text style={styles.subTitle}>
              With our app you'll make life of our furry friends happier.
            </Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Login")}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageBackground: {
    height: "100%",
    width: "100%",
    resizeMode: "center",
  },
  subContainer: {
    position: "relative",
    minHeight: 650,
  },
  content: {
    position: "absolute",
    bottom: 0,
    left: 20,
    paddingHorizontal: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "700",
  },
  subTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#FDD015",
    width: 143,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#000000",
  },
});
