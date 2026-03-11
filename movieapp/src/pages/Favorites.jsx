import { useSelector } from 'react-redux';
import MovieGrid from '../components/MovieGrid';

export default function Favorites() {
  const favorites = useSelector((state) => state.favorites.items);
  
  return (
    <div className="page-container">
      <h2>My Favorites</h2>
      {favorites.length > 0 ? <MovieGrid movies={favorites} /> : <p>No favorite movies yet.</p>}
    </div>
  );
}