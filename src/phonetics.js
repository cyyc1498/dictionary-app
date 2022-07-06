import React from "react";
import ReactAudioPlayer from "react-audio-player";


export default function Phonetics(props){
    if(props.phonetics.text && props.phonetics.audio)
    {return(
        <span>
            <h6>
            <span>{props.phonetics.text}</span>
            <span><a className="speaker-emoji"href={props.phonetics.audio}target="_blank"> 🔊</a></span></h6>
        </span>
    )}else{
        return null
    }

}