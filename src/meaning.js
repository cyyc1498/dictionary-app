import React from "react";

export default function Meaning(props){
    console.log(props.meaning)
    return(
    <div>
        <h5 className="cap part-of-speech">{props.meaning.partOfSpeech}</h5>
        {props.meaning.definitions.map(function(def,index){
            return(
                <div>
                <ul>
                    <li><p>{def.definition}</p></li>
                    <em>{def.example}</em>
                </ul>
                </div>
            )
        })}
    </div>)
}