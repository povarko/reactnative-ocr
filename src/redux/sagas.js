import { all } from "redux-saga/effects";
import authSagas from "./auth/sagas";
import sportsSagas from "./sports/sagas";
import teamSagas from "./team/sagas";
import athletesSagas from "./athlete/sagas";

export default function* rootSaga(getState) {
  yield all([authSagas(), sportsSagas(), teamSagas(), athletesSagas()]);
}
