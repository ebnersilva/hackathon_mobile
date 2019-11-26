import { Platform } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import axios from "axios";
import env from "~/config/env";

const api = axios.create({
  baseURL: Platform.OS === "ios" ? env.SERVER_URL_IOS : env.SERVER_URL_ANDROID,
  timeout: 8000
});

api.interceptors.request.use(async config => {
  try {
    const token = await AsyncStorage.getItem("@Hackathon:token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  } catch (err) {
    return err;
  }
});

export default api;
