import React, { useEffect, useState } from "react";
import "./App.css";
import FlexHGrow from "./components/layouts/FlexHGrow/FlexHGrow";
import Header from "./components/uis/Header/Header";
import Navbar from "./components/uis/Navbar/Navbar";
import FlexWGrow from "./components/layouts/FlexWGrow/FlexWGrow";
import MemeForm, { ConnectedMemeForm } from "./components/functionnals/MemeForm/MemeForm";
import Footer from "./components/uis/Footer/Footer";
import { emptyMeme } from "orsys-tjs-meme";
import  MemeSVGViewer from "./components/uis/MemeSVGViewer/MemeSVGViewer";
import {Modal} from "./components/Modal/Modal"
import {Link, Route, Routes} from "react-router-dom"
import Thumbnail from "./components/pages/thumbnail";
import Editor from "./components/pages/Editor";

function App(props) {
//  const [state, setstate] = useState(emptyMeme);
  //const [images, setimages] = useState([]);

 // useEffect(() => {
 //   fetch("http://localhost:5679/images")
 //     .then((resp) => resp.json())
 //     .then((arr) => setimages(arr));
 // }, []);
  return (
    <>
    <div className="App">
      <div>
        <Link to="/home" >HOME</Link>
        <Link to="/thumbnail" >THUMBNAIL</Link>
        <Link to="/editor" >EDITOR</Link>
      </div>
      <Routes>
        <Route path="/" element={<div>Bienvenue</div>}/>
        <Route path="/thumbnail" element={<Thumbnail />} />
        <Route path="/editor" element={<Editor />}/>
      </Routes>
     
    </div>
   <Modal/>
   </>
  );
}

export default App;
