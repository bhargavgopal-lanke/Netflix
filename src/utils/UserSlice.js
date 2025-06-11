import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

let UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
      console.log(state.user, action);
    },
    removeUser: (state, action) => {
      console.log(state, action);
      state = action.payload;
    },
  },
});

export const { addUser, removeUser } = UserSlice.actions;
export default UserSlice.reducer;
