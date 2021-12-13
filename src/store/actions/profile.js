import { GET_USER_BEGIN, PATCH_PROFILE_BEGIN } from "../../constants/types";

export const getUser = () => {
  return {
    type: GET_USER_BEGIN,
    // type: PATCH_PROFILE_BEGIN,
  };
};
