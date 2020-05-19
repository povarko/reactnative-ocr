import actionTypes from "../actionTypes";

export const athletesActions = {
  searchAthletes,
  searchAthletesSuccess,
  searchAthletesError,

  getTrackAthletes,
  getTrackAthletesSuccess,
  getTrackAthletesError,

  postTrackAthletes,
  postTrackAthletesSuccess,
  postTrackAthletesError,

  postTrackMultiAthletes,
  postTrackMultiAthletesSuccess,
  postTrackMultiAthletesError
};

////-------------- GET SEARCH ATHLETES --------------////
function searchAthletes(pro, amateur, semiPro, sortBy, countryId) {
  return {
    type: actionTypes.searchAthletes,
    pro,
    amateur,
    semiPro,
    sortBy,
    countryId
  };
}

function searchAthletesSuccess(payload) {
  return { type: actionTypes.searchAthletesSuccess, payload };
}

function searchAthletesError(error) {
  return { type: actionTypes.searchAthletesError, error };
}

////-------------- GET TRACK ATHLETES --------------////
function getTrackAthletes() {
  return { type: actionTypes.getTrackAthletes };
}
function getTrackAthletesSuccess(payload) {
  return { type: actionTypes.getTrackAthletesSuccess, payload };
}
function getTrackAthletesError(error) {
  return { type: actionTypes.getTrackAthletesError, error };
}
////-------------- POST TRACK ATHLETES --------------////
function postTrackAthletes(id) {
  return { type: actionTypes.postTrackAthletes, id };
}
function postTrackAthletesSuccess(payload) {
  return { type: actionTypes.postTrackAthletesSuccess, payload };
}
function postTrackAthletesError(error) {
  return { type: actionTypes.postTrackAthletesError, error };
}
////-------------- POST TRACK MULTI ATHLETES --------------////
function postTrackMultiAthletes(ids) {
  return { type: actionTypes.postTrackMultiAthletes, ids };
}
function postTrackMultiAthletesSuccess(payload) {
  return { type: actionTypes.postTrackMultiAthletesSuccess, payload };
}
function postTrackMultiAthletesError(error) {
  return { type: actionTypes.postTrackMultiAthletesError, error };
}
