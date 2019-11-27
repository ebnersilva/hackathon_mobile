export function actionSaveUserActivityRequest(data) {
  return {
    type: "SAVE_USER_ACTIVITY/REQUEST",
    payload: {
      data
    }
  };
}

export function actionSaveUserActivitySuccess(data) {
  return {
    type: "SAVE_USER_ACTIVITY/SUCCESS",
    payload: {
      data
    }
  };
}

export function actionSaveUserActivityFailure(error) {
  return {
    type: "SAVE_USER_ACTIVITY/FAILURE",
    payload: {
      error
    }
  };
}
