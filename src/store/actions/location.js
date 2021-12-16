import { GET_LOCATION_BEGIN } from "../../constants/types";

export const getLocation = () => {
  return {
    type: GET_LOCATION_BEGIN,
  };
};