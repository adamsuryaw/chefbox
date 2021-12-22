import { takeEvery, takeLatest, put } from "@redux-saga/core/effects";
import {
  GET_RECIPE_BEGIN,
  GET_RECIPE_SUCCESS,
  GET_RECIPE_FAIL,
  GET_RECIPE_DETAILS_BEGIN,
  GET_RECIPE_DETAILS_SUCCESS,
  GET_RECIPE_DETAILS_FAIL,
  PAGINATION_BEGIN,
  PAGINATION_SUCCESS,
  PAGINATION_FAIL,
  GET_FILTER_RECIPE_BEGIN,
  GET_FILTER_RECIPE_SUCCESS,
  GET_FILTER_RECIPE_FAIL,
  GET_SEARCH_RECIPE_BEGIN,
  GET_SEARCH_RECIPE_SUCCESS,
  GET_SEARCH_RECIPE_FAIL,
} from "../../constants/types";
import axios from "axios";
import { BASE_URL } from "../../constants/constants";

const currentToken = localStorage.getItem("token")
const config = {
  headers: { 'access_token': currentToken }
}

function* getRecipeList(action) {
  const { page } = action;
  try {
    // const res = yield axios.get(`${BASE_URL}recipe`, config);
    const res = yield axios.get(`${BASE_URL}recipe?page=${page}&limit=6`, config);
    console.log(res, "res recipe list")
    yield put({
      type: GET_RECIPE_SUCCESS,
      payload: res.data,
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

// function* pagination(action) {
//   const { page } = action;
//   try {
//     const res = yield axios.get(`${BASE_URL}recipe?page${page}&limit=6`, config);
//     console.log(res, "res pagination")
//     yield put({
//       type: PAGINATION_SUCCESS,
//       payload: res.data,
//     });
//   } catch (err) {
//     yield put({
//       type: PAGINATION_FAIL,
//       error: err,
//     });
//   }
// }

function* filter(action) {
  const { data } = action;
  console.log(data, "data filter") 
  try {
    const res = yield axios.get(`${BASE_URL}recipe/filter?cat=${data.cat}&type=${data.type}&sort=DESC&orders=id&gte=${data.gte}&lte=${data.lte}&loc=${data.loc}`, config);
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

function* search(action) {
  const { data } = action;
  console.log(data, "data search") 
  try {
    const res = yield axios.get(`${BASE_URL}recipe/search?keyword=${data}`, config);
    console.log(res, "res search")
    yield put({
      type: GET_SEARCH_RECIPE_SUCCESS,
      payload: res.data.data,
    });
  } catch (err) {
    yield put({
      type: GET_SEARCH_RECIPE_FAIL,
      error: err,
    });
  }
}

export function* watchGetRecipeList() {
  yield takeLatest(GET_RECIPE_BEGIN, getRecipeList);
}
export function* watchGetDetailsList() {
  yield takeEvery(GET_RECIPE_DETAILS_BEGIN, detailsList);
}
// export function* watchPagination() {
//   yield takeEvery(PAGINATION_BEGIN, pagination);
// }
export function* watchFilterData() {
  yield takeEvery(GET_FILTER_RECIPE_BEGIN, filter);
}
export function* watchSearchData() {
  yield takeEvery(GET_SEARCH_RECIPE_BEGIN, search);
}
