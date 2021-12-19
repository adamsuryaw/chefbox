import { all } from "redux-saga/effects";
import { watchGetOrderList, watchUpdateAddress } from "./order";
import { watchGetUser, watchUpdateUser } from "./profile";
import {
  watchGetRecipeList,
  watchGetDetailsList,
  watchFilterData,
} from "./recipe";
import { watchLogin, watchRegister, watchSignup } from "./auth";
import { watchGetLocationList } from "./location";
import { watchReviewList } from "./review";
import { watchAddCart, watchAllCart } from "./cart";
import { watchPutCreate, watchPostCreate } from "./create";

function* rootSaga() {
  yield all([
    watchGetOrderList(),
    watchGetRecipeList(),
    watchGetDetailsList(),
    watchFilterData(),
    watchGetUser(),
    watchUpdateUser(),
    watchLogin(),
    watchRegister(),
    watchSignup(),
    watchGetLocationList(),
    watchReviewList(),
    watchAddCart(),
    watchAllCart(),
    watchPostCreate(),
    watchPutCreate(),
  ]);
}

export default rootSaga;
