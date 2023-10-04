import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import HomeHeader from "../components/HomeHeader";
import Categories from "../components/Categories";
import Products from "../components/Products";

const HomeScreen = () => {
  return (
    <ScrollView style={{ backgroundColor: "#FFFFFF" }}>
      <HomeHeader />
      <ScrollView horizontal style={styles.topScroller}>
        <Image source={require("../assets/images/carouselImg1.png")} />
        <Image
          source={require("../assets/images/carouselImg1.png")}
          style={{ marginLeft: 10 }}
        />
        <Image
          source={require("../assets/images/carouselImg1.png")}
          style={{ marginLeft: 10 }}
        />
      </ScrollView>
      <Categories />
      <ScrollView horizontal style={styles.topScroller}>
        <Image source={require("../assets/images/Rectangle.png")} />
        <Image
          source={require("../assets/images/Rectangle.png")}
          style={{ marginLeft: 10 }}
        />
        <Image
          source={require("../assets/images/Rectangle.png")}
          style={{ marginLeft: 10 }}
        />
      </ScrollView>
      <Products />
    </ScrollView>

  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  topScroller: {
    marginTop: 16,
    marginHorizontal: 16,
  },
});
