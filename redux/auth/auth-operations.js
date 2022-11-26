import db from "../../firebase/config";

export const authSignUp =
  ({ email, password, login }) =>
  async (dispatch, getState) => {
    try {
      const user = await db
        .auth()
        .createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.log("error", error);
      console.log("error.message", error.message);
    }
  };

export const authSignIn =
  ({ email, password }) =>
  async (dispatch, getState) => {};

export const authSignOut = async (dispatch, getState) => {};
