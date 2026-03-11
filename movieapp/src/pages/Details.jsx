import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useDispatch } from "react-redux";
import { addFavorite } from "../redux/favoritesSlice";

import { getDetails } from "../services/tmdb";

function Details(){

const { id, type } = useParams();

const [data,setData] = useState(null);

const dispatch = useDispatch();

useEffect(()=>{

getDetails(id,type).then(setData)

},[id,type])

if(!data) return <p>Loading...</p>;

const title = data.title || data.name;

return(

<div className="details-container">

<img
src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
/>

<div>

<h1>{title}</h1>

<p>{data.overview}</p>

<p>Release: {data.release_date || data.first_air_date}</p>

<p>⭐ {data.vote_average}</p>

<p>

Genres:

{data.genres.map(g => (

<span key={g.id}> {g.name}</span>

))}

</p>

<button
onClick={()=>
dispatch(addFavorite({
id:data.id,
title,
poster_path:data.poster_path
}))
}
>

Add to Favorites

</button>

</div>

</div>

)

}

export default Details;