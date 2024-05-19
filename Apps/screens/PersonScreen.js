import {
  View,
  Text,
  Platform,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
import { useNavigation, useRoute } from "@react-navigation/native";
import { styles } from "../../theme";
import MovieList from "../components/MovieList";
import Loading from "../components/Loading";
import {
  fallbackPersonImagePoster,
  fetchPersonDetailes,
  fetchPersonMovies,
  image342,
} from "../api/movieDB";

const { width, height } = Dimensions.get("window");
const ios = Platform.OS == "ios";
const verticslMarin = ios ? "" : "my-3";

export default function PersonScreen() {
  const navigation = useNavigation();
  const [isFavorite, setIsFavorite] = useState(false);
  const [personMovies, setPersonMovies] = useState([]);
  const [person, setPerson] = useState({});
  const [loading, setLoading] = useState(false);
  const { params: item } = useRoute();

  useEffect(() => {
    setLoading(true);
    // console.log("Person item : ", item);
    getPersonDetailes(item.id);
    getPersonMovies(item.id);
  }, [item]);
  const getPersonDetailes = async (id) => {
    const data = await fetchPersonDetailes(id);
    if (data) setPerson(data);
    setLoading(false);
    console.log(person);
  };
  const getPersonMovies = async (id) => {
    const data = await fetchPersonMovies(id);
    if (data && data?.cast) setPersonMovies(data?.cast);
    // console.log(person);
  };
  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 20 }}
      className="bg-neutral-900 flex-1"
    >
      <SafeAreaView
        className={`z-20 w-full flex-row justify-between items-center px-4 ${verticslMarin}`}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.background}
          className="rounded-xl p-1"
        >
          <ChevronLeftIcon size="28" color="white" strokeWidth={2.5} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIsFavorite(!isFavorite)}>
          <HeartIcon size="35" color={isFavorite ? "red" : "white"} />
        </TouchableOpacity>
      </SafeAreaView>

      {/* person detailes */}
      {loading ? (
        <Loading />
      ) : (
        <View className="shadow-2xl shadow-white">
          <View
            className="flex-row justify-center shadow"
            style={{
              shadowColor: "gray",
              shadowRadius: 40,
              shadowOpacity: 1,
              shadowOffset: { width: 0, height: 5 },
            }}
          >
            <View className="items-center rounded-full overflow-hidden h-72 w-72 border-2 border-neutral-500">
              <Image
                style={{ height: height * 0.43, width: width * 0.74 }}
                // source={require("../../assets/icon.png")}
                source={{
                  uri:
                    image342(person?.profile_path) || fallbackPersonImagePoster,
                }}
              />
            </View>
          </View>
          <View className="mt-6">
            <Text className=" text-3xl text-white font-bold text-center capitalize">
              {person?.name}
            </Text>
            <Text className=" text-base text-neutral-500 text-center capitalize">
              {person?.place_of_birth}
            </Text>
            <View className="mx-3 flex-row  p-4 mt-6 justify-between items-center bg-neutral-700 rounded-full">
              <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                <Text className="text-white font-semibold capitalize ">
                  Gender
                </Text>
                <Text className="text-neutral-300 font-semibold capitalize text-xs ">
                  {person?.gender == 1 ? "Female" : "Make"}
                </Text>
              </View>
              <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                <Text className="text-white font-semibold capitalize ">
                  birthday
                </Text>
                <Text className="text-neutral-300 font-semibold capitalize text-xs ">
                  {person?.birthday}
                </Text>
              </View>
              <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                <Text className="text-white font-semibold capitalize ">
                  Know for
                </Text>
                <Text className="text-neutral-300 font-semibold capitalize text-xs ">
                  {person?.known_for_department}
                </Text>
              </View>
              <View className=" px-2 items-center">
                <Text className="text-white font-semibold capitalize ">
                  Popularty
                </Text>
                <Text className="text-neutral-300 font-semibold capitalize text-xs ">
                  {person?.popularity?.toFixed(2)}%
                </Text>
              </View>
            </View>
            <View className="my-6 mx-4 space-y-2">
              <Text className="text-white text-lg capitalize">byography</Text>
              <Text className="text-neutral-400 capitalize tracking-wide">
                {person?.biography || "N/A"}
              </Text>
            </View>

            {/* Person movies */}
            <MovieList
              title={"Movies"}
              hiddenSeeAll={true}
              data={personMovies}
            />
          </View>
        </View>
      )}
    </ScrollView>
  );
}
