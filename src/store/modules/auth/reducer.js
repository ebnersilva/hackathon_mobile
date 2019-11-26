import produce from "immer";

const INITIAL_STATE = {
  loading: false,
  data: null,
  error: null
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case "AUTH/REQUEST": {
        draft.loading = true;
        break;
      }
      case "AUTH/SUCCESS": {
        draft.loading = false;
        draft.data = action.payload.data;
        break;
      }
      case "AUTH/FAILURE": {
        draft.loading = false;
        draft.error = action.payload.error;
        break;
      }
      default:
    }
  });
}
