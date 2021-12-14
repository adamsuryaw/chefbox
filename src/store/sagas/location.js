import { takeEvery, put } from "@redux-saga/core/effects";
import { GET_LOCATION_BEGIN, GET_LOCATION_SUCCESS, GET_LOCATION_FAIL } from "../../constants/types";
import axios from "axios";
import { BASE_URL } from "../../constants/constants";

function* getLocationList() {
  try {
    const res = yield axios.get(
      `${BASE_URL}user/complete-signup`
    );
    yield put({
      type: GET_LOCATION_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    yield put({
      type: GET_LOCATION_FAIL,
      error: err,
    });
  }
}

export function* watchGetLocationList() {
  yield takeEvery(GET_LOCATION_BEGIN, getLocationList);
}