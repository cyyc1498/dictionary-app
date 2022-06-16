import React from "react";

export default function Meaning(props){
    console.log(props.meaning)
    return(
    <div>
        <h5 className="cap part-of-speech">{props.meaning.partOfSpeech}</h5>
        {props.meaning.definitions.map(function(def,index){
            return(
                <div>
                    <li className="definition"><strong>{def.definition}</strong></li>
                    <em>{def.example}</em>
                    <br></br><br></br>
                </div>
            )
        })}
    </div>)
}