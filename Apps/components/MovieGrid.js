import { View, TouchableOpacity, Image, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { fallbackImagePoster, image185, image500 } from "../api/movieDB";

export default function MovieGrid({ data }) {
  const navigation = useNavigation();
  const { width, height } = Dimensions.get("window");
  const gridItemWidth = width * 0.32; // Adjust as needed
  const gridItemHeight = height * 0.22; // Adjust as needed

  return (
    <View className="mb-4 space-y-4 ">
      {/* Movie grid */}
      <View className=" flex-row flex-wrap gap-1.5 pl-0.5">
        {data?.map((item, index) => (
          <TouchableOpacity
            key={index} // Important for tracking items
            onPress={() => navigation.push("Movie", item)}
          >
            <View
              style={{
                width: gridItemWidth,
                height: gridItemHeight,
              }}
            >
              <Image
                source={{
                  uri: image500(item.poster_path) || fallbackImagePoster,
                }}
                className=" w-full h-full rounded"
              />
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
