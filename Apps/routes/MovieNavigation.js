import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/netflix/HomeScreens";
import MovieScreen from "../screens/netflix/MovieScreen";
import PersonScreen from "../screens/netflix/PersonScreen";
import SearchScreen from "../screens/netflix/SearchScreen";
import SelectProfile from "../screens/netflix/SelectProfile";
import useUser from "../hooks/useUser";
import ComingSoonScreen from "../screens/netflix/ComingSoonScreen";
import ViewListScreen from "../screens/netflix/ViewListScreen";

import { Foundation, MaterialIcons, Feather } from "@expo/vector-icons";
import { Image, View } from "react-native";
import { getData } from "../utils/storageAction";
import { TOKEN_KEY } from "../../constants";
import EditProfileScreen from "../screens/netflix/EditProfileScreen";
import ChooseIconScreen from "../screens/netflix/ChooseIconScreen";
import SigninScreen from "../screens/auth/SigninScreen";
import SignupScreen from "../screens/auth/SignupScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabNavigator() {
  const { currtScreen } = useUser();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#fff",
        headerStyle: { backgroundColor: "#17181a" },
        tabBarStyle: { backgroundColor: "#121212", border: "none", padding: 5 },
        tabBarLabelStyle: "text-base font-medium",
      }}
    >
      {currtScreen && (
        <>
          <Tab.Screen
            name="Home"
            options={{
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <Foundation name="home" size={size} color={color} />
              ),
            }}
            component={HomeScreen}
          />
          <Tab.Screen
            name="ComingSoon"
            options={{
              title: "Coming soon",
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="video-library" size={size} color={color} />
              ),
            }}
            component={ComingSoonScreen}
          />
          <Tab.Screen
            name="Search"
            options={{
              headerShown: false,
              tabBarStyle: { display: "none" },
              tabBarIcon: ({ color, size }) => (
                <Feather name="search" size={size} color={color} />
              ),
            }}
            component={SearchScreen}
          />
          <Tab.Screen
            name="ViewList"
            options={{
              headerShown: false,
              tabBarButton: () => null,
            }}
            component={ViewListScreen}
          />
        </>
      )}

      <Tab.Screen
        name="SelectProfile"
        options={{
          headerShown: false,
          tabBarStyle: { display: "none" },
          title: "",
          tabBarIcon: ({ color, size }) => (
            <View className=" relative">
              <Image
                className=" w-full h-full mt-3.5"
                style={{ width: size * 1.5, height: size * 1.5 }}
                source={{
                  uri:
                    currtScreen?.imageScreen ||
                    "https://live.staticflickr.com/65535/52051814302_0bc57191b4_n.jpg",
                }}
              />
            </View>
          ),
        }}
        component={SelectProfile}
      />
      <Tab.Screen
        name="EditProfile"
        options={{
          headerShown: false,
          tabBarButton: () => null,
        }}
        component={EditProfileScreen}
      />
      <Tab.Screen
        name="ChooseIcon"
        options={{
          headerShown: false,
          tabBarButton: () => null,
          tabBarStyle: { display: "none" },
        }}
        component={ChooseIconScreen}
      />
    </Tab.Navigator>
  );
}

export default function MovieNavigation() {
  const { user } = useUser();
  useEffect(() => {}, [user, getData(TOKEN_KEY)]);

  // console.log(user);

  return (
    <Stack.Navigator>
      {!user ? (
        <>
          <Stack.Screen
            name="Signin"
            options={{ headerShown: false }}
            component={SigninScreen}
          />
          <Stack.Screen
            name="Signup"
            options={{ headerShown: false }}
            component={SignupScreen}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="Main"
            options={{ headerShown: false }}
            component={MainTabNavigator}
          />
          <Stack.Screen
            name="Movie"
            options={{ headerShown: false }}
            component={MovieScreen}
          />
          <Stack.Screen
            name="Person"
            options={{ headerShown: false }}
            component={PersonScreen}
          />
        </>
      )}
    </Stack.Navigator>
  );
}
