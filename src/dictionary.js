import axios from "axios";
import React,{useState} from "react";
import Results from "./results";

export default function Dictionary(){

let [word,setWord] = useState("");
let [results,setResults] = useState(null)

function getWord(event){
setWord(event.target.value)
}

function handleSubmit(event){
    event.preventDefault();
    search();
    
}

function search(){
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    axios.get(apiUrl).then(handleResponse);

}


function handleResponse(response){
        console.log(response.data)
        setResults(response.data[0])
    }

return (
    
    <div>
          <div className="row">
          <span className='col'><h1 className='title'>Dictionary</h1></span>
          <span className='col'>
        
    <form onSubmit={handleSubmit}>
        <input type="text" className="search-bar" onChange={getWord}></input>
        <input type="submit" value="Search" className="search-button" ></input>
    </form>
    </span>
    <Results data={results}/>
    </div>
    </div>
)
}