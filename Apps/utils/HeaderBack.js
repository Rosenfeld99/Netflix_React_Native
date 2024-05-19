import { View, Text, TouchableOpacity, Image, Platform } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
const ios = Platform.OS == "ios";

export default function HeaderBack({ navigation, moreIcon }) {
  return (
    <SafeAreaView className="bg-primary">
      <StatusBar style="" />
      <View className=" flex-row-reverse py-4 items-center justify-between px-4">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowright" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Search")}>
            {moreIcon}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
