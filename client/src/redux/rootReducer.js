import { reducer } from "../redux/user/reducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  addUser: reducer,
});