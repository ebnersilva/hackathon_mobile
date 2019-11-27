export function actionSaveStudentRequest(data) {
  return {
    type: "SAVE_STUDENT/REQUEST",
    payload: {
      data
    }
  };
}

export function actionSaveStudentSuccess(data) {
  return {
    type: "SAVE_STUDENT/SUCCESS",
    payload: {
      data
    }
  };
}

export function actionSaveStudentFailure(error) {
  return {
    type: "SAVE_STUDENT/FAILURE",
    payload: {
      error
    }
  };
}
