import { createSlice } from "@reduxjs/toolkit";

import {
  authSignUp,
  authSignIn,
  authSignOut,
  authCheckAuth,
  authUpdateProfilePhoto,
} from "./auth-operations";

const initialState = {
  user: {
    userID: null,
    email: "",
    login: "",
    photoURL: "",
  },

  isLogin: false,
  loading: false,
  error: null,
};

const fulfilled = (store, { payload }) => {
  store.isLogin = true;
  store.loading = false;
  store.error = null;

  store.user.userID = payload?.uid;
  store.user.email = payload?.email;
  store.user.login = payload?.displayName;
  store.user.photoURL = payload?.photoURL;
};
const pending = (store, _) => ({ ...initialState, loading: true });
const rejected = (store, { payload }) => ({
  ...initialState,
  loading: false,
  error: payload,
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [authSignUp.pending]: pending,
    [authSignUp.rejected]: rejected,
    [authSignUp.fulfilled]: fulfilled,

    [authSignIn.pending]: pending,
    [authSignIn.rejected]: rejected,
    [authSignIn.fulfilled]: fulfilled,

    [authSignOut.pending]: pending,
    [authSignOut.rejected]: rejected,
    [authSignOut.fulfilled]: (store, { payload }) => ({ ...initialState }),

    [authCheckAuth.pending]: pending,
    [authCheckAuth.rejected]: rejected,
    [authCheckAuth.fulfilled]: (store, { payload }) => {
      if (payload) {
        return {
          loading: false,
          error: false,
          isLogin: true,
          user: { ...payload },
        };
      }
      return { ...initialState };
    },

    [authUpdateProfilePhoto.pending]: pending,
    [authUpdateProfilePhoto.rejected]: rejected,
    [authUpdateProfilePhoto.fulfilled]: fulfilled,
  },
});
export default authSlice.reducer;
