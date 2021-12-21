import { POST_CREATE_BEGIN, PUT_CREATE_BEGIN } from "../../constants/types";

export const postCreate = (data) => {
    return {
      type: POST_CREATE_BEGIN,
      data
    };
};
export const putCreateTwo = (id) => {
    return {
      type: PUT_CREATE_BEGIN,
      id,
    };
};