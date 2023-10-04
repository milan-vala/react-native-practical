import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const HomeHeader = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{ backgroundColor: "#FDD015", height: "auto", paddingBottom: 16 }}>
      <View style={styles.headerTop}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={() => {}}>
            <Icon name="bars" size={24} />
          </TouchableOpacity>
          <Text style={{ marginLeft: 16 }}>Home</Text>
        </View>

        <View style={{ flexDirection: "row" }}>
          <Icon name="bell" size={24} />
          <Icon name="shopping-cart" size={24} style={{ marginLeft: 16 }} />
        </View>
      </View>

      <View style={{ paddingHorizontal: 16, paddingTop: 26 }}>
        <View style={{ flexDirection: "row" }}>
          <Icon name="map-marker" size={16} />
          <Text style={{ marginLeft: 8 }}>
            St 394 Jackson, New York, United States
          </Text>
        </View>
      </View>

      <View style={{ paddingHorizontal: 16, paddingTop: 16 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search product here"
          />
          <Icon
            name="search"
            size={16}
            style={{ position: "absolute", right: 16 }}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  searchInput: {
    flex: 1,
    height: 40,
    backgroundColor: "white",
    paddingHorizontal: 8,
    borderRadius: 8,
    paddingLeft: 16,
  },
});
