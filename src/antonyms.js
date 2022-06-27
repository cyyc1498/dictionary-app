import React from "react";

export default function Antonym(props){
    console.log(props.antonyms)
    if(props.antonyms.length > 0){
        return(
        <div className=" col-3 ant"> <u>Antonyms:</u>
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