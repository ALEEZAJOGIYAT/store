import { reducer } from "../redux/user/reducer";
// import { signReducer } from "./user/signRed";
import { storeReducer } from "./storeData/reducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  addUser: reducer,
  storeDetails:storeReducer
});