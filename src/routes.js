import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Activity from "./pages/Activity";
import Initial from "./pages/Initial";
import QrCodeGen from "./pages/QrCodeGen";
import QrCodeScan from "./pages/QrCodeScan";
import Radar from "./pages/Radar";
import Places from "./pages/Places";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";


export default function createNavigator(initialRoute = "Initial") {
  return createAppContainer(
    createSwitchNavigator(
      {
        Activity,
        Initial,
        QrCodeGen,
        QrCodeScan,
        Radar,
        Places,
        SignIn,
        SignUp
      },
      {
        initialRouteName: initialRoute
      }
    )
  );
}
