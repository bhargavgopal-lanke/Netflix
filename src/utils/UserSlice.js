import { createSlice } from "@reduxjs/toolkit";

let userInitialState = {
  email: "",
  password: "",
};

let UserSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    addUser: (state, action) => {
      console.log(state, action);
      state = action.payload;
    },
    removeUser: (state, action) => {
      console.log(state, action);
      state = action.payload;
    },
  },
});


export const { addUser, removeUser } = UserSlice.actions;
export default UserSlice.reducer;
