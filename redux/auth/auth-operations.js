import { createOperation } from "../../shared/utils/utils";
import { signUp, signIn } from "../../shared/api/api-auth";

export const authSignUp = createOperation("auth/signup", signUp);
export const authSignIn = createOperation("auth/signin", signIn);

export const authSignOut = async (dispatch, getState) => {};
