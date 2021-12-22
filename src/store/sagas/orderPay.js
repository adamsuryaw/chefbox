import { takeEvery, put } from "@redux-saga/core/effects";
import {
    GET_ORDER_BEGIN,
    GET_ORDER_SUCCESS,
    GET_ORDER_FAIL,
    PATCH_ORDER_BEGIN,
    PATCH_ORDER_SUCCESS,
    PATCH_ORDER_FAIL,
} from "../../constants/types";
import axios from "axios";
import { BASE_URL } from "../../constants/constants";

const currentToken = localStorage.getItem("token")
const config = {
  headers: { 'access_token': currentToken }
}

function* orderPay(action) {
    // const { payload } = action;
    // const data = payload
    // console.log(data, "body order")
    try {
      const res = yield axios.get(`${BASE_URL}order`, config);
      console.log(res, "res order")
      yield put({
        type: GET_ORDER_SUCCESS,
        payload: res.data.data,
      });
    } catch (err) {
      yield put({
        type: GET_ORDER_FAIL,
        error: err,
      });
    }
  }

export function* watchOrder() {
  yield takeEvery(GET_ORDER_BEGIN, orderPay);
}
