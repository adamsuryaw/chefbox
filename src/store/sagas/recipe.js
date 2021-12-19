import { takeEvery, put } from "@redux-saga/core/effects";
import {
  GET_RECIPE_BEGIN,
  GET_RECIPE_SUCCESS,
  GET_RECIPE_FAIL,
  GET_RECIPE_DETAILS_BEGIN,
  GET_RECIPE_DETAILS_SUCCESS,
  GET_RECIPE_DETAILS_FAIL,
  GET_FILTER_RECIPE_BEGIN,
  GET_FILTER_RECIPE_SUCCESS,
  GET_FILTER_RECIPE_FAIL,
} from "../../constants/types";
import axios from "axios";
import { BASE_URL } from "../../constants/constants";

const currentToken = localStorage.getItem("token")
const config = {
  headers: { 'access_token': currentToken }
}

function* getRecipeList() {
  try {
    const res = yield axios.get(`${BASE_URL}recipe`, config);
    yield put({
      type: GET_RECIPE_SUCCESS,
      payload: res.data.data,
    });
  } catch (err) {
    yield put({
      type: GET_RECIPE_FAIL,
      error: err,
    });
  }
}
function* detailsList(action) {
  const { id } = action;
  try {
    const res = yield axios.get(`${BASE_URL}recipe/${id}`, config);
    // console.log(res, "res")
    yield put({
      type: GET_RECIPE_DETAILS_SUCCESS,
      payload: res.data.data,
    });
  } catch (err) {
    yield put({
      type: GET_RECIPE_DETAILS_FAIL,
      error: err,
    });
  }
}

function* pagination(action) {
  const { page } = action;
  try {
    const res = yield axios.get(`${BASE_URL}recipe&page${page}`);
    yield put({
      type: GET_RECIPE_DETAILS_SUCCESS,
      payload: res.data.data,
    });
  } catch (err) {
    yield put({
      type: GET_RECIPE_DETAILS_FAIL,
      error: err,
    });
  }
}

function* filter(action) {
  const { data } = action;
  // Object.entries(data).map((item, index: number)=>{
  //   if(Object.keys(data).len)
  // })
  console.log(data, "data filter") 
  // console.log(params, "params filter") 
  try {
    const res = yield axios.get(`${BASE_URL}recipe/filter?cat=${data}&type=${data}&sort=DESC&orders=id&gte=${data}&lte=${data}&loc=${data}`, config);
    console.log(res, "res filter")
    yield put({
      type: GET_FILTER_RECIPE_SUCCESS,
      payload: res.data.data,
    });
  } catch (err) {
    yield put({
      type: GET_FILTER_RECIPE_FAIL,
      error: err,
    });
  }
}

export function* watchGetRecipeList() {
  yield takeEvery(GET_RECIPE_BEGIN, getRecipeList);
}
export function* watchGetDetailsList() {
  yield takeEvery(GET_RECIPE_DETAILS_BEGIN, detailsList);
}
export function* watchPagination() {
  yield takeEvery(GET_RECIPE_DETAILS_BEGIN, pagination);
}
export function* watchFilterData() {
  yield takeEvery(GET_FILTER_RECIPE_BEGIN, filter);
}
