import actionTypes from "../actionTypes";

const initialState = {
  searchAthletes: [],
  trackAthletes: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.searchAthletesSuccess:
      return { ...state, searchAthletes: action.payload };
    case actionTypes.getTrackAthletesSuccess:
      return { ...state, trackAthletes: action.payload };
    default:
      return state;
  }
}
