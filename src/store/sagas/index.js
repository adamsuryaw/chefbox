import { all } from "redux-saga/effects";
import { watchGetOrderList } from "./order";
import { watchGetUser, watchUpdateUser } from "./profile";
import { watchGetRecipeList, watchGetDetailsList, watchFilterData, watchPagination } from "./recipe";
import { watchLogin, watchRegister, watchSignup } from "./auth";
import { watchGetLocationList } from "./location";
import { watchReviewList } from "./review";
import { watchAddCart, watchAllCart } from "./cart";

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
    watchPagination()
  ]);
}

export default rootSaga;
