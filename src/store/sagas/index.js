import { all } from "redux-saga/effects";
import { watchGetOrderList } from "./order";
import { watchGetUser } from "./profile";
import { watchGetRecipeList, watchGetDetailsList } from "./recipe";
import { watchLogin, watchRegister, watchSignup } from "./auth";
import { watchGetLocationList } from "./location";

function* rootSaga() {
  yield all([watchGetOrderList(), watchGetRecipeList(), watchGetDetailsList(), watchGetUser(), watchLogin(), watchRegister(), watchSignup(), watchGetLocationList()]);
}

export default rootSaga;
