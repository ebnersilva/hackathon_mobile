import { call, put, all, takeLatest } from "redux-saga/effects";
import api from "~/services/api";
import NavigationService from "~/services/navigation";

import { actionSaveProfessorSuccess, actionSaveProfessorFailure } from "./actions";

export function* saveProfessor({ payload: { data } }) {
  try {
    const response = yield call(api.post, "/professors", data);

    yield put(actionSaveProfessorSuccess(response.data));

    NavigationService.navigate("Activity");
  } catch (err) {
    yield put(actionSaveProfessorFailure(err.message));
  }
}

export default all([
  takeLatest("SAVE_PROFESSOR/REQUEST", saveProfessor)
]);
