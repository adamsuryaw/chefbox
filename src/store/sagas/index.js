import { all } from "redux-saga/effects";
import { watchGetOrderList } from "./order";
import { watchGetUser } from "./profile";
import { watchGetRecipeList, watchGetDetailsList } from "./recipe";

function* rootSaga() {
  yield all([
    watchGetOrderList(),
    watchGetRecipeList(),
    watchGetDetailsList(),
    watchGetUser(),
  ]);
}

export default rootSaga;
