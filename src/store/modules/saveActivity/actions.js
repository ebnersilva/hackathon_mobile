export function actionSaveActivityRequest(data) {
  return {
    type: "SAVE_ACTIVITY/REQUEST",
    payload: {
      data
    }
  };
}

export function actionSaveActivitySuccess(data) {
  return {
    type: "SAVE_ACTIVITY/SUCCESS",
    payload: {
      data
    }
  };
}

export function actionSaveActivityFailure(error) {
  return {
    type: "SAVE_ACTIVITY/FAILURE",
    payload: {
      error
    }
  };
}
