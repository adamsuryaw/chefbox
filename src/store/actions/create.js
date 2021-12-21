import { POST_CREATE_BEGIN, PUT_CREATE_BEGIN, PUT_CREATE_STEP_THREE_BEGIN, PUT_CREATE_STEP_FOUR_BEGIN } from "../../constants/types";

export const postCreate = (data) => {
    return {
      type: POST_CREATE_BEGIN,
      data
    };
};
export const putCreateTwo = (id, data) => {
    return {
      type: PUT_CREATE_BEGIN,
      id,
      payload: data
    };
};
export const putCreateThree = (id, data) => {
  return {
    type: PUT_CREATE_STEP_THREE_BEGIN,
    id,
    payload: data
  };
};
export const putCreateFour = (id, data) => {
  return {
    type: PUT_CREATE_STEP_FOUR_BEGIN,
    id,
    payload: data
  };
};