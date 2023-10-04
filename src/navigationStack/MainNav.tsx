import React, { useState } from "react";
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";

const MainNav = () => {
  const [user, setUser] = useState<any>();
  return user ? <AppStack /> : <AuthStack />;
};

export default MainNav;
