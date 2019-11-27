/* eslint-disable import/no-named-as-default */
import { all } from "redux-saga/effects";

import auth from "./auth/sagas";
import savePoints from "./savePoints/sagas";
import saveStudent from "./saveStudent/sagas";
import saveProfessor from "./saveProfessor/sagas";
import saveActivity from "./saveActivity/sagas";
import saveUserActivity from "./saveUserActivity/sagas";
import getPoints from "./getPoints/sagas";

export default function* rootSaga() {
  return yield all([
    auth,
    savePoints,
    saveStudent,
    saveProfessor,
    saveActivity,
    saveUserActivity,
    getPoints
  ]);
}
