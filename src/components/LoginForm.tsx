import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { login } from "../redux/features/loginSlice";
import axios from "axios";

const LoginForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();

  const handleLogin = async (): Promise<void> => {
    setLoading(true);
    try {
      const url = "https://dogbook.developertask.in/api/dog/login";
      const payload = {
        email: "popaye@yopmail.com",
        password: "123456@Aa",
        device_type: "1",
      };
      const response = await axios.post(url, payload);
      if (response.data) {
        dispatch(login(response.data));
        navigation.navigate("Tab");
      }
    } catch (error) {
      console.warn("Error: API failed while login - ", error);
    } finally {
      dispatch(login("milan"));
      navigation.navigate("Tab");
      setLoading(false);
    }
  };

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
        onPress={() => {
          handleLogin();
        }}>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <Text style={styles.buttonText}>Login</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    marginTop: 20,
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
    marginTop: 5,
  },
  button: {
    flex: 1,
    backgroundColor: "#FDD015",
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginTop: 40,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#000000",
  },
});
