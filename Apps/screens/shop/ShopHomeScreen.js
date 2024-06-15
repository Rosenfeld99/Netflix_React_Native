import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Feather, FontAwesome, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function ShopHomeScreen() {
  const [activeCategory, setActiveVategory] = useState("All");
  const navigation = useNavigation();
  const categories = ["All", "Combos", "Sliders", "Classics"];

  return (
    <View className=" bg-shop_primary flex-1">
      <StatusBar />
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
      <View className=" m-5">
        <View className=" flex-row gap-1 items-center rounded-lg bg-primary_content p-3 shadow-md shadow-slate-400">
          <Feather name="search" size={24} color="black" />
          <TextInput className=" w-full" placeholder="Search ..." />
        </View>
      </View>

      {/* slider filtered */}

      <View className="py-2 pb-3">
        <ScrollView horizontal className="px-4">
          {categories.map((category) => {
            const isActive = category == activeCategory;
            return (
              <TouchableOpacity
                onPress={() => setActiveVategory(category)}
                key={category}
                className={`px-4 py-2 rounded-full ${
                  isActive ? "bg-shop_secondary" : "bg-gray-200"
                } mx-1`}
              >
                <Text className={`${isActive ? "text-white" : "text-black"}`}>
                  {category}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      {/* cards restaurns */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {Array.from({ length: 3 }).map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate("SelectProductFromShop")}
            className=" rounded-lg overflow-hidden mx-5 mb-10 bg-primary_content shadow-md shadow-slate-400"
          >
            <Image
              className="h-44 object-cover w-full"
              source={{
                uri: "https://th.bing.com/th/id/R.ec40ae881e7812e89d5423db6c6d5a96?rik=s281927M%2fLGlPQ&pid=ImgRaw&r=0",
              }}
            />
            <View className="p-3 flex flex-col gap-3">
              <Text>Cheeseburger Wendy's Burger</Text>
              <View className=" flex-row items-center justify-between">
                <View className=" flex-row items-center gap-2">
                  <FontAwesome name="star" size={20} color="black" />
                  <Text>4.9</Text>
                </View>
                <AntDesign name="hearto" size={20} color="black" />
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
