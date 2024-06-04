import React from "react";
import {
  Foundation,
  AntDesign,
  FontAwesome6,
  Feather,
} from "@expo/vector-icons";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import useUser from "../hooks/useUser";
import ShopSelectRestaurnt from "../screens/shop/ShopSelectRestaurnt";
import ShopProductScreen from "../screens/shop/ShopProductScreen";
import ShopCustomerSupport from "../screens/shop/ShopCustomerSupport";
import { View } from "react-native";
import ShopFavoriteProductsScreen from "../screens/shop/ShopFavoriteProductsScreen";
import ShopHomeScreen from "../screens/shop/ShopHomeScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function ShopNavigation() {
  const { currtScreen } = useUser();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#fff",

        headerStyle: { backgroundColor: "#17181a" },
        tabBarStyle: { backgroundColor: "#E50914", border: "none", padding: 5 },
        tabBarLabelStyle: "text-base font-medium",
      }}
    >
      <Tab.Screen
        name="Home"
        options={{
          headerShown: false,
          title: "",
          tabBarIcon: ({ color, size, focused }) => (
            <Foundation
              name="home"
              size={size}
              color={focused ? color : "#bbb"}
            />
          ),
        }}
        component={ShopHomeScreen}
      />
      <Tab.Screen
        name="SelectRestaurnt"
        options={{
          headerShown: false,
          title: "",
          tabBarIcon: ({ color, size, focused }) => (
            <AntDesign
              name="user"
              size={size}
              color={focused ? color : "#bbb"}
            />
          ),
        }}
        component={ShopSelectRestaurnt}
      />
      <Tab.Screen
        name="QuickAction"
        options={{
          headerShown: false,
          title: "",
          tabBarIcon: ({ color, size, focused }) => (
            <View className=" relative">
              <View className=" bg-shop_secondary w-14 h-14 rounded-full z-50 flex items-center justify-center mb-14">
                <Feather name="plus" size={30} color={"#fff"} />
              </View>

              <View className=" w-16 h-16 bg-shop_primary absolute z-20 right-[-4px] rounded-full top-2" />
              <View className=" w-9 h-8 bg-shop_secondary absolute z-30 right-[-49%] rounded-l-full top-[35.5px]" />
              <View className=" w-28 h-6 bg-shop_primary absolute z-20 right-[-30%] rounded-full top-6" />
              <View className=" w-9 h-8 bg-shop_secondary absolute z-30 left-[-49%] rounded-r-full top-[35.5px]" />
            </View>
          ),
        }}
        component={ShopSelectRestaurnt}
      />
      <Tab.Screen
        name="CustomerSupport"
        options={{
          headerShown: false,
          title: "",
          tabBarIcon: ({ color, size, focused }) => (
            <FontAwesome6
              name="comments"
              size={size}
              color={focused ? color : "#bbb"}
            />
          ),
        }}
        component={ShopCustomerSupport}
      />
      <Tab.Screen
        name="ProductPage"
        options={{
          headerShown: false,
          tabBarButton: () => null,
        }}
        component={ShopProductScreen}
      />
      <Tab.Screen
        name="FavoriteProducts"
        options={{
          title: "",
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <AntDesign
              name="heart"
              size={size}
              color={focused ? color : "#bbb"}
            />
          ),
        }}
        component={ShopFavoriteProductsScreen}
      />
    </Tab.Navigator>
  );
}
