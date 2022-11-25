import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "../redux/auth/auth-slice";

const rootReducer = combineReducers({
  auth: authReducer,
  // posts: postsReducer,
});

export default rootReducer;
