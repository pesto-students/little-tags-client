import { combineReducers } from "redux";
import product from "./product";
import purchase from "./purchase";
export default combineReducers({
  product,
  purchase,
});
