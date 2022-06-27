import React from "react";

export default function Synonym(props){
    console.log(props.synonyms)
        if(props.synonyms.length > 0){
            return(
        <div className="col-3 syn"><u>Synonyms:</u>
        <ul>
            <div>{props.synonyms.map(function(syn,index){
                return(
                    <li>{syn}</li>
                )
            })}</div>
        </ul>
        </div>
            )
        }else{
            return null
        }
}