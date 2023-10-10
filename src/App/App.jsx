import React , {useState}  from "react";
import "./App.css";
import FlexHGrow from "./components/layouts/FlexHGrow/FlexHGrow";
import Header from "./components/uis/Header/Header";
import Navbar from "./components/uis/Navbar/Navbar";
import FlexWGrow from "./components/layouts/FlexWGrow/FlexWGrow";
import MemeSvgViewer from "./components/uis/MemeSVGViewer/MemeSVGViewer";
import MemeForm from "./components/functionnals/MemeForm/MemeForm";
import Footer from "./components/uis/Footer/Footer";
import {emptyMeme} from 'orsys-tjs-meme';

function App(props) {
  const [state,setstate] = useState(emptyMeme);
  return (
    <div className="App">
      <FlexHGrow>
        <Header />
        <Navbar />
        <FlexWGrow>
          <MemeSvgViewer basePath="" meme={state} />
          <MemeForm meme={state} onMemeChange={(meme)=>{
            setstate(meme);
          }}/>
        </FlexWGrow>
        <Footer />
      </FlexHGrow>
    </div>
  );
}

export default App;
