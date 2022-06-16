import React from "react";

export default function Meaning(props){
    console.log(props.meaning)
    return(
    <div>
        {props.meaning.partOfSpeech}
        {props.meaning.definitions[0].definitions}
    </div>)
}