import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RESSOURCES_URL, REST_ADR } from "../config/constantes";

const initialState = { images: [], memes: [] };

const ressourcesSlice = createSlice({
  name: "ressources",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase("ressources/loadImages/fulfilled", (state, action) => {
      state.images.splice(0);
      state.images.push(...action.payload);
    });
    builder.addCase("ressources/loadMemes/fulfilled", (state, action) => {
      state.memes.splice(0);
      state.memes.push(...action.payload);
    });
    builder.addCase('current/save/fulfilled',(state,action)=>{
       const position = state.memes.findIndex(m=>m.id === action.payload.id);
       if(position>=0){
        state.memes[position] = action.payload;
       }
       else{
        state.memes.push(action.payload);
       }
    });
    // builder.addCase('ressources/loadImages/rejected',()=>{console.log('erreur de chargement')});
  },
});

export const loadImages = createAsyncThunk(
  "ressources/loadImages",
  async () => {
    const primage = await fetch(`${REST_ADR}${RESSOURCES_URL.images}`);
    return await primage.json();
  }
);

export const loadMemes = createAsyncThunk("ressources/loadMemes", async () => {
  const prmeme = await fetch(`${REST_ADR}${RESSOURCES_URL.memes}`);
  return await prmeme.json();
});

export default ressourcesSlice.reducer;
