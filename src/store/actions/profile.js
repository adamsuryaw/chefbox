import { GET_USER_BEGIN, PATCH_PROFILE_BEGIN } from "../../constants/types";

export const getUser = () => {
  return {
    type: GET_USER_BEGIN,
    // payload: data
  };
};

export const patchUpdate = (data) => {
  return {
    type: PATCH_PROFILE_BEGIN,
    payload: data
  };
};
