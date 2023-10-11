import React, { useEffect, useState } from "react";
import "./App.css";

import {Modal} from "./components/Modal/Modal"
import {Link, Route, Routes} from "react-router-dom"
import Thumbnail from "./components/pages/thumbnail";
import Editor from "./components/pages/Editor";
import FlexHGrow from "./components/layouts/FlexHGrow/FlexHGrow";
import FlexWGrow from "./components/layouts/FlexWGrow/FlexWGrow";
import Header from "./components/uis/Header/Header";
import Navbar from "./components/uis/Navbar/Navbar";



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
      <FlexHGrow>
        <Header/>
        <Navbar/>
        <FlexWGrow>
      <Routes>
        <Route path="/" element={<div>Bienvenue</div>}/>
        <Route path="/thumbnail" element={<Thumbnail />} />
        <Route path="/editor" element={<Editor />}/>
        <Route path="/editor/2" element={<Editor />}/>
      </Routes>
      </FlexWGrow>
      </FlexHGrow>
    </div>
   <Modal/>
   </>
  );
}

export default App;
