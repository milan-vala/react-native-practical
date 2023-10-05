import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import StartIcon from "react-native-vector-icons/Entypo";

const Products = () => {
  const products = [
    {
      productImage: require("../assets/productIcons/prod1.png"),
      isLiked: true,
      name: "Oats Dog Biscuit",
      company: "HeadsUpForTails",
      rating: "4.5",
      price: "$4.59",
      strickedPrice: "$4.88",
    },
    {
      productImage: require("../assets/productIcons/prod2.png"),
      isLiked: false,
      name: "Zest Dog Treats",
      company: "Dental Chews",
      rating: "4.7",
      price: "$5.49",
      strickedPrice: "$6.11",
    },
    {
      productImage: require("../assets/productIcons/prod3.png"),
      isLiked: false,
      name: "Rubber Spiked Ball",
      company: "The Dogs Company",
      rating: "4.3",
      price: "$3.99",
      strickedPrice: "$4.99",
    },
    {
      productImage: require("../assets/productIcons/prod4.png"),
      isLiked: false,
      name: "Dog Chew Toy",
      company: "Foodie Puppies",
      rating: "4.6",
      price: "$6.00",
      strickedPrice: "$6.49",
    },
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
            <Image
              source={product.productImage}
              height={30}
              width={30}
              style={{ position: "absolute", top: 30 }}
            />
            <Image
              source={
                product.isLiked
                  ? require("../assets/commonIcons/Heart.png")
                  : require("../assets/commonIcons/Heart2.png")
              }
              style={styles.heart}
              height={30}
              width={30}
            />
            <View style={styles.productContent}>
              <Text style={{ color: "#5B5959" }}>{product.name}</Text>
              <View style={styles.productDescription}>
                <Text style={{ fontSize: 10, color: "#5B5959" }}>
                  {product.company}
                </Text>
                <StartIcon name="star" size={16} color={"#FFC061"} />
                <Text style={{ fontSize: 10, color: "#5B5959" }}>
                  {product.rating}
                </Text>
              </View>
            </View>
            <View style={styles.price}>
              <Text style={{ fontWeight: "700", color: "#5B5959" }}>
                {product.price}
              </Text>
              <Text style={styles.strickedPrice}>{product.strickedPrice}</Text>
            </View>
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
    position: "relative",
  },
  heart: {
    position: "absolute",
    top: 16,
    right: 16,
  },
  productContent: {
    alignSelf: "flex-start",
    paddingLeft: 16,
    position: "absolute",
    bottom: 30,
  },
  productDescription: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
  },
  price: {
    position: "absolute",
    bottom: 8,
    alignSelf: "flex-start",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 16,
  },
  strickedPrice: {
    marginLeft: 20,
    fontSize: 10,
    textDecorationLine: "line-through",
    color: "#F2613C",
  },
});
