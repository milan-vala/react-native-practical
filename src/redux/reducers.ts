import { combineReducers } from "redux";
import loginSlice from "./features/loginSlice";

const reducer = combineReducers({
  login: loginSlice,
});

export default reducer;
