import * as React from "react";
import {
  View,
  Image,
  Text,
  Pressable,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

function ImageBlock({ src, containerClasses }) {
  return (
    <Image
      source={{ uri: src }}
      className={`aspect-square ${containerClasses}`}
    />
  );
}

function DetailsBlock({ icons, text, costumClasses, textClasses }) {
  return (
    <TouchableOpacity
      onPress={() => console.log("press : ", text)}
      className={` w-full px-8 py-3 ${costumClasses}`}
    >
      <View className="flex-row items-center justify-between">
        <Text className={`text-gray-400 text-lg font-semidold ${textClasses}`}>
          {text}
        </Text>
        <AntDesign name="right" size={20} color="#777" />
      </View>
    </TouchableOpacity>
  );
}

function InputForm({ placeholder, label, icon, costumClasses }) {
  return (
    <TouchableOpacity
      
      className={`border-2 border-gray-200 border-solid w-full p-3 my-3 rounded-3xl ${costumClasses}`}
    >
      <Text className=" absolute top-0 left-0 -mt-5 p-2 ml-5 text-shop_secondary_content font-bold bg-white">
        {label} {icon}
      </Text>
      <TextInput
        placeholder={placeholder}
        className="text-xl font-semibold px-5"
      />
    </TouchableOpacity>
  );
}

function SettingsButton({ text, textClasses, buttonClasses, iconSrc }) {
  return (
    <TouchableOpacity onPress={() => console.log("press : ", text)}>
      <Pressable
        className={`flex flex-col justify-center px-8 py-5 rounded-3xl shadow-lg ${buttonClasses}`}
      >
        <View className="">
          <Text className={` ${textClasses}`}>{text}</Text>
          <Image source={{ uri: iconSrc }} className="shrink-0 w-6 " />
        </View>
      </Pressable>
    </TouchableOpacity>
  );
}

export default function UserProfile() {
  const iconData = [
    {
      src1: "https://cdn.builder.io/api/v1/image/assets/TEMP/fe1816d7f208f8b4b0baecbd95de6749d8d0bf51befbadb986a78d95fe2c6eba?apiKey=801bf1196414482bb2fc1b27b02c48a7&",
      src2: "https://cdn.builder.io/api/v1/image/assets/TEMP/1daaebd4bc74f6806ef324632dca7b282a425b9d19baf378274d363dfa00a561?apiKey=801bf1196414482bb2fc1b27b02c48a7&",
    },
    {
      src1: "https://cdn.builder.io/api/v1/image/assets/TEMP/3649ae7b52c4bb254d8226d275c781e4789a1a42ae0f0b8be9cfaf49cdd0982a?apiKey=801bf1196414482bb2fc1b27b02c48a7&",
      src2: "https://cdn.builder.io/api/v1/image/assets/TEMP/46fcd95238584b5defb071d418b23cb24fd376c6c77c13c7827fe59b2afe6caa?apiKey=801bf1196414482bb2fc1b27b02c48a7&",
    },
  ];

  return (
    <ScrollView>
      <View className="flex flex-col mx-auto w-full ">
        <View className="z-10 bg-blue-300 w-full">
          <View className="h-44 w-full z-40 flex flex-col items-center justify-center">
            <View className=" rounded-lg mt-40 aspect-square h-[30vw] border-4 border-blue-300 overflow-hidden">
              <ImageBlock src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd616cd70b5b807f6d87e8da011899768aa5ec668d57c6ca28eea77e81fcf76f?apiKey=801bf1196414482bb2fc1b27b02c48a7&" />
            </View>
          </View>

          <View className="flex flex-col items-center pt-20 pb-9 px-4 w-full bg-white rounded-t-[35px]">
            <View className=" flex-col w-full ">
              <InputForm
                icon={false}
                label={"Name"}
                placeholder={"Enter full name..."}
                costumClasses="my-3"
              />
              <InputForm
                icon={false}
                label={"Email"}
                placeholder={"Enter full email..."}
              />
              <InputForm
                icon={false}
                label={"Delivery address"}
                placeholder={"Enter full Delivery address..."}
              />
              <InputForm
                icon={false}
                label={"Password"}
                placeholder={"Enter stronge password..."}
              />
            </View>
            <View className="mt-12 w-full border-b-2 border-gray-200 border-solid max-w-[337px] stroke-[1px] stroke-gray-200"></View>
            <View className=" w-full my-8">
              <DetailsBlock text="Payment Details" />
              <DetailsBlock text="Order history" />
              <DetailsBlock text="Manage Adderss" />
            </View>
            <View className="flex-row justify-between self-stretch text-lg font-medium leading-7">
              <SettingsButton
                text="Edit Profile"
                textClasses="text-white"
                buttonClasses="bg-stone-700"
                iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/86925217f3e9ffd3950aaf82b66e2be441b05fdfbc8c1e759de942d114b5793e?apiKey=801bf1196414482bb2fc1b27b02c48a7&"
              />
              <SettingsButton
                text="Log out"
                textClasses="text-rose-600"
                buttonClasses="border-rose-600 border-solid shadow-lg border-[3px]"
                iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/dfcfa4e045eb18c1ca37bf7ed7169e9a6058aea61f8c7a23f698ca1d78759068?apiKey=801bf1196414482bb2fc1b27b02c48a7&"
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
