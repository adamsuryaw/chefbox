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
    GET_SELLER_BEGIN,
    GET_SELLER_SUCCESS,
    GET_SELLER_FAIL,
    GET_MYORDER_BEGIN,
    GET_MYORDER_SUCCESS,
    GET_MYORDER_FAIL,
} from "../../constants/types";
import axios from "axios";
import { BASE_URL } from "../../constants/constants";
// import Swal from "sweetalert2";
// import { Link, useNavigate } from "react-router-dom";

const currentToken = localStorage.getItem("token")
const config = {
  headers: { 'access_token': currentToken }
}

function* getOrderList() {
  try {
    const res = yield axios.get(`${BASE_URL}order`, config);
    // console.log(res)
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

function* myOrder() {
  try {
    const res = yield axios.get(`${BASE_URL}order/myorder`, config);
    // console.log(res)
    yield put({
      type: GET_MYORDER_SUCCESS,
      payload: res.data,
    });
    // console.log(res.data);
  } catch (err) {
    console.log(err, "err");
    yield put({
      type: GET_MYORDER_FAIL,
      error: err,
    });
  }
}

function* seller() {
  try {
    const res = yield axios.get(`${BASE_URL}order/seller`, config);
    // console.log(res)
    yield put({
      type: GET_SELLER_SUCCESS,
      payload: res.data,
    });
    // console.log(res.data);
  } catch (err) {
    console.log(err, "err");
    yield put({
      type: GET_SELLER_FAIL,
      error: err,
    });
  }
}

function* patchOrderList(action) {
  const { data, id } = action;
  // const data = payload;
  try {
    const res = yield axios.patch(`${BASE_URL}order/${id}`, data, config);
    console.log(res)
    yield put ({
      type: GET_ORDER_BEGIN,
    })
    yield put({
      type: PATCH_ORDER_SUCCESS,
      // payload: res.data,
    });
    // const update = yield axios.get(`${BASE_URL}order`, config);
    // yield put({
    //   type: GET_ORDER_SUCCESS,
    //   payload: update,
    // });
  } catch (err) {
    yield put({
      type: PATCH_ORDER_FAIL,
      error: err,
    });
  }
}

function* postPayment(action) {
  const { body } = action;
  // console.log("bisa")
  try {
    const res = yield axios.post(`${BASE_URL}order/checkout`, body, config);
    // console.log(res, "res post payment")
    yield put({
      type: POST_PAYMENT_SUCCESS,
      payload: res.data.data,
    });
    yield put({
      type: "DELETE_CART",
    });
    // const getOrder = yield axios.get(`${BASE_URL}order`, config);
    // console.log(getOrder)
    // yield put({
    //   type: GET_ORDER_SUCCESS,
    //   payload: getOrder.data,
    // });
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
export function* watchGetSeller() {
  yield takeEvery(GET_SELLER_BEGIN, seller);
}
export function* watchGetMyOrder() {
  yield takeEvery(GET_MYORDER_BEGIN, myOrder);
}

