import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import MovieGrid from "../components/MovieGrid";
import HeaderBack from "../utils/HeaderBack";
import { useNavigation, useRoute } from "@react-navigation/native";
import { LOGO_N_IMAGE } from "../../constants";

export default function ViewListScreen() {
  const {
    params: {
      params: { data, title },
    },
  } = useRoute();
  const navigation = useNavigation();
  // console.log("my list", data);
  return (
    <View className="bg-primary flex-1">
      <View>
        <HeaderBack
          navigation={navigation}
          moreIcon={
            <View>
              <Image className=" w-6 h-10" source={{ uri: LOGO_N_IMAGE }} />
            </View>
          }
        />
        <Text className=" capitalize text-xl text-primary_content p-4 font-semibold">
          {title}
        </Text>
      </View>
      <ScrollView>
        <MovieGrid title={"My list"} hiddenSeeAll={true} data={data} />
      </ScrollView>
    </View>
  );
}
