import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainNav from "./src/navigationStack/MainNav";
import TabNavigator from "./src/navigators/TabNavigator";
// import DrawerNavigation from "./src/components/DrawerNavigation";
import { store } from "./src/redux/store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* <DrawerNavigation /> */}
        <MainNav />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
