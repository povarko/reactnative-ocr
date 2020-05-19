import { teamsService } from "@AppServices";
import { all, call, takeLatest, put, fork } from "redux-saga/effects";
import actionTypes from "../actionTypes";
import { teamActions } from "./actions";
import reactotron from "reactotron-react-native";

function* searchTeamsRequest() {
  yield takeLatest(actionTypes.searchTeams, function*({
    pro,
    amateur,
    semiPro,
    sortBy,
    countryId
  }) {
    try {
      const result = yield teamsService.searchTeams(
        pro,
        amateur,
        semiPro,
        sortBy,
        countryId
      );

      reactotron.log(result);
      yield put(teamActions.searchTeamsSuccess(result));
      // const teams = yield teamsService.searchTeams();
    } catch (err) {
      reactotron.log(err.message);
      yield put(teamActions.searchTeamsError(err.message));
    }
  });
}

function* getTrackTeamsRequest() {
  yield takeLatest(actionTypes.getTrackTeams, function*() {
    try {
      const result = yield teamsService.getTrackTeams();
      reactotron.log(result);
      yield put(teamActions.getTrackTeamsSuccess(result));
    } catch (err) {
      reactotron.log(err.message);
      yield put(teamActions.getTrackTeamsError(err.message));
    }
  });
}

function* postTrackTeamsRequest() {
  yield takeLatest(actionTypes.postTrackTeams, function*(id) {
    try {
      const result = yield teamsService.postTrackTeams(id);
      reactotron.log(result);
      navigationService.navigate("ChooseAthletes");
    } catch (err) {
      reactotron.log(err.message);
      yield put(teamActions.postTrackTeamsError(err.message));
    }
  });
}

function* postTrackMultiTeamsRequest() {
  yield takeLatest(actionTypes.postTrackMultiTeams, function*(ids) {
    try {
      const result = yield teamsService.postTrackMultiTeams(ids);
      reactotron.log(result);
      navigationService.navigate("ChooseAthletes");
    } catch (err) {
      reactotron.log(err.message);
      yield put(teamActions.postTrackMultiTeamsError(err.message));
    }
  });
}

export default function* teamsSagas() {
  yield all([
    fork(searchTeamsRequest),
    fork(getTrackTeamsRequest),
    fork(postTrackTeamsRequest),
    fork(postTrackMultiTeamsRequest)
  ]);
}
