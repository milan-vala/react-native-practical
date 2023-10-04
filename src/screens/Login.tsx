import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
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

  const Divider = () => {
    return (
      <View style={styles.divider}>
        <View style={styles.line} />
        <Text style={{ paddingHorizontal: 10, color: "#ABB3BB" }}>
          Or Continue with
        </Text>
        <View style={styles.line} />
      </View>
    );
  };

  const BottomSection = () => {
    return (
      <View style={styles.bottomSection}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}>
          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={require("../assets/commonIcons/google.png")}
              height={16}
              width={16}
              style={{ resizeMode: "contain" }}
            />
            <Text style={{ fontSize: 14, marginLeft: 10 }}>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={require("../assets/commonIcons/facebook.png")}
              height={16}
              width={16}
              style={{ resizeMode: "contain" }}
            />
            <Text style={{ fontSize: 14, marginLeft: 10 }}>Google</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.signupSection}>
          Dont' have an account? <Text style={styles.signup}>Sign UP</Text>
        </Text>
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
                marginTop: 60,
              }}>
              <Text style={styles.welcomeBack}>Welcome Back !</Text>
              <Text style={styles.subTitle}>
                Stay signed in with your account to make searching easier
              </Text>
            </View>
            <LoginForm />
            <Divider />
            <BottomSection />
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
    paddingVertical: 40,
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
  divider: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  line: {
    height: 2,
    flex: 1,
    backgroundColor: "#E1E1E1",
  },
  bottomSection: {
    display: "flex",
    flexDirection: "column",
  },
  socialButton: {
    marginTop: 20,
    flex: 0.48,
    display: "flex",
    flexDirection: "row",
    paddingVertical: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FC6A57",
  },
  signupSection: {
    textAlign: "center",
    color: "#5B5959",
    fontSize: 14,
    marginTop: 30,
  },
  signup: {
    color: "#F2613C",
    fontSize: 14,
    fontWeight: "700",
  },
});
export default Login;
