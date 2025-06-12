import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import Browse from "./Browse";


const Body = () => {
  return (
    <div className="body-container">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/browse" element={<Browse />} />
      </Routes>
    </div>
  );
};

export default Body;
