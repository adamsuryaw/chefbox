import { all } from "redux-saga/effects";
import { watchGetOrderList, watchUpdateAddress } from "./order";
import { watchGetUser, watchUpdateUser } from "./profile";
import { watchGetRecipeList, watchGetDetailsList } from "./recipe";
import { watchLogin, watchRegister, watchSignup } from "./auth";
import { watchGetLocationList } from "./location";
import { watchReviewList } from "./review";
import { watchAddCart } from "./cart";
import { watchPutCreate, watchPostCreate } from "./create";

function* rootSaga() {
  yield all([
    watchGetOrderList(),
    watchUpdateAddress(),
    watchGetRecipeList(),
    watchGetDetailsList(),
    watchGetUser(),
    watchUpdateUser(),
    watchLogin(),
    watchRegister(),
    watchSignup(),
    watchGetLocationList(),
    watchReviewList(),
    watchAddCart(),
    watchPutCreate(),
    watchPostCreate(),
  ]);
}

export default rootSaga;
