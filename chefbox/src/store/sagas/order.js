import { takeEvery, put } from "@redux-saga/core/effects";
import { GET_ORDER_BEGIN, GET_ORDER_SUCCESS, GET_ORDER_FAIL } from "../../constants/types";
import axios from "axios";
import { BASE_URL } from "../../constants/constants";

function* getOrderList() {
  try {
    const res = yield axios.get(
      `${BASE_URL}order?api_key=${process.env.REACT_APP_API_KEY}`
    );
    yield put({
      type: GET_ORDER_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    yield put({
      type: GET_ORDER_FAIL,
      error: err,
    });
  }
}

export function* watchGetOrderList() {
  yield takeEvery(GET_ORDER_BEGIN, getOrderList);
}
