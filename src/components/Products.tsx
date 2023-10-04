import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";

const Products = () => {
  const products = [
    require("../assets/productIcons/prod1.png"),
    require("../assets/productIcons/prod2.png"),
    require("../assets/productIcons/prod3.png"),
    require("../assets/productIcons/prod4.png"),
  ];

  return (
    <View style={{ padding: 16 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}>
        <Text style={{ fontWeight: "700", fontSize: 18 }}>New Product</Text>
        <Text style={{ fontSize: 14 }}>View All</Text>
      </View>
      <View style={styles.container}>
        {products.map((product, index) => (
          <TouchableOpacity style={styles.productButton} key={index}>
            <Image source={product} height={30} width={30} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  productButton: {
    height: 190,
    width: 160,
    borderWidth: 2,
    borderColor: "#FDD015",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
});
