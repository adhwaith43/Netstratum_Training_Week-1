import { Link } from "react-router-dom";

function MovieCard({ item }) {

const title = item.title || item.name;
const type = item.media_type || (item.first_air_date ? "tv" : "movie");

return (

<div className="movie-card">

<Link to={`/details/${type}/${item.id}`}>

<img
src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
alt={title}
/>

</Link>

<p>{title}</p>

<span>⭐ {item.vote_average}</span>

</div>

);

}

export default MovieCard;