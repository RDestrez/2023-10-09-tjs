import { createSlice } from '@reduxjs/toolkit'
import { emptyMeme } from 'orsys-tjs-meme';

const initialState = emptyMeme

const currentSlice = createSlice({
  name: "current",
  initialState,
  reducers: {
    changeMeme: (state,action)=>{
        
    }
  }
});

export const {} = currentSlice.actions

export default currentSlice.reducer