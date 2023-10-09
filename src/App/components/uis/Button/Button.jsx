import React from "react";
import './Button.css'

/*function Button(props) {
    return (<button>Benjamin</button>);
} */

const Button = (props) => {
    console.log(props);
    return <button className="Button" onClick={(evt)=>
        // traitement de l'event prealable propre au composant
         {
            console.log(evt);            
            //declenchement de la fonction envoyée par les props
            props.onbuttonclick('on a tappé sur Benjamin');
         }}>{props.text}</button>;
}

export default Button;