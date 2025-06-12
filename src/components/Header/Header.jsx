import React from "react";
import NetflixIcon from "../Icons/NetflixIcon";
import userlogo from "../../Images/userlogoimage.jpg";
import { auth } from "../../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../utils/UserSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const HandleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        console.log(error.message);
      });
  };

  const store = useSelector((state) => state.userReducer.user);
  const { displayName, photoURL } = store || "";

  return (
    <div className="header-container">
      <div className="netflix-header">
        <NetflixIcon />
      </div>
      {store && (
        <div className="user-logo">
          <h4>{displayName}</h4>
          <img src={photoURL} alt="user-image" className="user-logo-img" />
          <button type="button" onClick={HandleSignout}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
