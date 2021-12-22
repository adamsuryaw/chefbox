import { GET_REVIEW_BEGIN, POST_REVIEW_BEGIN } from "../../constants/types";

export const getReview = (id) => {
  return {
    type: GET_REVIEW_BEGIN,
    id
  };
};

export const postReview = (id, data) => {
  return {
    type: POST_REVIEW_BEGIN,
    id,
    payload: data
  };
};
