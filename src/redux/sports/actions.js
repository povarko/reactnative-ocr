import actionTypes from "../actionTypes";

export const sportsActions = {
  getAllSports,
  getAllSportsSuccess,
  getAllSportsError
};

function getAllSports() {
  return { type: actionTypes.getAllSports };
}

function getAllSportsSuccess(payload) {
  return { type: actionTypes.getAllSportsSuccess, payload };
}

function getAllSportsError(error) {
  return { type: actionTypes.getAllSportsError, error };
}
