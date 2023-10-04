import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainNav from "./src/navigationStack/MainNav";
import TabNavigator from "./src/navigators/TabNavigator";
// import DrawerNavigation from "./src/components/DrawerNavigation";

const App = () => {
  return (
    <NavigationContainer>
      {/* <DrawerNavigation /> */}
      <MainNav />
    </NavigationContainer>
  );
};

export default App;
