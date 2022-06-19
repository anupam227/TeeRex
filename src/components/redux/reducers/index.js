import { combineReducers } from "redux";
import productReducer from "./productReducer";

const allReducer = combineReducers({
  products: productReducer,
});

export default allReducer;
