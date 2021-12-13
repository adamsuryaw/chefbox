import { all } from "redux-saga/effects";
import { watchGetOrderList } from "./order";
import { watchGetRecipeList, watchGetDetailsList } from "./recipe";
import { watchLogin, watchRegister, watchSignup } from "./auth";

function* rootSaga() {
  yield all([watchGetOrderList(), watchGetRecipeList(), watchGetDetailsList(), watchLogin(), watchRegister(), watchSignup()]);
}

export default rootSaga;
