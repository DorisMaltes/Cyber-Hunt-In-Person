
import { signOut } from "firebase/auth";
import { auth } from "../../../firebaseConfig";

export async function signOutUser() {
  try {
    await signOut(auth);
    console.log("✅ User signed out");
  } catch (err) {
    console.error("❌ Error signing out:", err);
    throw err;
  }
}
