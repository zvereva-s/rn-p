import { createSlice } from "@reduxjs/toolkit";
// import {
//   signupRequest,
//   loginRequest,
//   logoutRequest,
//   getCurrentRequest,
// } from "../auth/auth-operations";
// import { pending, rejected } from "shared/services/utils/utils";

const initialState = {
  user: {},
  token: "",
  isLogin: false,

  loading: false,
  error: null,
};

const fulfilled = (store, { payload }) => {
  store.loading = false;
  store.error = null;
  store.user = payload.user;
  store.token = payload.token;
  store.isLogin = true;
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    //     [signupRequest.pending]: pending,
    //     [signupRequest.rejected]: rejected,
    //     [signupRequest.fulfilled]:fulfilled,
    //     [loginRequest.pending]: pending,
    //     [loginRequest.rejected]: rejected,
    //     [loginRequest.fulfilled]: fulfilled,
    //     [logoutRequest.pending]: pending,
    //     [loginRequest.rejected]: rejected,
    //     [logoutRequest.fulfilled]: () => ({ ...initialState }),
    //     [getCurrentRequest.pending]: pending,
    //     [getCurrentRequest.rejected]: rejected,
    //     [getCurrentRequest.fulfilled]: (store, { payload }) => ({ ...store, loading: false, error: null, user: { ...payload }, isLogin: true, }),
  },
});
export default authSlice.reducer;
