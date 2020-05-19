import { athletesService } from "@AppServices";
import { all, call, takeLatest, put, fork } from "redux-saga/effects";
import actionTypes from "../actionTypes";
import { athletesActions } from "./actions";
import { navigationService } from "@AppServices";
import reactotron from "reactotron-react-native";

function* searchAthletesRequest() {
  yield takeLatest(actionTypes.searchAthletes, function*({
    pro,
    amateur,
    semiPro,
    sortBy,
    countryId
  }) {
    try {
      const result = yield athletesService.searchAthletes(
        pro,
        amateur,
        semiPro,
        sortBy,
        countryId
      );

      reactotron.log(result);
      yield put(athletesActions.searchAthletesSuccess(result));
    } catch (err) {
      reactotron.log(err.message);
      yield put(athletesActions.searchAthletesError(err.message));
    }
  });
}

function* getTrackAthletesRequest() {
  yield takeLatest(actionTypes.getTrackAthletes, function*() {
    try {
      const result = yield athletesService.getTrackAthletes();
      reactotron.log(result);
      yield put(athletesActions.getTrackAthletesSuccess(result));
    } catch (err) {
      reactotron.log(err.message);
      yield put(athletesActions.getTrackAthletesError(err.message));
    }
  });
}

function* postTrackAthletesRequest() {
  yield takeLatest(actionTypes.postTrackAthletes, function*({ id }) {
    try {
      const result = yield athletesService.postTrackAthletes(id);
      reactotron.log(result);
      navigationService.navigate("BuildingFeed");
    } catch (err) {
      reactotron.log(err.message);
      yield put(athletesActions.postTrackAthletesError(err.message));
    }
  });
}

function* postTrackMultiAthletesRequest() {
  yield takeLatest(actionTypes.postTrackMultiAthletes, function*({ ids }) {
    try {
      const result = yield athletesService.postTrackMultiAthletes(ids);
      reactotron.log(result);
      navigationService.navigate("BuildingFeed");
    } catch (err) {
      reactotron.log(err.message);
      yield put(athletesActions.postTrackMultiAthletesError(err.message));
    }
  });
}

export default function* athletesSagas() {
  yield all([
    fork(searchAthletesRequest),
    fork(getTrackAthletesRequest),
    fork(postTrackAthletesRequest),
    fork(postTrackMultiAthletesRequest)
  ]);
}
