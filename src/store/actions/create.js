import { POST_CREATE_BEGIN, PUT_CREATE_BEGIN } from "../../constants/types";

export const postCreate = () => {
    return {
      type: POST_CREATE_BEGIN,
    };
};
export const putCreate = () => {
    return {
      type: PUT_CREATE_BEGIN,
    };
};