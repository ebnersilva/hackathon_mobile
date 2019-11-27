export function actionSavePointRequest(data) {
  return {
    type: "SAVE_POINT/REQUEST",
    payload: {
      data
    }
  };
}

export function actionSavePointSuccess(data) {
  return {
    type: "SAVE_POINT/SUCCESS",
    payload: {
      data
    }
  };
}

export function actionSavePointFailure(error) {
  return {
    type: "SAVE_POINT/FAILURE",
    payload: {
      error
    }
  };
}
