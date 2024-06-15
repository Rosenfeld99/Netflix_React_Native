import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { FontAwesome, AntDesign, Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import EllipseShape from "../../utils/EllipseShape";
import { LinearGradient } from "expo-linear-gradient";
import CheckboxFromUtil from "../../utils/CheckboxFromUtil";

export default function ShopProductScreen() {
  const { width, height } = Dimensions.get("window");
  const navigation = useNavigation();
  const [checkboxState, setCheckboxState] = useState({
    sizes: {
      L: false,
      M: false,
      S: false,
    },
    degrees: {
      M: false,
      MW: false,
      MD: false,
    },
    sauces: {
      mayonnaise: false,
      "a thousand islands": false,
    },
  });

  const handleCheckboxChange = (category, item) => {
    setCheckboxState((prevState) => {
      const updatedCategory = Object.keys(prevState[category]).reduce(
        (acc, key) => {
          acc[key] = key === item;
          return acc;
        },
        {}
      );
      return {
        ...prevState,
        [category]: updatedCategory,
      };
    });
  };

  return (
    <View className=" bg-shop_primary flex-1">
      <View className="absolute top-7 left-0 right-0 flex-row justify-between items-center z-50 p-4">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className=" bg-white p-2 rounded-full"
        >
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity className="bg-white p-2 rounded-full">
          <AntDesign name="hearto" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          style={{ width: width, height: height * 0.45 }}
          className=" object-cover w-full"
          source={{
            uri: "https://th.bing.com/th/id/R.ec40ae881e7812e89d5423db6c6d5a96?rik=s281927M%2fLGlPQ&pid=ImgRaw&r=0",
          }}
        />
        {/* <View
          style={{ top: height * 0.41 }}
          className=" flex-col items-center justify-center absolute w-full right-0 mx-auto"
        >
          <EllipseShape color={"white"} height={280} width={300} />
        </View> */}
        <View className=" mb-10 p-5 flex-col">
          <Text className="text-2xl font-bold capitalize">
            Cheeseburger Wendy's Burger
          </Text>
          <Text className="text-xl font-bold capitalize pt-3">$13.99 </Text>
          <View className=" flex-row items-center gap-5 pt-1">
            <Text className="text-yellow-500">
              <Entypo name="star-outlined" size={20} color="black" />
              {"4.5"}
            </Text>
            <Text className=" text-shop_secondary_content font-bold">
              {" "}
              14 min
            </Text>
          </View>
          <Text className=" text-shop_secondary_content font-medium py-5 border-b-[1px] border-[#cacaca]">
            Indulge in our crispy and savory Fried Chicken Burger, made with a
            juicy chicken patty, hand-breaded and deep-fried to perfection,
            served on a warm bun with lettuce, tomato, and a creamy sauce.
          </Text>
          {/* Manage the product */}
          <View>
            {/* Part One */}
            <View className="py-3 border-b-[1px] border-[#cacaca]">
              <Text className="text-black text-xl font-semibold">
                Select Size Meat
              </Text>
              <Text className="text-black text-md">
                Required select one option
              </Text>
              <View className="p-2">
                <CheckboxFromUtil
                  color={"red"}
                  title={"L"}
                  checked={checkboxState.sizes.L}
                  setChecked={() => handleCheckboxChange("sizes", "L")}
                />
                <CheckboxFromUtil
                  color={"red"}
                  title={"M"}
                  checked={checkboxState.sizes.M}
                  setChecked={() => handleCheckboxChange("sizes", "M")}
                />
                <CheckboxFromUtil
                  color={"red"}
                  title={"S"}
                  checked={checkboxState.sizes.S}
                  setChecked={() => handleCheckboxChange("sizes", "S")}
                />
              </View>
            </View>

            {/* Part Two */}
            <View className="py-3 border-b-[1px] border-[#cacaca]">
              <Text className="text-black text-xl font-semibold">
                Select Degree
              </Text>
              <Text className="text-black text-md">Degree of action</Text>
              <View className="p-2">
                <CheckboxFromUtil
                  color={"red"}
                  title={"M"}
                  checked={checkboxState.degrees.M}
                  setChecked={() => handleCheckboxChange("degrees", "M")}
                />
                <CheckboxFromUtil
                  color={"red"}
                  title={"MW"}
                  checked={checkboxState.degrees.MW}
                  setChecked={() => handleCheckboxChange("degrees", "MW")}
                />
                <CheckboxFromUtil
                  color={"red"}
                  title={"MD"}
                  checked={checkboxState.degrees.MD}
                  setChecked={() => handleCheckboxChange("degrees", "MD")}
                />
              </View>
            </View>

            {/* Part Three */}
            <View className="py-3 border-b-[1px] border-[#cacaca]">
              <Text className="text-black text-xl font-semibold">
                Sauces in a Dish
              </Text>
              <Text className="text-black text-md">
                Required select one option
              </Text>
              <View className="p-2">
                <CheckboxFromUtil
                  color={"red"}
                  title={"a thousand islands"}
                  checked={checkboxState.sauces["a thousand islands"]}
                  setChecked={() =>
                    handleCheckboxChange("sauces", "a thousand islands")
                  }
                />
                <CheckboxFromUtil
                  color={"red"}
                  title={"mayonnaise"}
                  checked={checkboxState.sauces.mayonnaise}
                  setChecked={() =>
                    handleCheckboxChange("sauces", "mayonnaise")
                  }
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      <View className="absolute bottom-0 left-0 right-0 z-50 p-4">
        {/* gradiant */}
        <LinearGradient
          colors={["transparent", "#e1e1e1", "#959595"]}
          style={{
            width,
            height: height * 0.1,
            position: "absolute",
            bottom: 0,
          }}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
        />
        {/* content fixed */}
        <View className=" flex-row justify-between items-center ">
          <View className=" flex-row justify-between items-center bg-shop_primary px-2 py-2 h-full rounded-lg border-[1px] border-shop_secondary">
            <TouchableOpacity
              onPress={() => console.log("Add cueantety")}
              className=" bg-shop_secondary text-shop_primary p-1 rounded-full"
            >
              <AntDesign name="plus" size={24} color="white" />
            </TouchableOpacity>
            <Text className=" px-3 font-bold">5</Text>
            <TouchableOpacity
              onPress={() => console.log("Reduce cueantety")}
              className=" bg-shop_secondary text-shop_primary p-1 rounded-full"
            >
              <AntDesign name="minus" size={24} color="white" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity className=" flex-1 flex-row items-center justify-center ml-5 bg-shop_primary_content h-full rounded-lg">
            <Text className="text-shop_primary font-semibold">ORDER NOW</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
