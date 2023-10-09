import React from 'react';
import Button from './components/uis/Button/Button';

import './App.css';

function App() {
  return (
    <div className="App">
     Hello world !! 
     <hr/>
     <Button text="Valider" onbuttonclick={(param)=>{console.log('action',param)}}/>
     <Button text="Valider" onbuttonclick/>
     <Button text="Benjamin"/>
     <Button x={[1,2]} c={{abc:123}} s="cc" n={1} b="true" g={undefined} />
    </div>
  );
}

export default App;
