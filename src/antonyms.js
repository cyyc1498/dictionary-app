import React from "react";

export default function Antonym(props){
    console.log(props.antonyms)
    if(props.antonyms){
        return(
        <div> Antonyms:
            <ul>
            <div>{props.antonyms.map(function(ant,index){
                return(
                    <li>{ant}</li>
                )
            })}</div>
            </ul>
            </div>
            )
        }else{
            return null
        }
}