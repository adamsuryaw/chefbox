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
  headers: { 'access_token': currentToken },
};

function* postCreate(action) {
  const { data } = action;
  try {
    const res = yield axios.post(`${BASE_URL}recipe/`, data, config);
    console.log(res, "res post create")
    yield put({
      type: POST_CREATE_SUCCESS,
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
  const { id } = action;
  console.log(id, "ini id create")
  // console.log(data, "ini data create")
  try {
    const res = yield axios.put(`${BASE_URL}recipe/steptwo/${id}`, config);
    console.log(res, "res put create")
    yield put({
      type: PUT_CREATE_SUCCESS,
      payload: res.data.data
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
