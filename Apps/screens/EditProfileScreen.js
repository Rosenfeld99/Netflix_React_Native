import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import React, { useState } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, FontAwesome6 } from "@expo/vector-icons";
import useUser from "../hooks/useUser";

export default function EditProfileScreen() {
  const {
    handleUserEditScreen,
    handleUserAddScreen,
    handleUserDeleteScreen,
    setUser,
    user,
  } = useUser();
  const {
    params: { currScreen, FlagIsNew },
  } = useRoute();
  // console.log("curr Screen line 11 editProfile : ", currScreen);
  const [inputText, setInputText] = useState("");
  const navigation = useNavigation();

  const handleSave = async () => {
    let newRes = currScreen;
    newRes.nameScreen = inputText;
    console.log("save the screen in DB");
    try {
      let data = null;
      if (FlagIsNew) {
        newRes.userId = user._id;
        data = await handleUserAddScreen(newRes);
      } else {
        data = await handleUserEditScreen(newRes);
      }
      if (data?._id) {
        setUser(data);
        navigation.navigate("SelectProfile");
      }
    } catch (err) {
      console.log(err);
      res.status(404).json({ err });
    }
  };

  const handleDelete = async () => {
    console.log("delete the screen in DB");
    try {
      const data = await handleUserDeleteScreen(currScreen?._id);

      if (data?._id) {
        setUser(data);
        navigation.navigate("SelectProfile");
      }
    } catch (err) {
      console.log("Error message: ", err.response.data.error);
      res.status(502).json({ err });
    }
  };
  return (
    <View className=" flex-1 bg-[#1a1a1a]">
      <SafeAreaView className=" flex-row items-center justify-center bg-primary">
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("SelectProfile");
          }}
          className=" flex-row items-center gap-3 p-4 justify-center flex-1"
        >
          <AntDesign name="close" size={24} color="#808080" />
          <Text className=" capitalize text-neutral">cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSave}
          className=" flex-row items-center gap-3 p-4 justify-center flex-1"
        >
          <AntDesign name="check" size={24} color="#808080" />
          <Text className=" capitalize text-neutral">
            {FlagIsNew ? "create" : "save"}
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
      <View className="p-5">
        <View className=" border-b-2 border-[#262626] focus:border-neutral ">
          <Text className=" text-neutral capitalize text-sm font-semibold">
            name
          </Text>
          <TextInput
            onChangeText={(text) => setInputText(text)}
            defaultValue={currScreen?.nameScreen}
            className=" text-primary_content"
          />
        </View>
        <View className=" border-b-2 border-[#262626] py-1 flex-row items-center justify-between">
          <Text className=" text-[#ddd] capitalize text-sm font-semibold">
            picture
          </Text>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("ChooseIcon", { currScreen: currScreen })
            }
          >
            <Image
              className=" w-12 h-12"
              source={{
                uri:
                  currScreen?.imageScreen ||
                  "https://live.staticflickr.com/65535/52051814302_0bc57191b4_n.jpg",
              }}
            />
          </TouchableOpacity>
        </View>
        {!FlagIsNew && (
          <>
            <View className=" border-b-2 border-[#262626] py-7 " />
            <TouchableOpacity
              onPress={handleDelete}
              className=" border-b-2 border-[#262626] py-5 flex-row items-center "
            >
              <FontAwesome6 name="trash" size={24} color="#ddd" />
              <Text className=" text-[#ddd] capitalize text-sm font-semibold px-5">
                delete profile
              </Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
}
