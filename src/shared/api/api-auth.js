import db from "../../firebase/config";

export async function signUp({ email, password, login, photo }) {
  await db.auth().createUserWithEmailAndPassword(email, password);
  const curUser = db.auth().currentUser;
  await curUser.updateProfile({ displayName: login });
  if (photo) {
    await curUser.updateProfile({ photoURL: photo });
  }
  return curUser;
}

export async function signIn({ email, password }) {
  const { user } = await db.auth().signInWithEmailAndPassword(email, password);

  //! console
  console.log({ user });
  //! console

  return user;
}

export async function checkAuth() {
  let currentUser;
  await db.auth().onAuthStateChanged((user) => {
    currentUser = user
      ? {
          email: user.email,
          login: user.displayName,
          userID: user.uid,
          photoURL,
        }
      : null;
  });
  //! console
  console.log({ currentUser });
  //!
  return currentUser;
}

export async function signOut() {
  await db.auth().signOut();
}

export async function updateProfilePhoto(photo) {
  const curUser = db.auth().currentUser;
  //! console
  console.log("updateProfilePhoto curUser", curUser);
  //! console
  await curUser.updateProfile({ photoURL: photo });
  return curUser;
}
