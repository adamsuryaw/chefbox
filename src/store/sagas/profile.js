import { takeEvery, put } from "@redux-saga/core/effects";
import {
  GET_USER_BEGIN,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
} from "../../constants/types";
import axios from "axios";
import { BASE_URL } from "../../constants/constants";

function* user() {
  const currentToken = localStorage.getItem("token")
  const config = {
    headers: { 'access_token': currentToken }
  }
  try {
    const res = yield axios.get(`${BASE_URL}user`, config);
    console.log(res, "res");
    yield put({
      type: GET_USER_SUCCESS,
      payload: res.data.data,
    });
  } catch (err) {
    yield put({
      type: GET_USER_FAIL,
      error: err,
    });
  }
}

export function* watchGetUser() {
  yield takeEvery(GET_USER_BEGIN, user);
}
