import { call, put, all, takeLatest } from "redux-saga/effects";
import api from "~/services/api";
import NavigationService from "~/services/navigation";

import { actionSaveUserActivitySuccess, actionSaveUserActivityFailure } from "./actions";


export function* saveUserActivity({ payload: { data } }) {
  try {
    const response = yield call(api.post, "/user_activity", data);

    yield put(actionSaveUserActivitySuccess(response.data));

    NavigationService.navigate("Radar");
  } catch (err) {
    yield put(actionSaveUserActivityFailure(err.message));
  }
}

export default all([
  takeLatest("SAVE_USER_ACTIVITY/REQUEST", saveUserActivity)
]);
