import React from "react";
import Meaning from "./meaning";
import Phonetics from "./phonetics";

export default function Results(props){
    if(props.data){
    return(
        <div className="results">
        <h2 className="cap searched-word text-center"><strong>{props.data.word}</strong></h2>
        <h4 className="pronounciation">Pronounciations</h4>
        {props.data.phonetics.map(function(phonetic,index){
            return(
                <div className="pronounciation">
                <Phonetics phonetics={phonetic}/>
                </div>
            )
        })}
        <br></br>
        <div>{props.data.meanings.map(function(meaning,index){
            return(
                <div key={index}>
                    <ol>
                    <Meaning meaning={meaning}/>
                    </ol>
                </div>
            )
            }
        )}</div>
        </div>
    )
} else{
    return null
}
}

