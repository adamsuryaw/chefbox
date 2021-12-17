import { put, takeEvery } from "@redux-saga/core/effects";
import { 
  POST_CART_BEGIN, 
  POST_CART_SUCCESS, 
  POST_CART_FAIL,
  GET_CART_BEGIN, 
  GET_CART_SUCCESS, 
  GET_CART_FAIL,
} from "../../constants/types";
import axios from "axios";

const baseUrl = "http://chefbox2021.herokuapp.com";
const currentToken = localStorage.getItem("token")
const config = {
  headers: { 'access_token': currentToken }
}

function* cartSaga (action) {
    const { id, data } = action;
    // console.log(id, "ini id cart")
    // console.log(body, "ini body")
    try {
      const res = yield axios.post(`${baseUrl}/cart/${id}`, {quantity: data}, config);
      // console.log(res, "res cart")
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

function* cartAll (action) {
  try {
    const res = yield axios.get(`${baseUrl}/cart`, config);
    console.log(res, "res get cart")
    yield put(
      {
        type: GET_CART_SUCCESS,
        payload: res.data.data,
      },
    );
  } catch (err) {
    console.log(err);
    yield put({
      type: GET_CART_FAIL,
      error: err,
    });
  }
}

export function* watchAllCart() {
  yield takeEvery(GET_CART_BEGIN, cartAll);
}