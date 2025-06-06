import React from "react";
import "./Login.css";
import NetflixIcon from "../Icons/NetflixIcon";
import Footer from "./Footer";

const Login = () => {
  return (
    <>
      <div className="banner-img">
        <div className="container">
          <header className="netflix-header">
            <NetflixIcon />
          </header>
          <div className="sign-in-container">
            <div className="sign-in-content">
              <h1>Sign In</h1>
              <form className="sign-in-form">
                <input
                  type="email"
                  placeholder="Email or phone number"
                  className="email-field"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="password-field"
                />
                <button type="submit" className="sign-in-button">
                  Sign In
                </button>
                <div className="or-container">
                  <label>OR</label>
                </div>
                <button type="submit" className="sign-in-code-button">
                  Use a Sign-In Code
                </button>
                <a href="#" target="_blank" className="pwd-link">
                  Forgot passord?
                </a>
                <div className="remember-me-container">
                  <input
                    type="checkbox"
                    id="remember-me"
                    className="remember-me-checkbox"
                  />
                  <label htmlFor="remember-me" className="remember-me-label">
                    Remember me
                  </label>
                </div>
                <span className="signup-info">
                  New to Netflix?
                  <a href="#" className="signup-now">
                    Sign up now
                  </a>
                </span>
                <span className="recaptcha-info">
                  This page is protected by Google reCAPTCHA to ensure you're
                  not a bot.
                </span>
                <a href="#" className="learn-more">
                  Learn more
                </a>
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
