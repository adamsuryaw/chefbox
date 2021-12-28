import { takeEvery, put } from "@redux-saga/core/effects";
import {
  GET_MYRECIPE_SUCCESS,
  GET_RECIPE_SUCCESS,
  PUT_CREATE_BEGIN,
  PUT_CREATE_SUCCESS,
  PUT_CREATE_FAIL,
  POST_CREATE_BEGIN,
  POST_CREATE_SUCCESS,
  POST_CREATE_FAIL,
  PUT_CREATE_STEP_THREE_BEGIN,
  PUT_CREATE_STEP_THREE_SUCCESS,
  PUT_CREATE_STEP_THREE_FAIL,
  PUT_CREATE_STEP_FOUR_BEGIN,
  PUT_CREATE_STEP_FOUR_SUCCESS,
  PUT_CREATE_STEP_FOUR_FAIL,
} from "../../constants/types";
import axios from "axios";
import { BASE_URL } from "../../constants/constants";
// import data from "../../Component/Data/data";
import Swal from "sweetalert2";

// const baseUrl = "http://chefbox2021.herokuapp.com";
const currentToken = localStorage.getItem("token");
const config = {
  headers: { 'access_token': currentToken },
};

function* postCreate(action) {
  const { data } = action;
  try {
    const res = yield axios.post(`${BASE_URL}recipe/`, data, config);
    console.log(res)
    yield put({
      type: POST_CREATE_SUCCESS,
    });
    const getRecipe = yield axios.get(`${BASE_URL}recipe/myrecipe`, config);
    console.log(getRecipe)
    yield put({
      type: GET_MYRECIPE_SUCCESS,
      payload: getRecipe.data,
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
  const { id, payload } = action;
  const data = payload
  // console.log(id, "ini id create")
  // console.log(data, "ini data create")
  // console.log(data, "ini data create") data.addRecipe[0]
  try {
    const res = yield axios.put(`${BASE_URL}recipe/steptwo/${id}`, data, config);
    console.log(res)
    yield put({
      type: PUT_CREATE_SUCCESS,
    });
    const getRecipe = yield axios.get(`${BASE_URL}recipe/myrecipe`, config);
    console.log(getRecipe)
    yield put({
      type: GET_MYRECIPE_SUCCESS,
      payload: getRecipe.data,
    });
  } catch (err) {
    yield put({
      type: PUT_CREATE_FAIL,
      error: err,
    });
  }
}

function* putCreateThree(action) {
  const { id, payload } = action;
  const data = payload
  console.log(id, "ini id create")
  console.log(data, "ini data create")
  // console.log(data, "ini data create") data.addRecipe[0]
  try {
    const res = yield axios.put(`${BASE_URL}recipe/stepthree/${id}`, data, config);
    console.log(res, "res put create")
    yield put({
      type: PUT_CREATE_STEP_THREE_SUCCESS,
    });
    const getRecipe = yield axios.get(`${BASE_URL}recipe/myrecipe`, config);
    console.log(getRecipe, "res getRecipe")
    yield put({
      type: GET_MYRECIPE_SUCCESS,
      payload: getRecipe.data,
    });
  } catch (err) {
    yield put({
      type: PUT_CREATE_STEP_THREE_FAIL,
      error: err,
    });
  }
}

function* putCreateFour(action) {
  const { id, payload } = action;
  const data = payload
  console.log(id, "ini id create")
  console.log(data, "ini data create")
  // console.log(data, "ini data create") data.addRecipe[0]
  try {
    const res = yield axios.put(`${BASE_URL}recipe/stepfour/${id}`, data, config);
    console.log(res, "res put create")
    yield put({
      type: PUT_CREATE_STEP_FOUR_SUCCESS,
    });
    Swal.fire(
      'Good job!',
      'Recipe Created',
      'success',
    )
    const getRecipe = yield axios.get(`${BASE_URL}recipe/`, config);
    console.log(getRecipe, "res getRecipe")
    yield put({
      type: GET_RECIPE_SUCCESS,
      payload: getRecipe.data,
    });
  } catch (err) {
    yield put({
      type: PUT_CREATE_STEP_FOUR_FAIL,
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
export function* watchPutCreateThree() {
  yield takeEvery(PUT_CREATE_STEP_THREE_BEGIN, putCreateThree);
}
export function* watchPutCreateFour() {
  yield takeEvery(PUT_CREATE_STEP_FOUR_BEGIN, putCreateFour);
}
