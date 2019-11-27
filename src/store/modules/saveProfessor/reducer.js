import produce from "immer";

const INITIAL_STATE = {
  loading: false,
  data: null,
  error: null
};

export default function saveProfessor(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case "SAVE_PROFESSOR/REQUEST": {
        draft.loading = true;
        break;
      }
      case "SAVE_PROFESSOR/SUCCESS": {
        draft.loading = false;
        draft.data = action.payload.data;
        break;
      }
      case "SAVE_PROFESSOR/FAILURE": {
        draft.loading = false;
        draft.error = action.payload.error;
        break;
      }
      default:
    }
  });
}
