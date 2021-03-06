import React from "react";
import Synonym from "./synonyms";
import Antonym from "./antonyms";

export default function Meaning(props){
    return(
    <div>
        <h5 className="cap part-of-speech">{props.meaning.partOfSpeech}</h5>
        {props.meaning.definitions.map(function(def,index){
            return(
                <div>
                    <div className="definition-list row">
                        <li className="definition">{def.definition}</li>
                        <em className="examples">{def.example}</em>
                        <br></br>
                    
                    </div>
                    
                <div className="row ant-syn">
                    <Synonym synonyms={def.synonyms}/>
                    <Antonym antonyms={def.antonyms}/>
                </div>
                <br></br>
                </div>

            )
        })}
        

    </div>)
}