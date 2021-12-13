import { combineReducers } from "redux";
import userReducer from "./auth";
import { userDetails } from "./profile";
import {recipe} from "./recipe";

export default combineReducers({
  user: userReducer,
  userDetails,
  recipe, 
});
