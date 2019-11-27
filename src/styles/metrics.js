import { Dimensions, Platform } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

const { width, height } = Dimensions.get("window");

export default {
  baseMarginTop: Platform.OS === "ios" ? getStatusBarHeight() + 20 : 30,
  baseMargin: 10,
  basePadding: 20,
  baseRadius: 5,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,

  heightInput: 52,
  heightButton: 52
};
