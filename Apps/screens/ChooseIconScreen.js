import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { fallbackImagePoster } from "../api/movieDB";
import { avatars } from "../../constants";
import useUser from "../hooks/useUser";

export default function ChooseIconScreen() {
  const navigation = useNavigation();
  const {
    params: { currScreen },
  } = useRoute();

  const { width, height } = Dimensions.get("window");
  // const { currtScreen } = useUser();
  console.log("curr Screen line 17 : ", currScreen);

  const handleClickOnAvatar = (icon) => {
    let newRes = { ...currScreen };
    newRes.imageScreen = icon || newRes.imageScreen;
    console.log("newRes : ", newRes?.imageScreen);
    navigation.navigate("Main", {
      screen: "EditProfile",
      params: { currScreen: newRes },
    });
  };

  return (
    <View className=" flex-1 bg-primary">
      <View className="bg-[#161616] flex-1 p-3 rounded-t-3xl mt-20">
        <View className=" relative flex-row items-center">
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Main", {
                screen: "EditProfile",
                params: { currScreen: currScreen },
              })
            }
            className="bg-[#232323] absolute top-0 left-0 p-2 rounded-full"
          >
            <AntDesign name="left" size={24} color="white" />
          </TouchableOpacity>
          <View className=" flex-row items-center relative justify-center w-full p-2">
            <Text className=" text-primary_content text-xl font-semibold">
              Choose Icon
            </Text>
          </View>
        </View>
        <ScrollView>
          {/* Content grid */}
          <View className=" flex-row flex-wrap gap-1.5 pl-0.5 pt-3">
            {avatars?.map((item, index) => (
              <TouchableOpacity
                key={index} // Important for tracking items
                onPress={() => handleClickOnAvatar(item)}
              >
                <View
                  style={{
                    width: width * 0.3,
                    height: height * 0.14,
                  }}
                >
                  <Image
                    source={{
                      uri: item || fallbackImagePoster,
                    }}
                    className=" w-full h-full rounded bg-slate-300"
                  />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
