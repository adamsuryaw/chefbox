import { takeEvery, put } from "@redux-saga/core/effects";
import { GET_LOCATION_BEGIN, GET_LOCATION_SUCCESS, GET_LOCATION_FAIL } from "../../constants/types";
import axios from "axios";
import { BASE_URL } from "../../constants/constants";

function* getLocation() {
  try {
    const res = yield axios.get(
      `${BASE_URL}order`
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