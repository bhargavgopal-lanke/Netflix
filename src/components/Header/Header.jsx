import React, { useEffect, useState } from "react";
import NetflixIcon from "../Icons/NetflixIcon";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { HandleSignout, handleSubscribe } from "../../utils/utils";
import {
  addLanguageToggle,
  addToggleSearchView,
} from "../../utils/Slices/SearchgptSlice";
import { LangDropdown } from "../../utils/Constants";

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

  const store = useSelector((state) => state);
  const user = store?.userReducer?.user || "";
  const searchPageView = store?.searchGptPage?.toggleSearchView;

  const hanldeSearchClick = () => {
    dispatch(addToggleSearchView());
  };

  const handleLangClick = (e) => {
    const value = e.target.value;
    dispatch(addLanguageToggle(value));
  };

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
      {user && (
        <div className="user-logo">
          {searchPageView && (
            <select onClick={handleLangClick} className="lang-button">
              {LangDropdown.map((x) => (
                <option key={x.identifier} value={x.identifier}>
                  {x.name}
                </option>
              ))}
            </select>
          )}
          <button
            type="button"
            className="search-btn"
            onClick={hanldeSearchClick}
          >
            {searchPageView ? "Search GPT" : "Home Page"}
          </button>
          <img
            src={user?.photoURL}
            alt="user-image"
            className="user-logo-img"
          />
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
