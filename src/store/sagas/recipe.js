import { takeEvery, put } from "@redux-saga/core/effects";
import {
  GET_RECIPE_BEGIN,
  GET_RECIPE_SUCCESS,
  GET_RECIPE_FAIL,
  GET_RECIPE_DETAILS_BEGIN,
  GET_RECIPE_DETAILS_SUCCESS,
  GET_RECIPE_DETAILS_FAIL,
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

export function* watchGetRecipeList() {
  yield takeEvery(GET_RECIPE_BEGIN, getRecipeList);
}
export function* watchGetDetailsList() {
  yield takeEvery(GET_RECIPE_DETAILS_BEGIN, detailsList);
}
