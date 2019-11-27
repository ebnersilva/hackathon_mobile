import produce from "immer";

const INITIAL_STATE = {
  region: null
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case "MAP/SET_REGION": {
        draft.region = action.payload.data;
        break;
      }
      default:
    }
  });
}
