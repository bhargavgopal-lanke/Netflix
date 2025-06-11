import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase";
import { addUser } from "./UserSlice";

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
  signIn,
  navigate
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
        addUser({
          email: user.email,
        });
        console.log("User created successfully:", user);
        navigate("/");
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
        navigate("/browse");
      })
      .catch((error) => {
        const { code, message } = error;
        setErrorMessages({ error: code + ":" + message });
      });
  }
};
