import { takeEvery, put } from "@redux-saga/core/effects";
import {
  GET_REVIEW_BEGIN,
  GET_REVIEW_SUCCESS,
  GET_REVIEW_FAIL,
  POST_REVIEW_BEGIN,
  POST_REVIEW_SUCCESS,
  POST_REVIEW_FAIL,
  DELETE_REVIEW_BEGIN,
  DELETE_REVIEW_SUCCESS,
  DELETE_REVIEW_FAIL,
} from "../../constants/types";
import axios from "axios";
import { BASE_URL } from "../../constants/constants";

const currentToken = localStorage.getItem("token")
const config = {
  headers: { 'access_token': currentToken }
}

function* reviewList(action) {
  const { id } = action;
  try {
    const res = yield axios.get(`${BASE_URL}review/${id}`, config);
    // console.log(res)
    // console.log(res, "res review")
    yield put({
      type: GET_REVIEW_SUCCESS,
      payload: res.data.data,
    });
  } catch (err) {
    yield put({
      type: GET_REVIEW_FAIL,
      error: err,
    });
  }
}

function* deleteList(action) {
  const { id } = action;
  try {
    const res = yield axios.delete(`${BASE_URL}review/${id}/${id}`, config);
    // console.log(res)
    // console.log(res, "res review")
    yield put({
      type: DELETE_REVIEW_SUCCESS,
      payload: res.data.data,
    });
  } catch (err) {
    yield put({
      type: DELETE_REVIEW_FAIL,
      error: err,
    });
  }
}

// function* ratingValue(action) {
//   const { id } = action;
//   try {
//     const res = yield axios.get(`${BASE_URL}rating/${id}`, config);
//     // console.log(res, "res review")
//     yield put({
//       type: GET_REVIEW_SUCCESS,
//       payload: res.data.data,
//     });
//   } catch (err) {
//     yield put({
//       type: GET_REVIEW_FAIL,
//       error: err,
//     });
//   }
// }

function* postReviewList(action) {
  const { id, payload } = action;
  const data = payload
  // console.log(id, "ini id review")
  // console.log(data, "ini data review")
  try {
    const res = yield axios.post(`${BASE_URL}review/${id}`, data, config);
    console.log(res)
    yield put({
      type:  POST_REVIEW_SUCCESS,
      // payload: res.data.data,
    });
    const getReview = yield axios.get(`${BASE_URL}review/${id}`, config);
    // console.log(getReview, "res getReview")
    yield put({
      type: GET_REVIEW_SUCCESS,
      payload: getReview.data.data,
    });
  } catch (err) {
    yield put({
      type:  POST_REVIEW_FAIL,
      error: err,
    });
  }
}



export function* watchReviewList() {
  yield takeEvery(GET_REVIEW_BEGIN, reviewList);
}

export function* watchPostReview() {
  yield takeEvery( POST_REVIEW_BEGIN, postReviewList);
}

export function* watchDeleteRev() {
  yield takeEvery( DELETE_REVIEW_BEGIN, deleteList);
}

