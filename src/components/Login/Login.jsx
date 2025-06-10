import React, { useRef, useState } from "react";
import "./Login.css";
import NetflixIcon from "../Icons/NetflixIcon";
import Footer from "./Footer";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import Rememberme from "./Rememberme";
import { validateData } from "../../utils/validate";

const Login = () => {
  const [signIn, setSignUp] = useState(true);
  const [togglePassword, setTogglePassword] = useState(false);
  const [errorMessges, setErrorMessages] = useState({});

  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const handleClick = () => {
    setSignUp(!signIn);
  };

  const handleToggle = () => {
    setTogglePassword(!togglePassword);
  };

  const handleButtonClick = () => {
    const emailValue = email?.current?.value || "";
    const passwordValue = password?.current?.value || "";
    const fullNameValue = fullName?.current?.value || "";
    const errorMessages = validateData(
      emailValue,
      passwordValue,
      fullNameValue
    );
    setErrorMessages(errorMessages);
  };


  return (
    <>
      <div className="banner-img">
        <div className="container">
          <header className="netflix-header">
            <NetflixIcon />
          </header>
          <div className="sign-in-container">
            <div className="sign-in-content">
              <h1>{signIn ? "Sign In" : "Sign Up"}</h1>
              <form
                className="sign-in-form"
                onSubmit={(e) => e.preventDefault()}
              >
                {!signIn && (
                  <input
                    type="text"
                    placeholder="Full name"
                    ref={fullName}
                    className="fullname-field"
                  />
                )}
                <input
                  type="email"
                  ref={email}
                  placeholder="Email or phone number"
                  className="email-field"
                />
                {errorMessges?.email && (
                  <span className="error-message">{errorMessges?.email}</span>
                )}
                <div class="password-container">
                  <input
                    type={!togglePassword ? "password" : "text"}
                    id="password"
                    ref={password}
                    className="password-field"
                    placeholder="Enter password"
                  />
                  <span class="toggle-icon" onClick={handleToggle}>
                    {togglePassword ? <BsEyeFill /> : <BsEyeSlashFill />}
                  </span>
                </div>
                {errorMessges?.password && (
                  <span className="error-message">
                    {errorMessges?.password}
                  </span>
                )}

                <button
                  type="submit"
                  className="sign-in-button"
                  onClick={handleButtonClick}
                >
                  {signIn ? "Sign In" : "Sign Up"}
                </button>
                {signIn && (
                  <>
                    <div className="or-container">
                      <label>OR</label>
                    </div>
                    <button type="submit" className="sign-in-code-button">
                      Use a Sign-In Code
                    </button>
                  </>
                )}
                <a href="#" target="_blank" className="pwd-link">
                  Forgot password?
                </a>
                <Rememberme signIn={signIn} handleClick={handleClick} />
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
