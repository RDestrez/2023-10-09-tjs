import React, {useEffect, useState} from "react";
import "./App.css";
import Button from "./components/uis/Button/Button";


function App() {
  const [counter, setcounter] = useState(-1);
  //mount uniquement
  useEffect(() => {
    //corps du cycle de vie
    setcounter(0);

    //fonction de démontage de composant
    return () => {
     // effect
    };
  }, [])
  //mount et mis à jour
  useEffect(() => {
    console.log('didUpdate sur effect', counter);
  }, [counter])

 
  return (
    <div className="App">
      Valeur counter : {counter}
      <hr />
      <Button
        onbuttonclick={(param) => {
          setcounter(counter+1);
          console.log(counter);
        }}
       
      >+1 </Button>
      <Button
      text="Annuler"
        onbuttonclick={(param) => {
          setcounter(counter-1);
          console.log(counter);
        }}
       
      >-1 </Button>
    </div>
  );
}

export default App;
