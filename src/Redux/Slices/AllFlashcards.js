import { createSlice } from "@reduxjs/toolkit";

const allFlashCardSlice = createSlice({
  name: "allFlashCards",
  initialState: [],
  reducers: {
    populateFlashCards: (state, action) => {
      return [...state, ...action.payload];
    },
    updateFlashCards: (state, action) => {
      return [...state, { ...action.payload }];
    },
  },
});

export const { populateFlashCards, updateFlashCards } =
  allFlashCardSlice.actions;

export default allFlashCardSlice.reducer;
