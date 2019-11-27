import { call, put, all, takeLatest } from "redux-saga/effects";
import api from "~/services/api";
import NavigationService from "~/services/navigation";

import { actionGetPointsSuccess, actionGetPointsFailure } from "./actions";


export function* getPoints() {
  try {
    const response = yield call(api.get, "/points");

    yield put(actionGetPointsSuccess(response.data));
  } catch (err) {
    yield put(actionGetPointsFailure(err.message));
  }
}

export default all([
  takeLatest("GET_POINTS/REQUEST", getPoints)
]);
