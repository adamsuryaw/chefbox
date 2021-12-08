import { all } from "redux-saga/effects";
import { watchGetOrderList } from "./order";

function* rootSaga() {
  yield all([watchGetOrderList()]);
}

export default rootSaga;
