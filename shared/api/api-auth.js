import db from "../../firebase/config";

export async function signUp({ email, password, login }) {
  await db.auth().createUserWithEmailAndPassword(email, password);
  const curUser = db.auth().currentUser;
  await curUser.updateProfile({ displayName: login });

  return curUser;
}

export async function signIn({ email, password }) {
  const { user } = await db.auth().signInWithEmailAndPassword(email, password);
  return user;
}

export async function signOut() {
  await db.auth().signOut();
}
