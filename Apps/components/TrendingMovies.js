import { View, Text, Dimensions, Image } from "react-native";
import React from "react";
import Carousel from "react-native-snap-carousel";
import { TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { fallbackImagePoster, image500 } from "../api/movieDB";

const { width, height } = Dimensions.get("window");
export default function TrendingMovies({ data }) {
  const navigation = useNavigation();
  const handleClick = (item) => {
    navigation.navigate("Movie", item);
  };
  return (
    <View className="mb-8">
      <Text className=" text-white text-xl mx-4 mb-5 capitalize">Trending now</Text>
      <Carousel
        data={data}
        renderItem={({ item }) => (
          <MovieCard item={item} handleClick={handleClick} />
        )}
        firstItem={2}
        inactiveSlideOpacity={0.6}
        sliderWidth={width}
        itemWidth={width * 0.62}
        slideStyle={{ display: "flex", alignItems: "center" }}
      />
    </View>
  );
}

const MovieCard = ({ item, handleClick }) => {
  return (
    <TouchableWithoutFeedback onPress={()=>handleClick(item)}>
      <Image
        // source={require("../../assets/icon.png")}
        source={{ uri: image500(item.poster_path) || fallbackImagePoster }}
        style={{ width: width * 0.6, height: height * 0.4 }}
        className=" rounded"
      />
    </TouchableWithoutFeedback>
  );
};
