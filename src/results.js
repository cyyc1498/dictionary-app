import React from "react";
import Meaning from "./meaning";


export default function Results(props){
    console.log(props.data)
    if(props.data){
    return(
        <div className="results">
        <h2 className="cap searched-word text-center"><strong>{props.data.word}</strong> - {props.data.phonetic}</h2>
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

