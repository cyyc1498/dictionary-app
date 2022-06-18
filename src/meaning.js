import React from "react";

export default function Meaning(props){
    console.log(props.meaning)
    return(
    <div>
        <h5 className="cap part-of-speech">{props.meaning.partOfSpeech}</h5>
        {props.meaning.definitions.map(function(def,index){
            return(
                <div>
                    <div className="definition-list row">
                        <li className="definition"><strong>{def.definition}</strong></li>
                        <em>{def.example}</em>
                        <br></br><br></br>
                    
                    </div>
                    </div>
            )
        })}
        <div className="ant-syn-blocks">
        <div className="ant-syn">
            <u>Antonyms</u>
            <ul>
        {props.meaning.antonyms.map(function(ant,index){
            return(
                <li><div>
                <div>
                    {ant}  
                </div>
                </div></li>
            )
        })}</ul>
        </div>
        <div className="ant-syn">
            <u>Synonyms</u>
            <ul>
                {props.meaning.synonyms.map(function(syn,index){
                    return(
                        <li>
                        <div>
                            {syn}
                        </div>
                        </li>
                    )
                })}
            </ul>
        </div>
        </div>
    </div>)
}