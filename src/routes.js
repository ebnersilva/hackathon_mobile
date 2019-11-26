import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Login from "./pages/Login";
import Radar from "./pages/Radar";

export default function createNavigator(initialRoute = "Login") {
  return createAppContainer(
    createSwitchNavigator(
      {
        Login,
        Radar
      },
      {
        initialRouteName: initialRoute
      }
    )
  );
}
