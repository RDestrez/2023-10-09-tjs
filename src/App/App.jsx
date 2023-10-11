import React, { useEffect, useState } from "react";
import "./App.css";
import FlexHGrow from "./components/layouts/FlexHGrow/FlexHGrow";
import Header from "./components/uis/Header/Header";
import Navbar from "./components/uis/Navbar/Navbar";
import FlexWGrow from "./components/layouts/FlexWGrow/FlexWGrow";
import MemeForm, { ConnectedMemeForm } from "./components/functionnals/MemeForm/MemeForm";
import Footer from "./components/uis/Footer/Footer";
import { MemeSVGViewer, emptyMeme } from "orsys-tjs-meme";

function App(props) {
  const [state, setstate] = useState(emptyMeme);
  const [images, setimages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5679/images")
      .then((resp) => resp.json())
      .then((arr) => setimages(arr));
  }, []);
  return (
    <div className="App">
      <FlexHGrow>
        <Header />
        <Navbar />
        <FlexWGrow>
          <MemeSVGViewer basePath="" meme={state}  image={images.find((elem) => elem.id===state.imageId)} />
          <ConnectedMemeForm
            images={images}
          />
        </FlexWGrow>
        <Footer />
      </FlexHGrow>
    </div>
  );
}

export default App;
