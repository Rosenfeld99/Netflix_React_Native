import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";

import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import EllipseShape from "../../utils/EllipseShape";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome, AntDesign, Entypo } from "@expo/vector-icons";

export default function ShopSelectProducts() {
  const navigation = useNavigation();
  const [activeCategory, setActiveVategory] = useState("All");
  const { width, height } = Dimensions.get("window");

  const categories = ["All", "Combos", "Sliders", "Classics"];
  const items = [
    {
      id: 1,
      name: "Cheeseburger",
      description: "Wendy's Burger",
      rating: 4.9,
      image:
        "https://th.bing.com/th/id/R.ec40ae881e7812e89d5423db6c6d5a96?rik=s281927M%2fLGlPQ&pid=ImgRaw&r=0",
    }, // Replace URLs
    {
      id: 2,
      name: "Hamburger",
      description: "Veggie Burger",
      rating: 4.8,
      image:
        "https://th.bing.com/th/id/R.ec40ae881e7812e89d5423db6c6d5a96?rik=s281927M%2fLGlPQ&pid=ImgRaw&r=0",
    }, // Replace URLs
    {
      id: 3,
      name: "Hamburger",
      description: "Chicken Burger",
      rating: 4.7,
      image:
        "https://th.bing.com/th/id/R.ec40ae881e7812e89d5423db6c6d5a96?rik=s281927M%2fLGlPQ&pid=ImgRaw&r=0",
    }, // Replace URLs
    {
      id: 4,
      name: "Hamburger",
      description: "Fried Chicken Burger ",
      rating: 4.1,
      image:
        "https://th.bing.com/th/id/R.ec40ae881e7812e89d5423db6c6d5a96?rik=s281927M%2fLGlPQ&pid=ImgRaw&r=0",
    }, // Replace URLs
    {
      id: 5,
      name: "Hamburger",
      description: "Fried Chicken Burger ",
      rating: 4.1,
      image:
        "https://th.bing.com/th/id/R.ec40ae881e7812e89d5423db6c6d5a96?rik=s281927M%2fLGlPQ&pid=ImgRaw&r=0",
    }, // Replace URLs
    {
      id: 9,
      name: "Hamburger",
      description: "Fried Chicken Burger ",
      rating: 4.1,
      image:
        "https://th.bing.com/th/id/R.ec40ae881e7812e89d5423db6c6d5a96?rik=s281927M%2fLGlPQ&pid=ImgRaw&r=0",
    }, // Replace URLs
    {
      id: 10,
      name: "Hamburger",
      description: "Fried Chicken Burger ",
      rating: 4.1,
      image:
        "https://th.bing.com/th/id/R.ec40ae881e7812e89d5423db6c6d5a96?rik=s281927M%2fLGlPQ&pid=ImgRaw&r=0",
    }, // Replace URLs
  ];

  return (
    <View>
      <View className="absolute top-7 left-0 right-0 flex-row justify-between items-center z-50 p-4">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className=" bg-white p-2 rounded-full"
        >
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <View className="bg-white flex-1 mx-2 p-2 rounded-full flex-row items-center">
          <TextInput className="flex-1 pl-2" placeholder="Search" />
        </View>
        <TouchableOpacity className="bg-white p-2 rounded-full">
          <AntDesign name="hearto" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <ScrollView className="bg-shop_primary">
        <View className="relative">
          <Image
            source={{
              uri: "https://th.bing.com/th/id/R.ec40ae881e7812e89d5423db6c6d5a96?rik=s281927M%2fLGlPQ&pid=ImgRaw&r=0",
            }} // Replace with your image URL
            className="w-full h-56"
          />
          <View className=" flex-col items-center justify-center absolute top-48 w-full right-0 mx-auto">
            <EllipseShape color={"white"} height={250} width={300} />
          </View>
        </View>
        <View className="px-4 py-2 mx-auto">
          <Text className="text-xl font-bold text-center">
            New Kosher Burger | New York
          </Text>
          <Text className="text-gray-600 text-center py-2">
            min order 20$. open until 4:00. rate 7.8. operating fees 1$.
            delivery 0.0$
          </Text>
        </View>
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
        <View className=" flex-row flex-wrap w-full justify-end mx-auto gap-5 py-5 ">
          {items?.map((item, index) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("ProductPage")}
              key={index}
              className="flex-col w-[42vw] h-[56vw] bg-white shadow-md shadow-slate-600 rounded-lg overflow-hidden"
            >
              <Image
                source={{ uri: item.image }}
                className="w-full h-32 object-cover"
              />
              <View className="flex-1 px-2 pb-2">
                <Text className="text-lg font-bold">{item.name}</Text>
                <Text className="text-gray-600">{item.description}</Text>
                <View className=" flex-row items-center pt-3 justify-between">
                  <Text className="text-yellow-500">
                    <Entypo name="star-outlined" size={22} color="black" />
                    {item.rating}
                  </Text>
                  <AntDesign name="hearto" size={20} color="black" />
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
