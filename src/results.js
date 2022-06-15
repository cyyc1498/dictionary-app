import React from "react";


export default function Results(props){
    console.log(props.data)
    if(props.data){
    return(
        <div>
        <h2>{props.data.word}</h2>
        <h3>Definitions</h3>
        </div>
    )
} else{
    return null
}
}