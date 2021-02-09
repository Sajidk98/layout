import { combineReducers } from "redux";
import repos from "./repos";
import manager from "./manager";

export default combineReducers({
  repos,
  manager,
});
