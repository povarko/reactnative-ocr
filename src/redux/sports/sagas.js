import { sportsService } from "@AppServices";
import { all, call, takeLatest, put, fork } from "redux-saga/effects";
import actionTypes from "../actionTypes";
import { sportsActions } from "./actions";
import reactotron from "reactotron-react-native";

function* getAllSportsRequest() {
  yield takeLatest(actionTypes.getAllSports, function*() {
    try {
      const sports = yield sportsService.getAllSports();
      yield put(sportsActions.getAllSportsSuccess(sports));
    } catch (err) {
      reactotron.log(err.message);
      yield put(sportsActions.getAllSportsError(err.message));
    }
  });
}

export default function* sportsSagas() {
  yield all([fork(getAllSportsRequest)]);
}
