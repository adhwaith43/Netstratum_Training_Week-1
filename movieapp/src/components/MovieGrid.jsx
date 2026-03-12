import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';

export default function MovieGrid({ movies }) {
  // Add the || [] fallback to prevent crashing if state is temporarily undefined
  const hiddenMovies = useSelector((state) => state.hiddenMovies || []);
  
  if (!movies || movies.length === 0) return null;

  // Safely filter out the deleted movies
  const visibleMovies = movies.filter(movie => !hiddenMovies.includes(movie.id));

  return (
    <div className="movie-grid">
      {visibleMovies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}