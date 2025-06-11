import React from "react";
import NetflixIcon from "../Icons/NetflixIcon";
import userlogo from "../../Images/userlogoimage.jpg";

const Header = () => {
  return (
    <div className="header-container">
      <div className="netflix-header">
        <NetflixIcon />
      </div>
      <div className="user-logo">
        <img src={userlogo} alt="user-image" className="user-logo-img" />
        <button type="button">Logout</button>
      </div>
    </div>
  );
};

export default Header;
