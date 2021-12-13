import { put, takeEvery } from "@redux-saga/core/effects";
import { 
  GET_LOGIN_BEGIN, 
  GET_LOGIN_SUCCESS, 
  GET_LOGIN_FAIL,
  REGISTER_BEGIN,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  SIGNUP_BEGIN,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
} from "../../constants/types";
import axios from "axios";
import {BASE_URL} from "../../constants/constants"

const baseUrl = "http://chefbox2021.herokuapp.com";
//function generator
function* login(action) {
  const { body } = action;
  console.log(body, "saga login")
  try {
    const res = yield axios.post(`${baseUrl}/user/login`, body);
    console.log(res, "res saga");
    yield put(
      {
        type: GET_LOGIN_SUCCESS,
      },
      localStorage.setItem("token", res.data.token), // setup token on local storage
      window.location.reload()
    );
  } catch (err) {
    console.log(err);
    yield put({
      type: GET_LOGIN_FAIL,
      error: err,
    });
  }
}

export function* watchLogin() {
  console.log("watch login")
  yield takeEvery(GET_LOGIN_BEGIN, login);
}

function* register(action) {
  const { body } = action;
  console.log(body, "saga regis")
  try {
    const res = yield axios.post(`${baseUrl}/user/signup`, body);
    console.log(res);
    yield put(
      {
        type: REGISTER_SUCCESS,
      },
      localStorage.setItem("token", res.data.token) // setup token on local storage
    );
  } catch (err) {
    console.log(err);
    yield put({
      type: REGISTER_FAIL,
      error: err,
    });
  }
}
export function* watchRegister() {
  console.log("watch register")
  yield takeEvery(REGISTER_BEGIN, register);
}

function* signup(action) {
  const { body } = action;
  try {
    const res = yield axios.patch(`http://chefbox2021.herokuapp.com/user/complete-signup`, body);
    console.log(res);
    yield put(
      {
        type: SIGNUP_SUCCESS,
      },
      localStorage.getItem("token") // setup token on local storage
    );
  } catch (err) {
    console.log(err);
    yield put({
      type: SIGNUP_FAIL,
      error: err,
    });
  }
}
export function* watchSignup() {
  console.log("watch signup")
  yield takeEvery(SIGNUP_BEGIN, signup);
}
