import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    // saving error
    console.log("Error : ", e);
  }
};

export const getData = async (key) => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (e) {
    // read error
    console.log("Error : ", e);
  }

  console.log("Done.");
};
