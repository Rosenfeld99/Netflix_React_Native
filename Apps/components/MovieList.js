import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
  Dimensions,
  Image,
} from "react-native";
import React from "react";
import { styles } from "../../theme";
import { useNavigation } from "@react-navigation/native";
import { fallbackImagePoster, image500 } from "../api/movieDB";

const { width, height } = Dimensions.get("window");
export default function MovieList({ title, data, hiddenSeeAll, routeTo }) {
  const navigation = useNavigation();

  return (
    <View className="mb-4 space-y-4">
      <View className="mx-4 flex-row justify-between items-center">
        <Text className=" text-white text-xl capitalize">{title}</Text>
        {!hiddenSeeAll && (
          <TouchableOpacity
            onPress={() =>
              routeTo &&
              navigation.navigate(routeTo, { params: { data, title } })
            }
          >
            <Text className=" text-secondary text-md capitalize">see all</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Movie row */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {data.reverse().map((item, index) => (
          <TouchableWithoutFeedback
            key={index}
            onPress={() => navigation.push("Movie", item)}
          >
            <View className="space-y-1 mr-4">
              <Image
                source={{
                  uri: image500(item.poster_path) || fallbackImagePoster,
                }}
                // source={require("../../assets/icon.png")}
                className=" rounded"
                style={{ width: width * 0.33, height: height * 0.22 }}
              />
              <Text className=" text-neutral-300 ml-1">
                {item.title?.length > 14
                  ? item.title?.slice(0, 14) + "..."
                  : item.title}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </ScrollView>
    </View>
  );
}
