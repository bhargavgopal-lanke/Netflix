import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase";

export const handleClick = (signIn, setSignUp) => {
  setSignUp(!signIn);
};

export const handleToggle = (setTogglePassword, togglePassword) => {
  setTogglePassword(!togglePassword);
};

export const handleButtonClick = (
  email,
  password,
  fullName,
  validateData,
  setErrorMessages,
  signIn
) => {
  const emailValue = email?.current?.value || "";
  const passwordValue = password?.current?.value || "";
  const fullNameValue = fullName?.current?.value || "";
  const errorMessages = validateData(emailValue, passwordValue, fullNameValue);
  setErrorMessages(errorMessages);
  if (errorMessages === null) return;
  console.log("signIn:", signIn);
  if (!signIn) {
    createUserWithEmailAndPassword(auth, emailValue, passwordValue)
      .then((userCredential) => {
        // create a new user in the database
        const user = userCredential.user;
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
};
