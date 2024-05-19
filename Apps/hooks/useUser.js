import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { apiMethod } from "../../services/services";
import {
  LOGIN_ROUTE,
  REGISTER_ROUTE,
  USER_INFO_ROUTE,
  USER_SCREENS_ROUTE,
} from "../../constants";

const useUser = () => {
  const { user, setUser, currtScreen, setcurrtScreen } =
    useContext(UserContext);
  // console.log(user, setUser);

  const signUp = async (bodyData) => {
    return await apiMethod(REGISTER_ROUTE, "POST", bodyData);
  };
  const signIn = async (bodyData) => {
    return await apiMethod(LOGIN_ROUTE, "POST", bodyData);
  };
  const getUserInfo = async () => {
    return await apiMethod(USER_INFO_ROUTE, "GET", {});
  };
  const handleUserEditScreen = async (bodyData) => {
    // console.log("bodyData : ", bodyData);
    return await apiMethod(
      USER_SCREENS_ROUTE + "editScreen/" + bodyData?._id,
      "PUT",
      bodyData
    );
  };
  const handleUserAddScreen = async (bodyData) => {
    console.log("bodyData Add Screen : ", bodyData);
    return await apiMethod(USER_SCREENS_ROUTE + "addScreen", "POST", bodyData);
  };
  const handleUserDeleteScreen = async (screenId) => {
    // console.log("bodyData Delete Screen : ", screenId);
    return await apiMethod(
      USER_SCREENS_ROUTE + "deleteScreen/" + screenId,
      "DELETE",
      {}
    );
  };
  const handleUserToggleFavs = async (bodyData) => {
    console.log(
      "bodyData toggle faves arr : ",
      bodyData?.screenId,
      bodyData?.fav?.id
    );
    return await apiMethod(
      `${USER_SCREENS_ROUTE}screens/${bodyData?.screenId}/editFavs`,
      "PATCH",
      { fav: bodyData?.fav }
    );
  };
  return {
    user,
    setUser,
    signUp,
    signIn,
    getUserInfo,
    currtScreen,
    setcurrtScreen,
    handleUserEditScreen,
    handleUserAddScreen,
    handleUserDeleteScreen,
    handleUserToggleFavs,
  };
};

export default useUser;
