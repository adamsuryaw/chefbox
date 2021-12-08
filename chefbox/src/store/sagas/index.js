import { all } from "redux-saga/effects";
import { watchGetOrderList } from "./order";
import { watchGetRecipeList, watchGetDetailsList } from "./recipe";

function* rootSaga() {
  yield all([watchGetOrderList(), watchGetRecipeList(), watchGetDetailsList()]);
}

export default rootSaga;
