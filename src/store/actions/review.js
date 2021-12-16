import { GET_REVIEW_BEGIN } from "../../constants/types";

export const getReview = (id) => {
  return {
    type: GET_REVIEW_BEGIN,
    id
  };
};