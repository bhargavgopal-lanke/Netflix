import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggleSearchView: false,
  addLanguage: "en",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    addToggleSearchView: (state, action) => {
      state.toggleSearchView = !state.toggleSearchView;
    },
    addLanguageToggle: (state, action) => {
      state.addLanguage = action.payload;
    },
  },
});

export const { addToggleSearchView, addLanguageToggle } = searchSlice.actions;
export default searchSlice.reducer;
