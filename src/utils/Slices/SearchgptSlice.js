import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggleSearchView: false,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    addToggleSearchView: (state, action) => {
      state.toggleSearchView = !state.toggleSearchView;
    },
  },
});


export const { addToggleSearchView } = searchSlice.actions;
export default searchSlice.reducer;
