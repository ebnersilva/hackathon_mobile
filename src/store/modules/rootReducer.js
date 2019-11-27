import { combineReducers } from "redux";

import auth from "./auth/reducer";
import map from "./map/reducer";
import saveStudent from "./saveStudent/reducer";
import savePoints from "./savePoints/reducer";
import saveProfessor from "./saveProfessor/reducer";
import saveActivity from "./saveActivity/reducer";
import saveUserActivity from "./saveUserActivity/reducer";
import getPoints from "./getPoints/reducer";

export default combineReducers({
  auth,
  map,
  saveStudent,
  savePoints,
  saveProfessor,
  saveActivity,
  saveUserActivity,
  getPoints
});
