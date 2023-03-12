import { combineReducers } from "redux";
import shopReducer from "./shopReducer";

const rootReducer = combineReducers({
  shopReducer: shopReducer,
});
export default rootReducer;
