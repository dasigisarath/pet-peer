import { combineReducers } from "redux";
import { OrderHistoryReducer } from "./OrderHistoryReducer";

const rootReducer = combineReducers({
  myorders: OrderHistoryReducer
});
export default rootReducer;