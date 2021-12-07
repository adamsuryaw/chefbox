import { put, takeEvery } from "@redux-saga/core/effects";
import { LOGIN_BEGIN, LOGIN_SUCCESS, LOGIN_FAIL } from "../actions/types";
import axios from "axios";

const baseUrl = "http://see-event.herokuapp.com";
//function generator
function* login(action) {
  const { body } = action;
  try {
    const res = yield axios.post(`${baseUrl}/user/login`, body);
    console.log(res);
    yield put(
      {
        type: LOGIN_SUCCESS,
      },
      localStorage.setItem("token", res.data.token) // setup token on local storage
    );
  } catch (err) {
    console.log(err);
    yield put({
      type: LOGIN_FAIL,
      error: err,
    });
  }
}

export function* watchLogin() {
  yield takeEvery(LOGIN_BEGIN, login);
}
