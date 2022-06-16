import React from "react";
import Meaning from "./meaning";


export default function Results(props){
    console.log(props.data)
    if(props.data){
    return(
        <div>
        <h2 className="cap">{props.data.word} - {props.data.phonetic}</h2>
        <div>{props.data.meanings.map(function(meaning,index){
            return(
                <div key={index}>
                    <Meaning meaning={meaning}/>
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

