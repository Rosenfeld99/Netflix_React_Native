import { View, Text } from "react-native";
import React from "react";
import MovieNavigation from "./MovieNavigation";
import ShopNavigation from "./ShopNavigation";

export default function AppNavigation() {
  // chacking if user interface of shop
  return <>{false ? <ShopNavigation /> : <MovieNavigation />}</>;
}
