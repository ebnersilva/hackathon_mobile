export function actionLoginRequest(data) {
  return {
    type: "AUTH/REQUEST",
    payload: {
      data
    }
  };
}

export function actionLoginSuccess(data) {
  return {
    type: "AUTH/SUCCESS",
    payload: {
      data
    }
  };
}

export function actionLoginFailure(error) {
  return {
    type: "AUTH/FAILURE",
    payload: {
      error
    }
  };
}
