import { all } from "redux-saga/effects";
import repoSaga from "./reops";

function* rootSaga() {
  yield all([repoSaga()]);
}

export default rootSaga;
