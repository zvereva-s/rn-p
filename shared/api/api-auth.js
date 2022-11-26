import db from "../../firebase/config";

async function signin(email, password) {
  const user = await db.auth().createUserWithEmailAndPassword(email, password);
  return user;
}
