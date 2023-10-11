import {configureStore, combineReducers} from '@reduxjs/toolkit'
import currentReducer, { changeMeme, clearMeme} from './currentSlice'
import resourcesReducer, { loadImages, loadMemes } from './ressourcesSlice'
import modalReducer from './modalSlice'

export const store=configureStore({
    reducer:combineReducers({current: currentReducer, modal:modalReducer, ressources: resourcesReducer})
    });
store.dispatch(loadImages());
store.dispatch(loadMemes());
 //   console.log(store.getState());
 //   store.dispatch(changeMeme({text:'mon nouveau meme'}));
 //   console.log(store.getState());