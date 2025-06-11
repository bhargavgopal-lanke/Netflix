import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import Browse from "./Browse";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/UserSlice";

const Body = () => {
  const dispatch = useDispatch(); 

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("user is signed in:", user);
        const { uid, displayName, email } = user;
        dispatch(addUser({ uid: uid, displayName: displayName, email: email }));
    
      } else {
        console.log("user is signed out");
        dispatch(removeUser());
     
      }
    });
  }, []);

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
