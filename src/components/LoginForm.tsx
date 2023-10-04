import React from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useNavigation } from "@react-navigation/native";

const LoginForm = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.form}>
      <View>
        <TextInput style={styles.input} placeholder="Enter your email" />
        <TextInput style={styles.input} placeholder="Enter your password" />
      </View>
      <View style={styles.formBottom}>
        <BouncyCheckbox
          size={20}
          fillColor="#CCCCCC"
          unfillColor="#CCCCCC"
          text="Remember me"
          iconStyle={{ borderColor: "#CCCCCC", borderRadius: 3 }}
          innerIconStyle={{ borderWidth: 2, borderRadius: 3 }}
          textStyle={{ fontFamily: "JosefinSans-Regular" }}
          onPress={(isChecked: boolean) => {}}
        />
        <Text style={{ fontSize: 12, color: "#FC6D5B" }}>Forgot password?</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  form: {
    flex: 1,
  },
  input: {
    height: 48,
    width: "100%",
    backgroundColor: "#F0F0F0",
    borderRadius: 8,
    marginVertical: 10,
    paddingLeft: 20,
  },
  formBottom: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    flex: 1,
    backgroundColor: "#FDD015",
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
