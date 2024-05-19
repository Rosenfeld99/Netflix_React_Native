import {
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
  Animated,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import HeaderBack from "../utils/HeaderBack";
import { useNavigation } from "@react-navigation/native";
import { LOGO_N_IMAGE } from "../../constants";
import { MaterialCommunityIcons, Fontisto } from "@expo/vector-icons";
import { fetchupcomingMovies, image500 } from "../api/movieDB";
import { formatDateToText } from "../utils/func";

export default function ComingSoonScreen() {
  const { width, height } = Dimensions.get("window");
  const [upcoming, setUpcoming] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    console.log(" render data");
    setTimeout(() => {
      getUpcomingMovies();
    }, 200);
  }, []);

  const getUpcomingMovies = async () => {
    const data = await fetchupcomingMovies();
    console.log("get upcoming movies", data.results[0]);
    if (data && data.results) {
      setUpcoming(data.results);
    }
  };

  const pulseAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (upcoming.length == 0) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(pulseAnim, {
            toValue: 0.5,
            duration: 700,
            useNativeDriver: true,
          }),
          Animated.timing(pulseAnim, {
            toValue: 1,
            duration: 700,
            useNativeDriver: true,
          }),
        ])
      ).start();
    }
  }, [pulseAnim]);

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
          Coming Soon
        </Text>
      </View>
      {upcoming?.length > 0 ? (
        <ScrollView>
          {/* litel card coming soon */}
          {upcoming.map((item, index) =>
            index < 2 ||
            index == 6 ||
            index == 7 ||
            index == 15 ||
            index == 16 ? (
              <TouchableOpacity
                onPress={() => navigation.push("Movie", item)}
                className=" flex-row items-center gap-2 p-2 bg-[#424242]"
              >
                {/* Card item litel */}
                <View>
                  <Image
                    className=" w-40 h-20 rounded bg-[#bbb]"
                    source={{ uri: image500(item?.backdrop_path) }}
                  />
                </View>
                <View className=" flex-col gap-2">
                  <View>
                    <Text className=" text-primary_content text-md capitalize font-semibold ">
                      new aviral
                    </Text>
                    <Text className=" text-primary_content text-md capitalize font-semibold ">
                      {item?.title?.length > 20
                        ? item?.title.substring(0, 20) + " ..."
                        : item?.title}
                    </Text>
                  </View>
                  <Text className=" text-neutral text-xs capitalize font-semibold ">
                    {item?.release_date}
                  </Text>
                </View>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => navigation.push("Movie", item)}
                className="my-10"
              >
                {/* Card with detaile coming soon */}
                <View>
                  <Image
                    style={{ width: width, height: height * 0.25 }}
                    className="bg-[#bbb]"
                    source={{ uri: image500(item?.backdrop_path) }}
                  />
                </View>
                <View className=" flex-row items-center justify-end px-7 gap-7">
                  <TouchableOpacity className=" flex-col items-center gap-2">
                    <MaterialCommunityIcons
                      name="bell"
                      size={24}
                      color="white"
                    />
                    <Text className=" text-xs text-primary_content capitalize font-light">
                      remain me
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity className=" flex-col items-center gap-2">
                    <Fontisto name="share" size={20} color="white" />
                    <Text className=" text-xs text-primary_content capitalize font-light">
                      share
                    </Text>
                  </TouchableOpacity>
                </View>
                {/* detaile */}
                <View className=" p-3 gap-2">
                  <Text className=" text-sm text-primary_content font-light capitalize">
                    season coming {formatDateToText(item?.release_date)}
                  </Text>
                  <Text className=" text-xl text-primary_content font-bold capitalize">
                    {item?.title}
                  </Text>
                  <Text className=" text-xs text-primary_content font-light capitalize">
                    {item?.overview}
                  </Text>
                </View>
              </TouchableOpacity>
            )
          )}
        </ScrollView>
      ) : (
        <ScrollView>
          {[1, 2].map((__, index) => (
            <View key={index} className=" flex-row items-center gap-2 p-2">
              {/* Card item litel */}
              <Animated.View
                className=" w-40 h-20 rounded bg-[#42424291] animate-pulse"
                style={{ opacity: pulseAnim }}
              />
              <View className=" flex-col gap-2">
                <Animated.View
                  style={{ opacity: pulseAnim }}
                  className=" w-16 bg-[#42424291] h-6 rounded"
                />
                <Animated.View
                  style={{ opacity: pulseAnim }}
                  className=" w-28 bg-[#42424291] h-6 rounded"
                />
              </View>
            </View>
          ))}

          {[1, 2].map((__, index) => (
            <View key={index} className="mt-10">
              {/* Card with detaile coming soon */}
              <Animated.View
                style={{
                  width: width,
                  height: height * 0.25,
                  opacity: pulseAnim,
                }}
                className="bg-[#42424291] "
              />
              <View className=" p-3 gap-2">
                <Animated.View
                  style={{ opacity: pulseAnim }}
                  className=" bg-[#42424291] w-28 h-6 rounded"
                />
                <Animated.View
                  style={{ opacity: pulseAnim }}
                  className=" bg-[#42424291] w-40 h-6 rounded"
                />
                <Animated.View
                  style={{ opacity: pulseAnim }}
                  className=" bg-[#42424291] w-10 h-6 rounded"
                />
              </View>
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
}
