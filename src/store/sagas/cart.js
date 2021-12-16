import { put, takeEvery } from "@redux-saga/core/effects";
import { 
  POST_CART_BEGIN, 
  POST_CART_SUCCESS, 
  POST_CART_FAIL,
} from "../../constants/types";
import axios from "axios";

const baseUrl = "http://chefbox2021.herokuapp.com";
const currentToken = localStorage.getItem("token")
const config = {
  headers: { 'access_token': currentToken }
}

function* cartSaga (action) {
    const { id, body } = action;
    console.log(id, "ini id")
    console.log(body, "ini body")
    try {
      const res = yield axios.post(`${baseUrl}/cart/${id}`, body, config);
      console.log(res, "res cart")
      yield put(
        {
          type: POST_CART_SUCCESS,
        },
      );
    } catch (err) {
      console.log(err);
      yield put({
        type: POST_CART_FAIL,
        error: err,
      });
    }
}

  export function* watchAddCart() {
    yield takeEvery(POST_CART_BEGIN, cartSaga);
}