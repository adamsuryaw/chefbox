import { takeEvery, put } from "@redux-saga/core/effects";
import {
    GET_ORDER_BEGIN,
    GET_ORDER_SUCCESS,
    GET_ORDER_FAIL,
    PATCH_ORDER_BEGIN,
    PATCH_ORDER_SUCCESS,
    PATCH_ORDER_FAIL,
    POST_PAYMENT_BEGIN,
    POST_PAYMENT_SUCCESS,
    POST_PAYMENT_FAIL,
} from "../../constants/types";
import axios from "axios";
import { BASE_URL } from "../../constants/constants";

const currentToken = localStorage.getItem("token")
const config = {
  headers: { 'access_token': currentToken }
}

function* getOrderList() {
  try {
    const res = yield axios.get(`${BASE_URL}order`, config);
    console.log(res, "res order")
    yield put({
      type: GET_ORDER_SUCCESS,
      payload: res.data,
    });
    // console.log(res.data);
  } catch (err) {
    console.log(err, "err");
    yield put({
      type: GET_ORDER_FAIL,
      error: err,
    });
  }
}
function* patchOrderList(action) {
  const { data, id } = action;
  // const data = payload;
  try {
    const res = yield axios.patch(`${BASE_URL}order/${id}`, data, config);
    yield put({
      type: PATCH_ORDER_SUCCESS,
      // payload: res.data,
    });
    const update = yield axios.get(`${BASE_URL}order`, config);
    yield put({
      type: GET_ORDER_SUCCESS,
      payload: update,
    });
  } catch (err) {
    yield put({
      type: PATCH_ORDER_FAIL,
      error: err,
    });
  }
}

function* postPayment(action) {
  const { body } = action;
  console.log("bisa")
  try {
    const res = yield axios.post(`${BASE_URL}order/checkout`, body, config);
    console.log(res, "res post payment")
    yield put({
      type: POST_PAYMENT_SUCCESS,
      payload: res.data.data,
    });
  } catch (err) {
    console.log(err, "err");
    yield put({
      type: POST_PAYMENT_FAIL,
      error: err,
    });
  }
}

export function* watchGetOrderList() {
  yield takeEvery(GET_ORDER_BEGIN, getOrderList);
}
export function* watchUpdateAddress() {
  yield takeEvery(PATCH_ORDER_BEGIN, patchOrderList);
}
export function* watchPostPayment() {
  yield takeEvery(POST_PAYMENT_BEGIN, postPayment);
}

