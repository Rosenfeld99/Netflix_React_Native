import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import useUser from "../hooks/useUser";
import { getData, storeData } from "../utils/storageAction";
import {
  BACKGROUND_IMAGE,
  LOGO_N_IMAGE,
  MDX_PROFILEID,
  TOKEN_KEY,
} from "../../constants";

export default function SigninScreen() {
  const { signIn, setUser, getUserInfo } = useUser();
  const navigation = useNavigation();
  const [userForm, setUserForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (name, text) => {
    setUserForm({ ...userForm, [name]: text });
  };

  const validateForm = () => {
    return userForm.email && userForm.name; // Return true if the form is invalid
  };

  const halndleSignIn = async () => {
    try {
      const res = await signIn(userForm);
      if (res?.token) {
        console.log("res : ", res?.token);
        storeData(TOKEN_KEY, res?.token);
        // if have select profile just getScreen and navogate to home -- else navigate to select profile
        setUser((await getUserInfo())?.user);

        if (await getData(MDX_PROFILEID)) {
          // setUser by screen the allredy selected
          navigation.navigate("Main", { screen: "HomeScreens" });
        } else {
          navigation.navigate("Main", {
            screen: "SelectProfile",
          });
        }
      }
    } catch (error) {
      console.error(
        "Error occurred during sign-in:",
        error.response.data.error
      );
    }
  };

  return (
    <View className="w-full min-h-screen flex-1">
      <View className=" bg-[#000000ac] absolute bottom-0 right-0 w-full min-h-screen z-20" />
      <Image
        className=" object-cover absolute bottom-0 right-0 w-full min-h-screen z-10"
        source={{
          uri: BACKGROUND_IMAGE,
        }}
      />
      <View className=" absolute w-full z-30 min-h-screen ">
        <View className=" p-10 space-y-10 flex-col items-center justify-center flex-1">
          <Image className=" w-8 h-14" source={{ uri: LOGO_N_IMAGE }} />
          <View className=" w-full space-y-2 flex-col items-center justify-center">
            <TextInput
              onChangeText={(text) => handleChange("email", text)}
              className=" w-full p-3 bg-[#ffffffb3] font-semibold text-primary placeholder:text-primary"
              placeholder="אמייל"
              defaultValue="eliyahumeir12@gmail.co"
              // defaultValue="test@gamil.co"
            />
            <TextInput
              onChangeText={(text) => handleChange("password", text)}
              className=" w-full p-3 bg-[#ffffffb3] font-semibold text-primary placeholder:text-primary"
              placeholder="סיסמה"
              defaultValue="12345"
              secureTextEntry // Make password field hidden
            />
          </View>
          <View className="w-full">
            <TouchableOpacity
              disabled={userForm.email == "" && userForm.name == ""}
              onPress={halndleSignIn}
            >
              <View className=" bg-accent flex-row items-center justify-center p-3">
                <Text className="font-bold text-xl text-accent_content">
                  Sign in
                </Text>
              </View>
            </TouchableOpacity>
            <Text className=" pt-2 font-bold text-xs text-accent_content">
              שכחת סיסמה?
            </Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <Text className=" pt-2 font-bold text-md text-accent_content">
              אין לך חשבון?
              <Text className=" text-accent underline">הרשמה</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
