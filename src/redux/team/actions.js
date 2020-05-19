import actionTypes from "../actionTypes";

export const teamActions = {
  searchTeams,
  searchTeamsSuccess,
  searchTeamsError,

  getTrackTeams,
  getTrackTeamsSuccess,
  getTrackTeamsError,

  postTrackTeams,
  postTrackTeamsSuccess,
  postTrackTeamsError,

  postTrackMultiTeams,
  postTrackMultiTeamsSuccess,
  postTrackMultiTeamsError
};

////-------------- GET SEARCH TEAMS --------------////
function searchTeams(pro, amateur, semiPro, sortBy, countryId) {
  return {
    type: actionTypes.searchTeams,
    pro,
    amateur,
    semiPro,
    sortBy,
    countryId
  };
}

function searchTeamsSuccess(payload) {
  return { type: actionTypes.searchTeamsSuccess, payload };
}

function searchTeamsError(error) {
  return { type: actionTypes.searchTeamsError, error };
}

////-------------- GET TRACK TEAMS --------------////
function getTrackTeams() {
  return { type: actionTypes.getTrackTeams };
}
function getTrackTeamsSuccess(payload) {
  return { type: actionTypes.getTrackTeamsSuccess, payload };
}
function getTrackTeamsError(error) {
  return { type: actionTypes.getTrackTeamsError, error };
}
////-------------- POST TRACK TEAMS --------------////
function postTrackTeams(id) {
  return { type: actionTypes.postTrackTeams, id };
}
function postTrackTeamsSuccess(payload) {
  return { type: actionTypes.postTrackTeamsSuccess, payload };
}
function postTrackTeamsError(error) {
  return { type: actionTypes.postTrackTeamsError, error };
}
////-------------- POST TRACK MULTI TEAMS --------------////
function postTrackMultiTeams(ids) {
  return { type: actionTypes.postTrackMultiTeams, ids };
}
function postTrackMultiTeamsSuccess(payload) {
  return { type: actionTypes.postTrackMultiTeamsSuccess, payload };
}
function postTrackMultiTeamsError(error) {
  return { type: actionTypes.postTrackMultiTeamsError, error };
}
