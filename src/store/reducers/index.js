import { combineReducers } from "redux";
import userReducer from "./auth";
import { account } from "./profile";
import {recipe} from "./recipe";
import {location} from "./location";
import {review} from "./review";

export default combineReducers({
  user: userReducer,
  account,
  recipe,
  location,
  review,
});
