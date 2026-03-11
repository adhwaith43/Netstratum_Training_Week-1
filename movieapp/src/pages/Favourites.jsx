import { useSelector, useDispatch } from "react-redux";

import { removeFavorite } from "../redux/favoritesSlice";

function Favorites(){

const favorites = useSelector(state => state.favorites.items);

const dispatch = useDispatch();

return(

<div style={{padding:"30px"}}>

<h1>Your Favorites</h1>

<div className="movie-grid">

{favorites.map(item => (

<div key={item.id}>

<img
src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
/>

<p>{item.title}</p>

<button
onClick={()=>dispatch(removeFavorite(item.id))}
>

Remove

</button>

</div>

))}

</div>

</div>

)

}

export default Favorites;