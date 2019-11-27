import { call, put, all, takeLatest } from "redux-saga/effects";
import api from "~/services/api";
import NavigationService from "~/services/navigation";

import { actionSaveStudentSuccess, actionSaveStudentFailure } from "./actions";


export function* saveStudent({ payload: { data } }) {
  try {
    const response = yield call(api.post, "/students", data);

    yield put(actionSaveStudentSuccess(response.data));

    NavigationService.navigate("Radar");
  } catch (err) {
    yield put(actionSaveStudentFailure(err.message));
  }
}

export default all([
  takeLatest("SAVE_STUDENT/REQUEST", saveStudent)
]);
