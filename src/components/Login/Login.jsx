import React, { useRef, useState } from "react";
import "./Login.css";
import Footer from "./Footer";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import Rememberme from "./Rememberme";
import { validateData } from "../../utils/validate";
import {
  handleButtonClick,
  handleClick,
  handleToggle,
} from "../../utils/EventHandlerFunctions";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";

const Login = () => {
  const [signIn, setSignUp] = useState(true);
  const [togglePassword, setTogglePassword] = useState(false);
  const [errorMessges, setErrorMessages] = useState({});

  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const navigate = useNavigate();

  const buttonProps = {
    email,
    password,
    fullName,
    validateData,
    setErrorMessages,
    signIn,
    navigate,
  };

  return (
    <>
      <div className="banner-img">
        <div className="container">
          <Header />
          <div className="sign-in-container">
            <div className="sign-in-content">
              <h1>{signIn ? "Sign In" : "Sign Up"}</h1>
              <form
                className="sign-in-form"
                onSubmit={(e) => e.preventDefault()}
              >
                {!signIn && (
                  <>
                    <input
                      type="text"
                      placeholder="Full name"
                      ref={fullName}
                      className="fullname-field"
                    />
                    {errorMessges?.fullName && (
                      <span className="error-message">
                        {errorMessges?.fullName}
                      </span>
                    )}
                  </>
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
                  <span
                    class="toggle-icon"
                    onClick={() =>
                      handleToggle(setTogglePassword, togglePassword)
                    }
                  >
                    {togglePassword ? <BsEyeFill /> : <BsEyeSlashFill />}
                  </span>
                </div>
                {errorMessges?.password && (
                  <span className="error-message">
                    {errorMessges?.password}
                  </span>
                )}
                {errorMessges?.error && (
                  <span className="error-message">{errorMessges?.error}</span>
                )}

                <button
                  type="submit"
                  className="sign-in-button"
                  onClick={() => {
                    handleButtonClick(buttonProps);
                  }}
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
                <Rememberme
                  signIn={signIn}
                  handleClick={() => handleClick(signIn, setSignUp)}
                />
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
