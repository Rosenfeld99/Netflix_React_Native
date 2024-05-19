import {
  View,
  Text,
  TextInput,
  Platform,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
} from "react-native";
import React, { useCallback, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { XMarkIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import Loading from "../components/Loading";
import debounce from "lodash.debounce";
import {
  fallbackImagePoster,
  fetchSearchMovies,
  image185,
} from "../api/movieDB";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import HeaderBack from "../utils/HeaderBack";

const ios = Platform.OS == "ios";
const { width, height } = Dimensions.get("window");

export default function SearchScreen() {
  const topMargin = ios ? "" : "mt-3";
  const navigation = useNavigation();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [InputVal, setInputVal] = useState("");

  const handleSearch = useCallback(
    debounce((value) => {
      if (value && value?.length > 2) {
        setLoading(true);
        fetchSearchMovies({
          query: value,
          include_adult: "false",
          page: 1,
        }).then((data) => {
          setLoading(false);
          if (data && data.results) setResults(data.results);
          // console.log("data?.results[0]",data?.results[0]);
        });
      } else {
        setLoading(false);
        setResults([]);
      }
    }, 400),
    []
  );

  const handleTextChange = (value) => {
    setInputVal(value);
    handleSearch(value);
  };
  const movieName = "Movie m=namekvdfnjkvnfdjkvnfd";
  return (
    <View className="flex-1 bg-primary">
      {/* header back */}
      <HeaderBack navigation={navigation}/>
      <View
        className={` px-4 mb-3 flex-row py-3 justify-between items-center bg-[#2b2a2a] ${topMargin}`}
      >
        <TouchableOpacity
          onPress={() => {
            InputVal?.length > 1
              ? (setInputVal(""), setResults([]))
              : navigation.navigate("Home");
          }}
          className="pr-2"
        >
          {InputVal?.length > 1 ? (
            <XMarkIcon color={"white"} size={25} />
          ) : (
            <FontAwesome name="microphone" size={24} color="white" />
          )}
        </TouchableOpacity>
        <TextInput
          onChangeText={handleTextChange}
          placeholder="Search Movie"
          value={InputVal}
          placeholderTextColor={"lightgray"}
          className=" text-right pb-1 pr-3 flex-1 text-base font-semibold text-white tracking-wider"
        />
        <AntDesign name="search1" size={30} color="white" />
      </View>

      {/* results */}
      {loading ? (
        <Loading />
      ) : results?.length > 0 ? (
        <ScrollView
          contentContainerStyle={{ paddingHorizontal: 15 }}
          showsVerticalScrollIndicator={false}
          className="space-y-3"
        >
          <Text className=" text-white font-semibold ml-1 ">
            results ({results?.length})
          </Text>
          <View className="flex-col justify-between">
            {results?.map((item, index) => (
              <TouchableWithoutFeedback
                key={index}
                onPress={() => navigation.push("Movie", item)}
              >
                <View className="space-x-5 flex-row items-center mb-2.5">
                  <Image
                    // source={require("../../assets/icon.png")}
                    source={{
                      uri:
                        image185(item?.backdrop_path || item?.poster_path) ||
                        fallbackImagePoster,
                    }}
                    className="rounded"
                    style={{ width: width * 0.44, height: height * 0.11 }}
                  />
                  <View className=" flex-row items-center justify-between flex-1">
                    <Text className="text-primary_content font-semibold ml-1">
                      {item?.title?.length > 16
                        ? item?.title?.slice(0, 16) + "..."
                        : item?.title}
                    </Text>
                    <AntDesign name="playcircleo" size={24} color="white" />
                  </View>
                </View>
              </TouchableWithoutFeedback>
            ))}
          </View>
        </ScrollView>
      ) : (
        <View>
          <Image
            source={require("../../assets/movieTimepng.png")}
            className="w-96 h-96 flex-row justify-center"
          />
        </View>
      )}
    </View>
  );
}
