import produce from "immer";

const INITIAL_STATE = {
  loading: false,
  data: null,
  error: null
};

export default function getPoints(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case "GET_POINTS/REQUEST": {
        draft.loading = true;
        break;
      }
      case "GET_POINTS/SUCCESS": {
        draft.loading = false;
        draft.data = action.payload.data;
        break;
      }
      case "GET_POINTS/FAILURE": {
        draft.loading = false;
        draft.error = action.payload.error;
        break;
      }
      default:
    }
  });
}
