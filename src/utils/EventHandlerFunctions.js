import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "./firebase";
import { USER_AVATAR } from "./utils";
import { addUser } from "./Slices/UserSlice";

export const handleClick = (signIn, setSignUp) => {
  setSignUp(!signIn);
};

export const handleToggle = (setTogglePassword, togglePassword) => {
  setTogglePassword(!togglePassword);
};

export const handleButtonClick = (buttonProps) => {
  const {
    email,
    password,
    fullName,
    validateData,
    setErrorMessages,
    signIn,
    dispatch,
  } = buttonProps;

  const emailValue = email?.current?.value || "";
  const passwordValue = password?.current?.value || "";
  const fullNameValue = fullName?.current?.value || "";
  
  const errorMessages = validateData(
    signIn,
    emailValue,
    passwordValue,
    fullNameValue
  );
  setErrorMessages(errorMessages);
  if (errorMessages) return;
  handleSignup(
    signIn,
    emailValue,
    passwordValue,
    fullNameValue,
    setErrorMessages,
    dispatch
  );
};

function handleSignup(
  signIn,
  emailValue,
  passwordValue,
  fullNameValue,
  setErrorMessages,
  dispatch
) {
  if (!signIn) {
    createUserWithEmailAndPassword(auth, emailValue, passwordValue)
      .then((userCredential) => {
        // create a new user in the database
        const user = userCredential.user;

        updateProfile(user, {
          displayName: fullNameValue,
          photoURL: USER_AVATAR,
        })
          .then(() => {
            const { uid, displayName, email, photoURL } =
              auth?.currentUser || "";
            dispatch(
              addUser({
                uid: uid,
                displayName: displayName,
                email: email,
                photoURL: photoURL,
              })
            );
          })
          .catch((error) => {
            setErrorMessages({ error: error.code + ":" + error.message });
          });

        console.log("User created successfully:", user);
      })
      .catch((error) => {
        const { code, message } = error;
        setErrorMessages({ error: code + ":" + message });
      });
  } else {
    // Handle sign-in logic here
    signInWithEmailAndPassword(auth, emailValue, passwordValue)
      .then((userData) => {
        console.log("User signed in successfully:", userData.user);
      })
      .catch((error) => {
        const { code, message } = error;
        setErrorMessages({ error: code + ":" + message });
      });
  }
}
