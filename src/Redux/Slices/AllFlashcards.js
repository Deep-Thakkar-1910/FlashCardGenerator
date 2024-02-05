import { createSlice } from "@reduxjs/toolkit";

const allFlashCardSlice = createSlice({
    name: 'allFlashCards',
    initialState : [],
    reducers : {
        populateFlashCards : (state,action)=>{
            return [...state,action.payload];
        }
    }
});

export const {populateFlashCards} = allFlashCardSlice.actions;

export default allFlashCardSlice.reducer;