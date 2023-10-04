import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";

const Categories = () => {
  const categories = [
    require("../assets/categoryIcons/collar.png"),
    require("../assets/categoryIcons/Group.png"),
    require("../assets/categoryIcons/pet.png"),
    require("../assets/categoryIcons/veterinary.png"),
    require("../assets/categoryIcons/toys.png"),
    require("../assets/categoryIcons/pet-shampoo.png"),
    require("../assets/categoryIcons/pet-bed.png"),
    require("../assets/categoryIcons/feeder1.png"),
  ];

  return (
    <View style={{ padding: 16 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}>
        <Text style={{ fontWeight: "700", fontSize: 18 }}>Categories</Text>
        <Text style={{ fontSize: 14 }}>View All</Text>
      </View>
      <View style={styles.container}>
        {categories.map((category, index) => (
          <TouchableOpacity style={styles.categoryButton} key={index}>
            <Image source={category} height={30} width={30} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  categoryButton: {
    height: 70,
    width: 70,
    borderWidth: 2,
    borderColor: "#FDD015",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
});
