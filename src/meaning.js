import React from "react";

export default function Meaning(props){
    console.log(props.meaning)
    return(
    <div>
        <h5 className="cap part-of-speech">{props.meaning.partOfSpeech}</h5>
        <p>Definition: {props.meaning.definitions[0].definition}</p>
        <p></p>
        
        
    </div>)
}