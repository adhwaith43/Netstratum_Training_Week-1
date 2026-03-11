import MovieCard from "./MovieCard";

function MovieGrid({ items }) {

return (

<div className="movie-grid">

{items.map(item => (

<MovieCard key={item.id} item={item}/>

))}

</div>

);

}

export default MovieGrid;