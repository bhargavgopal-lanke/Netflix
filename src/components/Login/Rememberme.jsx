import React from "react";

const Rememberme = ({ signIn }) => {
  return (
    <div>
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
        {signIn ? "Already a user?" : "New to Netflix"}
        <a href="#" className="signup-now">
          {signIn ? "Sign In" : "Sign up now"}
        </a>
      </span>
      <span className="recaptcha-info">
        This page is protected by Google reCAPTCHA to ensure you're not a bot.
      </span>
      <a href="#" className="learn-more">
        Learn more
      </a>
    </div>
  );
};

export default Rememberme;
