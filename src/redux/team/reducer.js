import actionTypes from "../actionTypes";

const initialState = {
  searchTeam: [],
  trackTeam: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.searchTeamsSuccess:
      return { ...state, searchTeam: action.payload };
    case actionTypes.getTrackTeamsSuccess:
      return { ...state, trackTeam: action.payload };
    default:
      return state;
  }
}
