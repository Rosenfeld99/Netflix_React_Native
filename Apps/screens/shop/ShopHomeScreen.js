import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ShopHomeScreen() {
  return (
    <View className=" bg-shop_primary flex-1">
      {/* <Image className=" w-20 h-8" source={require('../../../public/FoodgoBlack.png')}/> */}
      {/* Header */}
      <SafeAreaView className=" px-5 py-2 flex-row items-center justify-between">
        <View>
          <Text className=" text-2xl font-bold">Foodgo</Text>
          <Text className=" text-sm font-medium text-shop_secondary_content">
            Order your favorite food & munch!
          </Text>
        </View>
        <Image
          className=" w-12 h-12 rounded"
          source={{
            uri: "https://ih1.redbubble.net/image.618369215.1083/flat,800x800,075,f.u2.jpg",
          }}
        />
      </SafeAreaView>

      {/* Search bar */}

      {/* slider filtered */}

      {/* cards restaurns */}
    </View>
  );
}
