import { all } from "redux-saga/effects";
import { watchGetUser, watchUpdateUser } from "./profile";
import { watchGetRecipeList, watchGetDetailsList, watchFilterData, watchPagination, watchSearchData, watchMyRecipe, watchDeleteRecipe } from "./recipe";
import { watchLogin, watchRegister, watchSignup } from "./auth";
import { watchGetLocationList } from "./location";
import { watchReviewList, watchPostReview } from "./review";
import { watchAddCart, watchAllCart } from "./cart";
import { watchPutCreate, watchPostCreate, watchPutCreateThree, watchPutCreateFour } from "./create";
import { watchGetOrderList, watchUpdateAddress, watchPostPayment, watchGetSeller, watchGetMyOrder } from "./orderPay";

function* rootSaga() {
  yield all([
    // watchGetOrderList(),
    // watchUpdateAddress(),
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
    watchPostReview(),
    watchAddCart(),
    watchAllCart(),
    // watchPagination(),
    watchSearchData(),
    watchPostCreate(),
    watchPutCreate(),
    watchPutCreateThree(),
    watchPutCreateFour(),
    watchGetOrderList(),
    watchUpdateAddress(),
    watchPostPayment(),
    watchMyRecipe(),
    watchDeleteRecipe(),
    watchGetSeller(),
    watchGetMyOrder()
  ]);
}

export default rootSaga;
