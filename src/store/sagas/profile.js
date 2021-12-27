import { takeEvery, put } from "@redux-saga/core/effects";
import {
  GET_USER_BEGIN,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
  PATCH_PROFILE_BEGIN,
  PATCH_PROFILE_SUCCESS,
  PATCH_PROFILE_FAIL
} from "../../constants/types";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../../constants/constants";
import { getUser } from "../actions/profile";

const currentToken = localStorage.getItem("token")
const config = {
  headers: { 'access_token': currentToken }
}

function* user() {
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

function* updateUser(action) {
  const { payload } = action;
  const data = payload
  try {
    const res = yield axios.patch(`${BASE_URL}user/changeprofile`, data, config);
    // const res = axios({
    //   method: 'patch',
    //   url: '/user/12345',
    //   data: {
    //     firstName: 'Fred',
    //     lastName: 'Flintstone'
    //   }
    // });
    yield put ({
      type: GET_USER_BEGIN,
    })
    console.log(res, "res");
    yield put({
      type: PATCH_PROFILE_SUCCESS,
    });
  } catch (err) {
    yield put({
      type: PATCH_PROFILE_FAIL,
      error: err,
    });
  }
}

export function* watchGetUser() {
  yield takeEvery(GET_USER_BEGIN, user);
}

export function* watchUpdateUser() {
  yield takeEvery(PATCH_PROFILE_BEGIN, updateUser);
}
