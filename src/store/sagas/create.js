import { takeEvery, put } from "@redux-saga/core/effects";
import {
  PUT_CREATE_BEGIN,
  PUT_CREATE_SUCCESS,
  PUT_CREATE_FAIL,
  POST_CREATE_BEGIN,
  POST_CREATE_SUCCESS,
  POST_CREATE_FAIL,
} from "../../constants/types";
import axios from "axios";
import { BASE_URL } from "../../constants/constants";
import data from "../../Component/Data/data";

const baseUrl = "http://chefbox2021.herokuapp.com";
const currentToken = localStorage.getItem("token");
const config = {
  headers: { access_token: currentToken },
};

function* postCreate() {
  try {
    const res = yield axios.get(`${BASE_URL}recipe`, {
      headers: `access_token: ${currentToken}`,
      ...data.getHeaders(),
    });
    yield put({
      type: POST_CREATE_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err, "err");
    yield put({
      type: POST_CREATE_FAIL,
      error: err,
    });
  }
}
function* putCreate(action) {
  const { payload } = action;
  const data = payload;
  try {
    const res = yield axios.patch(
      `${BASE_URL}recipe/steptwo/${id}`,
      `${BASE_URL}recipe/stepthree/${id}`,
      `${BASE_URL}recipe/stepfour/${id}`,
      {
        headers: `access_token: ${currentToken}`,
      }
    );
    yield put({
      type: PUT_CREATE_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    yield put({
      type: PUT_CREATE_FAIL,
      error: err,
    });
  }
}

export function* watchPostCreate() {
  yield takeEvery(POST_CREATE_BEGIN, postCreate);
}
export function* watchPutCreate() {
  yield takeEvery(PUT_CREATE_BEGIN, putCreate);
}
