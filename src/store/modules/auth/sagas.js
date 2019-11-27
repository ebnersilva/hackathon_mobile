import { call, put, all, takeLatest } from "redux-saga/effects";
import AsyncStorage from "@react-native-community/async-storage";
import api from "~/services/api";
import NavigationService from "~/services/navigation";

import { actionLoginSuccess, actionLoginFailure } from "./actions";

export function* login({ payload: { data } }) {
  try {
    const response = yield call(api.post, "/sessions", data);

    yield call(
      [AsyncStorage, "setItem"],
      "@Hackathon:token",
      response.data[0].token
    );

    yield put(actionLoginSuccess(response.data));

    if (response.data[1].type === 0) {
      NavigationService.navigate("Activity");
    } else {
      NavigationService.navigate("QrCodeScan");
    }
  } catch (err) {
    yield put(actionLoginFailure(err));
  }
}

export default all([
  takeLatest("AUTH/REQUEST", login)
]);
