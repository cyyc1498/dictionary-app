import axios from "axios";
import React,{useState} from "react";
import Definition from "./definition";

export default function Dictionary(){

let [word,setWord] = useState("")

function getWord(event){
setWord(event.target.value)
}

let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`

function handleSubmit(response){
    console.log(response.data)
}
axios.get(apiUrl).then(handleSubmit)
return (
    
    <div>
    <form>
        <input type="text" className="search-bar" onChange={getWord}></input>
        <input type="submit" value="Search" className="search-button" onSubmit={handleSubmit}></input>
    </form>
    <Definition word={word}/>
    </div>
)
}