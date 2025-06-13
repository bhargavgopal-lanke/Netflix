import React, { useEffect, useState } from "react";
import NetflixIcon from "../Icons/NetflixIcon";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { HandleSignout, handleSubscribe } from "../../utils/utils";

const Header = () => {
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    let lastScrollTop = 0;
    const unsubscribe = handleSubscribe(dispatch, navigate);

    const handleScroll = () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setVisible(scrollTop < lastScrollTop);
      lastScrollTop = scrollTop;
    };

    window.addEventListener("scroll", handleScroll);

    // unsubscribe when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
      unsubscribe();
    };
  }, [dispatch, navigate]);

  const store = useSelector((state) => state?.userReducer?.user);
  const { displayName, photoURL } = store || "";

  return (
    <div
      className="header-container"
      style={{
        top: visible ? "0" : "-100px",
        transistion: "top 0.3s ease-in-out",
      }}
    >
      <div className="netflix-header">
        <NetflixIcon />
      </div>
      {store && (
        <div className="user-logo">
          <h4>{displayName}</h4>
          <img src={photoURL} alt="user-image" className="user-logo-img" />
          <button
            type="button"
            onClick={() => HandleSignout(dispatch, navigate)}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
