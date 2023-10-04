import React from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";

const LoginForm = () => {
  return (
    <View style={styles.form}>
      <View>
        <TextInput style={styles.input} placeholder="Enter your email" />
        <TextInput style={styles.input} placeholder="Enter your password" />
      </View>
      <View style={styles.formBottom}>
        <Text style={styles.label}>Remember me</Text>
      </View>
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
  },
  checkbox: {},
  label: {},
});
