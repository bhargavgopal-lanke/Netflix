import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase";
import { addUser, removeUser } from "./Slices/UserSlice";

export const USER_AVATAR =
  "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: process.env.BEARER_TOKEN,
  },
};

export const HandleSignout = (dispatch, navigate) => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      dispatch(removeUser());
      navigate("/");
    })
    .catch((error) => {
      // An error happened.
      console.log(error.message);
    });
};

export const handleSubscribe = (dispatch, navigate) =>
  onAuthStateChanged(auth, (user) => {
    const { uid, displayName, email, photoURL } = user || "";
    if (user) {
      // console.log("user is signed in:", user);
      dispatch(
        addUser({
          uid: uid,
          displayName: displayName,
          email: email,
          photoURL: photoURL,
        })
      );
      navigate("/browse");
    } else {
      // console.log("user is signed out");
      dispatch(removeUser());
      navigate("/");
    }
  });
