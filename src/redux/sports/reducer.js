import actionTypes from "../actionTypes";

const initialState = {
  all: [],
  popular: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.getAllSportsSuccess:
      return { ...state, all: action.payload };
    default:
      return state;
  }
}
