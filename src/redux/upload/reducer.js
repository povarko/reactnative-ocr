import actionTypes from "../actionTypes";

const initialState = {
  uri: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.uploadImage:
      return { ...state, uri: action.uri };
    default:
      return state;
  }
}
