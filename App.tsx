import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainNav from "./src/navigationStack/MainNav";

const App = () => {
  return (
    <NavigationContainer>
      <MainNav />
    </NavigationContainer>
  );
};

export default App;
