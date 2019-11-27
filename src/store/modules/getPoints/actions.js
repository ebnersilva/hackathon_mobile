export function actionGetPointsRequest() {
  return {
    type: "GET_POINTS/REQUEST"
  };
}

export function actionGetPointsSuccess(data) {
  return {
    type: "GET_POINTS/SUCCESS",
    payload: {
      data
    }
  };
}

export function actionGetPointsFailure(error) {
  return {
    type: "GET_POINTS/FAILURE",
    payload: {
      error
    }
  };
}
