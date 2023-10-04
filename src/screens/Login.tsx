import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React from "react";
import LoginForm from "../components/LoginForm";

const Login = () => {
  const Header = () => {
    return (
      <View style={styles.header}>
        <Text>Back</Text>
        <Text style={{ fontSize: 18, fontWeight: "600", color: "#000000" }}>
          Login
        </Text>
        <Text>Option</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.pageContainer}>
          <Header />
          <View>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 30,
              }}>
              <Text style={styles.welcomeBack}>Welcome Back !</Text>
              <Text style={styles.subTitle}>
                Stay signed in with your account to make searching easier
              </Text>
            </View>
            <LoginForm />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  pageContainer: {
    display: "flex",
    flexDirection: "column",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  welcomeBack: {
    fontSize: 24,
    fontWeight: "800",
    color: "#000000",
  },
  subTitle: {
    fontSize: 14,
    color: "#000000",
    textAlign: "center",
    paddingHorizontal: 20,
  },
});
export default Login;
