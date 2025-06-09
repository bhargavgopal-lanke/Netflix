import React, { useState } from "react";
import "./Login.css";
import NetflixIcon from "../Icons/NetflixIcon";
import Footer from "./Footer";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import Rememberme from "./Rememberme";

const Login = () => {
  const [signIn, setSignUp] = useState(true);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [fullName, setFullname] = useState("");
  const [togglePassword, setTogglePassword] = useState(false);

  const handleClick = () => {
    setSignUp(!signIn);
  };

  const handleToggle = () => {
    setTogglePassword(!togglePassword);
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
              <form className="sign-in-form">
                {!signIn && (
                  <input
                    type="text"
                    placeholder="Full name"
                    className="fullname-field"
                    onChange={(e) => setFullname(e.target.value)}
                    value={fullName}
                  />
                )}
                <input
                  type="email"
                  placeholder="Email or phone number"
                  className="email-field"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <div class="password-container">
                  <input
                    type={!togglePassword ? "password" : "text"}
                    id="password"
                    className="password-field"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                  />
                  <span class="toggle-icon" onClick={handleToggle}>
                    {togglePassword ? <BsEyeFill /> : <BsEyeSlashFill />}
                  </span>
                </div>

                <button
                  type="submit"
                  className="sign-in-button"
                  onClick={handleClick}
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
                <Rememberme signIn={signIn} />
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
