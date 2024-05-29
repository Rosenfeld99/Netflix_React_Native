import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import React from "react";
import { Entypo } from '@expo/vector-icons';
import HomeScreen from "../screens/netflix/HomeScreens";
import SignupScreen from "../screens/SignupScreen";

export default function ShopNavigation() {
  const Tab = createMaterialBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#fff"
      barStyle={{ backgroundColor: "#E50914" }}
      inactiveColor="#3e2465"
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={24} color={"#000"} />
        ),
    }}
      />
      <Tab.Screen
        name="SignupScreen"
        component={SignupScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={24} color={color} />
        ),
    }}
      />
    </Tab.Navigator>
  );
}
