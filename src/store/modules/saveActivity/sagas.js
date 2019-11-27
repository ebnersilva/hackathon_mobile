import { call, put, all, takeLatest } from "redux-saga/effects";
import api from "~/services/api";
import NavigationService from "~/services/navigation";

import { actionSaveActivitySuccess, actionSaveActivityFailure } from "./actions";


export function* saveActivity({ payload: { data } }) {
  try {
    const response = yield call(api.post, "/activities", data);

    yield put(actionSaveActivitySuccess(response.data));

    NavigationService.navigate("Places");
  } catch (err) {
    yield put(actionSaveActivityFailure(err.message));
  }
}

export default all([
  takeLatest("SAVE_ACTIVITY/REQUEST", saveActivity)
]);
