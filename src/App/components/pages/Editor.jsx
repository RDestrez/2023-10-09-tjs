import React, { useEffect, useState } from 'react';

import MemeSvgViewer from '../uis/MemeSVGViewer/MemeSVGViewer';
import { ConnectedMemeForm } from '../functionnals/MemeForm/MemeForm';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import { changeMeme, clearMeme } from '../../store/currentSlice';
import {useNavigate} from 'react-router-dom'


export default function Editor() {
  const params=useParams();
  const d= useDispatch();
  const memes=useSelector(s=>s.ressources.memes);
  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      if(undefined !== params.id){
        d(clearMeme());
      }
      else{
        const current=memes.find((m) => m.id === Number(params.id));
        if(undefined !== current){
          d(changeMeme());
        }else if(memes.length ===0){
          navigate.push('/editor')
          // pas de meme avec l'id present dans les param
        }
      
      }
    };
  }, [memes,params,d,navigate])
  return (
    <>
          <MemeSvgViewer basePath="" />
          <ConnectedMemeForm />
    </>
  );
}
