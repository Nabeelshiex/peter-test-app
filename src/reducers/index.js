import { combineReducers } from "redux";
import navReducer from "./nav.reducer";

const allReducers = combineReducers({
  navReducer,
});

export default allReducers;
