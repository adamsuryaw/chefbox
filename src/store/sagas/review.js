import { takeEvery, put } from "@redux-saga/core/effects";
import {
  GET_REVIEW_BEGIN,
  GET_REVIEW_SUCCESS,
  GET_REVIEW_FAIL,
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

export function* watchReviewList() {
  yield takeEvery(GET_REVIEW_BEGIN, reviewList);
}
