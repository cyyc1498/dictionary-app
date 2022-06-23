import React from "react";
import Synonym from "./synonyms";
import Antonym from "./antonyms";

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
                        <br></br>
                    
                    </div>
                    
                <div className="row">
                    <Synonym synonyms={def.synonyms}/>
                    <Antonym antonyms={def.antonyms}/>
                </div>
                <br></br>
                </div>

            )
        })}
        

    </div>)
}