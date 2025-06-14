import React from "react";
import { useSelector } from "react-redux";
import { lang } from "../utils/Constants";

const SearchGPT = () => {
  const store = useSelector((state) => state);
  const langKey = store?.searchGptPage?.addLanguage;
  
  return (
    <div className="searchgpt-banner">
      <div className="search-implementation-form">
        <form>
          <input type="text" placeholder={lang[langKey].placeHolderText} />
          <button type="button">{lang[langKey].name}</button>
        </form>
      </div>
    </div>
  );
};

export default SearchGPT;
