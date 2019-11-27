import { call, put, all, takeLatest } from "redux-saga/effects";
import api from "~/services/api";
import NavigationService from "~/services/navigation";

import { actionSavePointSuccess, actionSavePointFailure } from "./actions";

export function* savePoint({ payload: { data } }) {
  try {
    console.tron.log('Chegou', data)
    const response = yield call(api.post, "/points", data);

    yield put(actionSavePointSuccess(response.data));
  } catch (err) {
    yield put(actionSavePointFailure(err.message));
  }
}

export default all([
  takeLatest("SAVE_POINT/REQUEST", savePoint)
]);
