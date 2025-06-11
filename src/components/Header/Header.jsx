import React from "react";
import NetflixIcon from "../Icons/NetflixIcon";
import userlogo from "../../Images/userlogoimage.jpg";
import { auth } from "../../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const HandleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        console.log(error.message);
      });
  };

  return (
    <div className="header-container">
      <div className="netflix-header">
        <NetflixIcon />
      </div>
      <div className="user-logo">
        <img src={userlogo} alt="user-image" className="user-logo-img" />
        <button type="button" onClick={HandleSignout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
