import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./UserSlice";

const appStore = configureStore({
  reducer: {
    userReducer: userSlice,
  },
});

export default appStore;
