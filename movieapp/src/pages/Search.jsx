import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { searchMulti } from "../services/tmdb";

import MovieGrid from "../components/MovieGrid";

function Search(){

const { query } = useParams();

const [results,setResults] = useState([]);

useEffect(()=>{

searchMulti(query).then(setResults)

},[query])

return(

<div>

<h2 style={{padding:"20px"}}>

Search Results for "{query}"

</h2>

<MovieGrid items={results}/>

</div>

)

}

export default Search;