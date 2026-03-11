import { useEffect, useState } from "react";
import { getTrending } from "../services/tmdb";

import MovieGrid from "../components/MovieGrid";

function Home(){

const [items,setItems] = useState([]);

useEffect(()=>{

getTrending().then(setItems)

},[])

return(

<div>

<h2 style={{padding:"20px"}}>Trending</h2>

<MovieGrid items={items}/>

</div>

)

}

export default Home;