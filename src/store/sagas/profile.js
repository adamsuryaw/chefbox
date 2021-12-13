import { takeEvery, put } from "@redux-saga/core/effects";
import {
  GET_USER_BEGIN,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
} from "../../constants/types";
import axios from "axios";
import { BASE_URL } from "../../constants/constants";

function* getUser() {
  try {
    const res = yield axios.get(`${BASE_URL}user`, {
      headers: {
        access_token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsInVzZXJOYW1lIjoibXVseW9ubyIsImVtYWlsIjoibXVseW9ub0BnbWFpbC5jb20iLCJpYXQiOjE2MzgxNjgyOTd9.quJygGH9FbG7Axemd9Y20GAV6bdgJwTcifcwkEDjGSU",
      },
    });
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
  yield takeEvery(GET_USER_BEGIN, getUser);
}
