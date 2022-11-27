import { createSlice } from "@reduxjs/toolkit";
import { authSignUp, authSignIn } from "./auth-operations";

const initialState = {
  user: {
    userID: null,
    email: "",
    login: "",
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
  store.user.email = payload.email;
  store.user.login = payload.displayName;
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [authSignUp.pending]: (store, _) => ({ ...store, loading: true }),
    [authSignUp.rejected]: (store, { payload }) => ({
      ...store,
      error: payload,
    }),
    [authSignUp.fulfilled]: fulfilled,

    [authSignIn.pending]: (store, _) => ({ ...store, loading: true }),
    [authSignIn.rejected]: (store, { payload }) => ({
      ...store,
      error: payload,
    }),
    [authSignIn.fulfilled]: fulfilled,
  },
});
export default authSlice.reducer;
