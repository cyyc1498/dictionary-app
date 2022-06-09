import React,{useState} from "react";

export default function Dictionary(){

let [word,setWord] = useState("")


function handleSubmit(){
    
}

let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`

function getWord(event){
setWord(event.target.value)
}

return (
    <div>
    <form>
        <input type="text" className="search-bar" onChange={getWord}></input>
        <input type="submit" value="Search" className="search-button"></input>
    </form>
    </div>
)
}