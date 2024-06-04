import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {
  FontAwesome5,
  MaterialCommunityIcons,
  AntDesign,
  Entypo,
} from "@expo/vector-icons";
import useUser from "../../hooks/useUser";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");

export default function SelectProfile() {
  const { user, setcurrtScreen } = useUser();
  const [isEditProfile, setIsEditProfile] = useState(false);
  // console.log(user?.screens?.length);
  const navigation = useNavigation();

  const handleChooseScreen = (item) => {
    // console.log("handleChooseScreen called with item:", item?.nameScreen);
    if (isEditProfile) {
      console.log("Navigating to EditProfile screen...");
      navigation.navigate("Main", {
        screen: "EditProfile",
        params: { currScreen: item, FlagIsNew: false },
      });
    } else {
      setcurrtScreen(item);
      navigation.navigate("Main", {
        screen: "Home",
      });
      console.log("select screen and go to hote whatch");
    }
  };

  return (
    <View className={`flex-1 bg-primary p-5 `}>
      {/* logo header and controlers */}
      <SafeAreaView className=" w-full flex-row items-center justify-center">
        <View className="relative w-full flex-row items-center justify-center">
          {!isEditProfile ? (
            <Image
              source={{
                uri: "https://th.bing.com/th/id/R.d5c1f5ee66324fc2ab2c8c8d1df06644?rik=YfBoVvNMQ1Yj5w&pid=ImgRaw&r=0",
              }}
              className="w-[100px] h-[27px] object-contain"
            />
          ) : (
            <Text className=" text-primary_content text-2xl font-semibold -mt-1.5">
              נהל פרופילים
            </Text>
          )}

          <TouchableOpacity
            onPress={() => setIsEditProfile(!isEditProfile)}
            className={` absolute top-0 ${
              !isEditProfile ? " right-0" : " left-0"
            }`}
          >
            {!isEditProfile ? (
              <FontAwesome5 name="pen" size={24} color="#ddd" />
            ) : (
              <AntDesign name="arrowleft" size={24} color="#ddd" />
            )}
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      {/* content profile */}
      <View className=" flex-col items-center justify-center flex-1 gap-3 ">
        <Text className=" text-primary_content text-2xl font-semibold">
          {!isEditProfile && "מי צופה?"}
        </Text>
        <View className=" flex-row flex-wrap flex items-center justify-center">
          {user.screens?.map((item, index) => (
            <TouchableOpacity
              onPress={() => handleChooseScreen(item)}
              key={index}
              className=" relative flex-col p-5 gap-2 items-center justify-center "
            >
              {isEditProfile && (
                <View className="rounded w-[26vw] h-[26vw] flex items-center justify-center absolute z-30 top-5 right-5 bg-[#00000077]">
                  <MaterialCommunityIcons
                    name="pencil-outline"
                    size={width * 0.2}
                    color="white"
                  />
                </View>
              )}
              <Image
                className=" rounded w-[26vw] h-[26vw]"
                // style={{ width: width * 0.32, height: height * 0.15 }}
                source={{ uri: item.imageScreen }}
              />
              <Text className=" text-primary_content text-lg font-semibold">
                {item.nameScreen}
              </Text>
            </TouchableOpacity>
          ))}
          {user?.screens?.length < 5 && (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("EditProfile", {
                  currScreen: {
                    nameScreen: "",
                    imageScreen: null,
                    favs_ar: [],
                  },
                  FlagIsNew: true,
                })
              }
              className=" flex-col items-center justify-center gap-2"
            >
              <Entypo name="circle-with-plus" size={105} color="white" />
              <Text className=" text-primary_content text-lg font-semibold">
                Add Profile
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}
