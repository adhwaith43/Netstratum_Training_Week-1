import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../redux/favoritesSlice';
import { tmdb } from '../services/tmdb';
import Loader from '../components/Loader';

export default function Details() {
  const { type, id } = useParams();
  const [movie, setMovie] = useState(null);
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);
  const isFavorite = favorites.some((fav) => fav.id === parseInt(id));

  useEffect(() => {
    tmdb.getDetails(id, type).then((res) => setMovie(res.data));
  }, [id, type]);

  if (!movie) return <Loader />;

  const handleFavorite = () => {
    isFavorite ? dispatch(removeFavorite(movie.id)) : dispatch(addFavorite(movie));
  };

  return (
    <div className="page-container details-page">
      <img className="details-poster" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <div className="details-info">
        <h1>{movie.title || movie.name}</h1>
        <p style={{ color: '#aaa', marginBottom: '20px' }}>Release: {movie.release_date || movie.first_air_date} | Rating: {movie.vote_average}</p>
        <p style={{ marginBottom: '20px' }}>{movie.overview}</p>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
          {movie.genres?.map(g => <span key={g.id} style={{ background: '#333', padding: '5px 10px', borderRadius: '15px' }}>{g.name}</span>)}
        </div>
        <button className="btn-primary" onClick={handleFavorite}>
          {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
      </div>
    </div>
  );
}