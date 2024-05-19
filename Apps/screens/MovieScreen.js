import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Platform,
  Image,
  Text,
} from "react-native";
import { Octicons } from "@expo/vector-icons";
import { useRoute, useNavigation } from "@react-navigation/native";
import Cast from "../components/Cast";
import MovieList from "../components/MovieList";
import Loading from "../components/Loading";
import {
  fallbackImagePoster,
  fetchMovieCredits,
  fetchMovieDetails,
  fetchSearchCollection,
  fetchSimilarMovies,
  image185,
  image342,
  image500,
  imageOriginal,
} from "../api/movieDB";
import HeaderBack from "../utils/HeaderBack";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import MovieGrid from "../components/MovieGrid";
import useUser from "../hooks/useUser";

const { width, height } = Dimensions.get("window");
const ios = Platform.OS == "ios";
const topMargin = ios ? "" : "mt-3";

export default function MovieScreen() {
  const navigation = useNavigation();
  const [isRate, setIsRate] = useState(false);
  const { currtScreen, setcurrtScreen, handleUserToggleFavs } = useUser();
  const { params: item } = useRoute();
  const [cast, setCast] = useState([]);
  const [similar, setSimilar] = useState([]);
  const [collaction, setCollaction] = useState([]);
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState({});
  const [selectOption, setSelectOption] = useState(true);

  useEffect(() => {
    // console.log("item ", item.id);
    setLoading(true);
    getMovieDetailes(item.id);
    getMovieCredits(item.id);
    getSimilarMovie(item.id);
    getCollactionMovie(item?.title);
  }, [item]);

  const getMovieDetailes = async (id) => {
    const data = await fetchMovieDetails(id);
    // console.log("get movie detailes ", data);
    if (data) setMovie(data);
    setLoading(false);
  };
  const getMovieCredits = async (id) => {
    const data = await fetchMovieCredits(id);
    // console.log("get movie credits ", data);
    if (data && data?.cast) setCast(data.cast);
  };
  const getSimilarMovie = async (id) => {
    const data = await fetchSimilarMovies(id);
    // console.log("get movie credits ", data);
    if (data && data?.results) setSimilar(data.results);
  };
  const getCollactionMovie = async (query) => {
    // const encodedStr = encodeURIComponent(query);
    const data = await fetchSearchCollection(query);
    // console.log("get movie collaction ", data);
    if (data && data?.results && data?.results?.length > 0)
      setCollaction(data.results);
  };
  // console.log(currtScreen);
  const handleClickToggleFavs = async () => {
    try {
      const bodyData = {
        screenId: currtScreen?._id,
        fav: movie,
      };
      const data = await handleUserToggleFavs(bodyData);
      if (data?.screen?._id) {
        setcurrtScreen(data?.screen);
        // console.log(data?.screen);
      }
    } catch (error) {
      console.log("Error : ", error.response.data.error);
      res.status(502).json({ error });
    }
  };

  return (
    <View className="bg-primary flex-1">
      {/* back button and poster movie */}
      <HeaderBack
        navigation={navigation}
        moreIcon={<AntDesign name="search1" size={24} color="white" />}
      />
      <ScrollView
        contentContainerStyle={{ paddingBottom: 20 }}
        className="bg-primary flex-1"
      >
        <View className="w-full ">
          <View>
            <Image
              className="bg-sckeleton sckeleton_animation"
              style={{ width, height: height * 0.26 }}
              // source={require("../../assets/icon.png")}
              source={{
                uri:
                  image500(item?.backdrop_path || item?.poster_path) ||
                  fallbackImagePoster,
              }}
            />
          </View>
        </View>
        {/* Movie details */}
        <View className="space-y-2 p-2">
          {/* Title */}
          <Text className=" text-white text-3xl font-bold tracking-wider">
            {movie?.title}
          </Text>
          {/* status , relese,runtime */}
          {movie?.id ? (
            <Text className=" text-neutral text-sm font-semibold ">
              {movie?.status} • {movie?.release_date?.split("-")[0]} •{" "}
              {movie?.runtime} min
            </Text>
          ) : null}
          {/* button controllers */}
          <TouchableOpacity className="bg-white flex-row items-center justify-center p-3 rounded ">
            <Entypo name="controller-play" size={24} color="black" />
            <Text className="  text-primary font-semibold">Play</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-[#434343] flex-row items-center space-x-2 justify-center p-3 rounded ">
            <Octicons name="download" size={24} color="white" />
            <Text className="  text-primary_content font-semibold">
              Download
            </Text>
          </TouchableOpacity>
          <View className="flex-row space-x-2">
            {movie?.genres?.map((genre, index) => {
              let showDote = index + 1 != movie.genres?.length;
              return (
                <Text
                  key={index}
                  className="text-primary_content font-semibold text-base "
                >
                  {genre?.name} {showDote ? "•" : null}
                </Text>
              );
            })}
          </View>
          <Text className="text-neutral tracking-wide text-xs">
            {movie?.overview}
          </Text>
        </View>

        {/* controllers option movie */}
        <View className=" flex-row items-center gap-10 p-3 pt-5">
          <TouchableOpacity
            onPress={handleClickToggleFavs}
            className="flex-col items-center"
          >
            {!currtScreen?.favs_id?.includes(movie?.id) ? (
              <Entypo name="plus" size={20} color="white" />
            ) : (
              <AntDesign name="check" size={20} color="white" />
            )}

            <Text className="text-primary_content text-xs">My List</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIsRate(!isRate);
            }}
            className="flex-col items-center"
          >
            <SimpleLineIcons
              name={isRate ? "dislike" : "like"}
              size={20}
              color="white"
            />
            <Text className="text-primary_content text-xs">Rate</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-col items-center">
            <Feather name="share-2" size={20} color="white" />
            <Text className="text-primary_content text-xs">Share</Text>
          </TouchableOpacity>
        </View>

        {/* similar movies */}
        {similar?.length > 0 && (
          <View className=" pt-5">
            <View className="px-3 flex-row justify-between items-center border-t-2 border-t-[#2d2c2c]">
              <View className=" flex-row items-center space-x-4">
                <TouchableOpacity
                  onPress={() => setSelectOption(!selectOption)}
                >
                  <Text
                    className={` text-white text-lg font-semibold border-t-4 py-2 capitalize ${
                      selectOption ? "border-t-secondary" : "border-t-primary"
                    }`}
                  >
                    More like this
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setSelectOption(!selectOption)}
                >
                  <Text
                    className={` text-white text-lg font-semibold border-t-4 py-2 capitalize ${
                      !selectOption ? "border-t-secondary" : "border-t-primary"
                    }`}
                  >
                    collection
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <MovieGrid
              title={"similar movies"}
              hiddenSeeAll={true}
              data={!selectOption ? collaction : similar}
            />
          </View>
        )}
        {/* cast */}
        {cast?.length > 0 && <Cast cast={cast} navigation={navigation} />}
      </ScrollView>
    </View>
  );
}
