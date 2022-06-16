import React from "react";
import Meaning from "./meaning";


export default function Results(props){
    console.log(props.data)
    if(props.data){
    return(
        <div>
        <h2>{props.data.word}</h2>
        <h3>Definition</h3>
        <div>{props.data.meanings.map(function(meaning,index){
            return(
                <div>
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

//<div>{props.data.meanings[0].definitions[0].definition}</div>