import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Platform,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import { styles } from "../../theme/index.js";
import TrendingMovies from "../components/TrendingMovies.js";
import MovieList from "../components/MovieList.js";
import { useNavigation } from "@react-navigation/native";
import Loading from "../components/Loading.js";
import {
  fallbackImagePoster,
  fetchTopRatedMovies,
  fetchTrandingMovies,
  fetchupcomingMovies,
  image500,
} from "../api/movieDB.js";
import { LinearGradient } from "expo-linear-gradient";
import { Entypo } from "@expo/vector-icons";
import useUser from "../hooks/useUser.js";
import { LOGO_N_IMAGE } from "../../constants/index.js";

const ios = Platform.OS == "ios";
export default function HomeScreen() {
  const navigation = useNavigation();
  const { width, height } = Dimensions.get("window");
  const { currtScreen } = useUser();

  const [tranding, setTranding] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [isScroll, setIsScroll] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTrandingMovies();
    getTopRatedMovies();
    getUpcomingMovies();
  }, []);

  const getTrandingMovies = async () => {
    const data = await fetchTrandingMovies();
    // console.log("get tranding movies", data);
    if (data && data.results) {
      setTranding(data.results);
      setLoading(false);
    }
  };
  const getTopRatedMovies = async () => {
    const data = await fetchTopRatedMovies();
    // console.log("get top rated movies", data);
    if (data && data.results) {
      setTopRated(data.results);
    }
  };
  const getUpcomingMovies = async () => {
    const data = await fetchupcomingMovies();
    // console.log("get upcoming movies", data);
    if (data && data.results) {
      setUpcoming(data.results);
    }
  };

  const handleScroll = (event) => {
    setIsScroll(event.nativeEvent.contentOffset.y > 0);
  };
  return (
    <View className="flex-1 bg-primary">
      {/* Search bar nad logo */}
      <SafeAreaView
        className={`${ios ? "-pb-2" : "pb-3"} ${
          isScroll ? "bg-[#000000c2]" : ""
        } absolute top-0 right-0 w-full z-30`}
      >
        <StatusBar style="" />
        <View className=" flex-row pt-2 items-center justify-between mx-4">
          <TouchableOpacity onPress={() => navigation.navigate("Search")}>
            <MagnifyingGlassIcon size="30" color="white" strokeWidth={2} />
          </TouchableOpacity>
          <Image className=" w-6 h-10" source={{ uri: LOGO_N_IMAGE }} />
        </View>
      </SafeAreaView>

      {loading ? (
        <Loading />
      ) : (
        <ScrollView
          // onScroll={handleScroll}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 10 }}
        >
          <View>
            <Image
              style={{ width, height: height * 0.65 }}
              // source={require("../../assets/icon.png")}
              source={{
                uri:
                  image500(
                    topRated[Math.floor(Math.random() * 20)]?.poster_path
                  ) || fallbackImagePoster,
              }}
            />
            <LinearGradient
              colors={["transparent", "rgba(0,0,0,0.8)", "rgba(0,0,0,1)"]}
              style={{
                width,
                height: height * 0.2,
                position: "absolute",
                bottom: 0,
              }}
              start={{ x: 0.5, y: 0 }}
              end={{ x: 0.5, y: 1 }}
            />
            <View className="flex-row items-center justify-center gap-3">
              <TouchableOpacity className="bg-white flex-row items-center px-3 py-2 rounded ">
                <Entypo name="controller-play" size={20} color="black" />
                <Text className="  text-primary font-semibold">Play</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("MyList", { data: tranding })
                }
                className="bg-[#4d4d4d] flex-row items-center px-3 py-2 rounded "
              >
                <Entypo name="plus" size={20} color="white" />
                <Text className="  text-primary_content font-semibold">
                  My List 
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* Tranding movies */}
          {tranding.length > 0 && <TrendingMovies data={tranding} />}

          {/* upcoming movies row */}
          <MovieList title="upcoming" data={upcoming} routeTo={"ViewList"} />

          {/* my list movies row */}
          {currtScreen?.favs_ar?.length > 0 && (
            <MovieList
              title="my list"
              data={currtScreen?.favs_ar}
              routeTo={"ViewList"}
            />
          )}

          {/* topRated movies row */}
          <MovieList title="topRated" data={topRated} routeTo={"ViewList"} />
        </ScrollView>
      )}
    </View>
  );
}
