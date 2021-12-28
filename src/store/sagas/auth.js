import { put, takeEvery } from "@redux-saga/core/effects";
import { 
  GET_USER_SUCCESS,
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
import { BASE_URL } from "../../constants/constants";
// import {BASE_URL} from "../../constants/constants"

const baseUrl = "https://chefbox2021.herokuapp.com";
//function generator
function* login(action) {
  const { body } = action;
  // console.log(body, "saga login")
  try {
    const res = yield axios.post(`${baseUrl}/user/login`, body);
    yield put(
      {
        type: GET_LOGIN_SUCCESS,
      },
    // const apalah = yield axios.get(`${baseUrl}/user/login`, body);
    // yield put(
    //   {
    //     type: PUT_LOGIN_SUCCESS,
    //   },
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
  yield takeEvery(GET_LOGIN_BEGIN, login);
}

function* register(action) {
  const { body } = action;
  console.log(body, "saga regis")
  try {
    const res = yield axios.post(`${baseUrl}/user/signup`, body);
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
  yield takeEvery(REGISTER_BEGIN, register);
}

function* signup(action) {
  const { body } = action;
  const currentToken = localStorage.getItem("token")
  const config = {
    headers: { 'access_token': currentToken }
  }
  try {
    const res = yield axios.patch(`https://chefbox2021.herokuapp.com/user/complete-signup`, body, config);
    console.log(res)
    yield put(
      {
        type: SIGNUP_SUCCESS,
      },
       // setup token on local storage
    );
    const getUser = yield axios.get(`${BASE_URL}user`, config);
    // console.log(res, "res");
    yield put({
      type: GET_USER_SUCCESS,
      payload: getUser.data.data,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: SIGNUP_FAIL,
      error: err,
    });
  }
}
export function* watchSignup() {
  yield takeEvery(SIGNUP_BEGIN, signup);
}
