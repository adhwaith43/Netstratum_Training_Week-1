import { useSelector } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import MovieGrid from '../components/MovieGrid';
import Loader from '../components/Loader';

export default function Favorites() {
  const { user, isLoading } = useAuth0();
  const userId = user?.sub; 

  const favorites = useSelector((state) => {
    if (!state?.favorites?.users || !userId) return [];
    return state.favorites.users[userId] || [];
  });

  const hiddenMovies = useSelector((state) => state.hiddenMovies || []);
  const visibleFavorites = favorites.filter(movie => !hiddenMovies.includes(movie.id));

  if (isLoading) return <Loader />;

  return (
    <div className="page-container">
      <h2 style={{ marginBottom: '30px', fontSize: '2rem' }}>My Favorites</h2>
      
      {visibleFavorites.length > 0 ? (
        <MovieGrid movies={visibleFavorites} />
      ) : (
        <div style={{ textAlign: 'center', marginTop: '100px', fontSize: '1.2rem', color: '#888' }}>
          No favorite movies / tv shows yet. Go add some!
        </div>
      )}
    </div>
  );
}