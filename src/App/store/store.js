import {configureStore} from '@reduxjs/toolkit'
import currentReducer, { changeMeme, clearMeme} from './currentSlice'

export const storr=configureStore({
    reducer:currentReducer
    });

    console.log(store.getState());
    store.dispatch(changeMeme({text:'mon nouveau meme'}));
    console.log(store.getState());