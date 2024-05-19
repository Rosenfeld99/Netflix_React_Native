import React from "react";
import AppNavigation from "./Apps/routes/AppNavigation";
import { NavigationContainer } from "@react-navigation/native";
import UserContextProvider from "./Apps/context/UserContext";
import "react-native-gesture-handler";

export default function App() {
  return (
    <UserContextProvider>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </UserContextProvider>
  );
}
