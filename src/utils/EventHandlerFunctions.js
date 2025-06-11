import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "./firebase";
import { addUser } from "./UserSlice";

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
    navigate,
  } = buttonProps;
  const emailValue = email?.current?.value || "";
  const passwordValue = password?.current?.value || "";
  const fullNameValue = fullName?.current?.value || "";
  const errorMessages = validateData(emailValue, passwordValue, fullNameValue);
  setErrorMessages(errorMessages);
  if (errorMessages === null) return;
  handleSignup(
    signIn,
    emailValue,
    passwordValue,
    fullNameValue,
    setErrorMessages,
    navigate
  );
};

function handleSignup(
  signIn,
  emailValue,
  passwordValue,
  fullNameValue,
  setErrorMessages,
  navigate
) {
  if (!signIn) {
    createUserWithEmailAndPassword(auth, emailValue, passwordValue)
      .then((userCredential) => {
        // create a new user in the database
        const user = userCredential.user;

        updateProfile(auth.currentUser, {
          displayName: fullNameValue,
          photoURL: "https://example.com/jane-q-user/profile.jpg",
        })
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          });

        // addUser({
        //   email: user.email,
        //   password: passwordValue
        // });
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
}
