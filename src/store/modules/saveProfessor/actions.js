export function actionSaveProfessorRequest(data) {
  return {
    type: "SAVE_PROFESSOR/REQUEST",
    payload: {
      data
    }
  };
}

export function actionSaveProfessorSuccess(data) {
  return {
    type: "SAVE_PROFESSOR/SUCCESS",
    payload: {
      data
    }
  };
}

export function actionSaveProfessorFailure(error) {
  return {
    type: "SAVE_PROFESSOR/FAILURE",
    payload: {
      error
    }
  };
}
