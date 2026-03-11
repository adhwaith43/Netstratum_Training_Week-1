import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';

export default function MovieGrid({ movies }) {
  const hiddenMovies = useSelector((state) => state.hiddenMovies);
  
  // Filter out the deleted movies before mapping
  const visibleMovies = movies.filter(movie => !hiddenMovies.includes(movie.id));

  return (
    <div className="movie-grid">
      {visibleMovies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}