import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import useUser from "../hooks/useUser";
import { BACKGROUND_IMAGE } from "../../constants";

export default function SignupScreen() {
  const { user, setUser } = useUser();
  const navigation = useNavigation();
  const [next, SetNext] = useState(false);
  const [userForm, setUserForm] = useState({
    name: "",
    email: "",
    city: "",
    entrance: "",
    num: "",
    phone: "",
    street: "",
    zipCode: "",
    password: "",
  });

  const handleChange = (name, text) => {
    setUserForm({ ...userForm, [name]: text });
  };

  const handleUserSignup = () => {
    setUser(userForm);
    console.log("user : ", userForm);
    navigation.navigate("Home");
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
          <Image
            className=" w-8 h-14"
            source={require("../../assets/netflix_small.png")}
          />
          {!next ? (
            <View className=" w-full space-y-2 flex-col items-center justify-center">
              <TextInput
                onChangeText={(text) => handleChange("name", text)}
                className=" w-full p-3 bg-[#ffffffb3] font-semibold text-primary placeholder:text-primary"
                placeholder="שם"
              />
              <TextInput
                onChangeText={(text) => handleChange("email", text)}
                className=" w-full p-3 bg-[#ffffffb3] font-semibold text-primary placeholder:text-primary"
                placeholder="אמייל"
              />
              <TextInput
                onChangeText={(text) => handleChange("password", text)}
                className=" w-full p-3 bg-[#ffffffb3] font-semibold text-primary placeholder:text-primary"
                placeholder="סיסמה"
                secureTextEntry // Make password field hidden
              />
            </View>
          ) : (
            <View className=" w-full space-y-2 flex-col items-center justify-center">
              <TextInput
                onChangeText={(text) => handleChange("city", text)}
                className=" w-full p-3 bg-[#ffffffb3] font-semibold text-primary placeholder:text-primary"
                placeholder="עיר"
              />
              <View className=" flex-row items-center space-x-2">
                <TextInput
                  onChangeText={(text) => handleChange("num", text)}
                  className=" p-3 flex-1 bg-[#ffffffb3] font-semibold text-primary placeholder:text-primary"
                  placeholder="מספר דירה"
                />
                <TextInput
                  onChangeText={(text) => handleChange("entrance", text)}
                  className=" p-3 flex-1 bg-[#ffffffb3] font-semibold text-primary placeholder:text-primary"
                  placeholder="כניסה"
                />
              </View>
              <View className=" flex-row items-center space-x-2">
                <TextInput
                  onChangeText={(text) => handleChange("zipCode", text)}
                  className=" p-3 flex-1 bg-[#ffffffb3] font-semibold text-primary placeholder:text-primary"
                  placeholder="מיקוד"
                />
                <TextInput
                  onChangeText={(text) => handleChange("apartment", text)}
                  className=" p-3 flex-1 bg-[#ffffffb3] font-semibold text-primary placeholder:text-primary"
                  placeholder="דירה"
                />
              </View>
              <TextInput
                onChangeText={(text) => handleChange("phone", text)}
                className=" w-full p-3 bg-[#ffffffb3] font-semibold text-primary placeholder:text-primary"
                placeholder="פלאפון"
              />
            </View>
          )}
          <TouchableOpacity
            disabled={
              next
                ? userForm?.city == "" &&
                  userForm?.email == "" &&
                  userForm?.name == "" &&
                  userForm?.password == "" &&
                  userForm?.entrance == "" &&
                  userForm?.num == "" &&
                  userForm?.phone == "" &&
                  userForm?.street == "" &&
                  userForm?.zipCode == ""
                : userForm?.email == "" &&
                  userForm?.name == "" &&
                  userForm?.password == ""
            }
            onPress={() => {
              next ? handleUserSignup() : SetNext(!next);
            }}
            className="w-full"
          >
            <View className=" bg-accent flex-row items-center justify-center p-3">
              <Text className="font-bold text-xl text-accent_content">
                {next ? "Sign up" : "Next"}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
            <Text className=" pt-2 font-bold text-md text-accent_content">
              יש לך חשבון?
              <Text className=" text-accent underline mx-2">כניסה</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
