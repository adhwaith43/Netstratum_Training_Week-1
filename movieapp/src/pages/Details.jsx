import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { addFavorite, removeFavorite } from '../redux/favoritesSlice';
import { saveEditedMovie } from '../redux/editedSlice';
import { tmdb } from '../services/tmdb';
import { FaStar } from 'react-icons/fa';
import Loader from '../components/Loader';

import { useAuth0 } from '@auth0/auth0-react'; 
import { hideMovie } from '../redux/hiddenSlice'; 

export default function Details() {
  const { type, id } = useParams();
  const [apiMovie, setApiMovie] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({ title: '', overview: '', userRating: 0 });

  const dispatch = useDispatch();
  const navigate = useNavigate(); // <-- Initialized the navigate hook here!
  const { i18n } = useTranslation();

  const { user, isAuthenticated } = useAuth0();
  const isAdmin = isAuthenticated && user?.email === 'adhwaitham@netstratum.com';
  
  const favorites = useSelector((state) => state.favorites.items);
  const editedData = useSelector((state) => state.editedMovies[id]); 
  
  const isFavorite = favorites.some((fav) => fav.id === parseInt(id));

  useEffect(() => {
    tmdb.getDetails(id, type, i18n.language).then((res) => {
      setApiMovie(res.data);
      setEditForm({
        title: editedData?.title || res.data.title || res.data.name,
        overview: editedData?.overview || res.data.overview,
        userRating: editedData?.userRating || 0
      });
    });
  }, [id, type, editedData, i18n.language]);

  if (!apiMovie) return <Loader />;

  const displayTitle = editedData?.title || apiMovie.title || apiMovie.name;
  const displayOverview = editedData?.overview || apiMovie.overview;
  const displayRating = editedData?.userRating || null;

  const handleFavorite = () => {
    isFavorite ? dispatch(removeFavorite(apiMovie.id)) : dispatch(addFavorite(apiMovie));
  };

  const handleSaveEdit = (e) => {
    e.preventDefault();
    dispatch(saveEditedMovie({ id, ...editForm }));
    setIsEditing(false);
  };

  const handleDelete = () => {
    if (window.confirm("Admin Action: Are you sure you want to remove this movie from the platform?")) {
      dispatch(hideMovie(apiMovie.id));
      navigate('/'); 
    }
  };

  return (
    <div>
      <div className="details-backdrop" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${apiMovie.backdrop_path})` }}>
        <div className="details-backdrop-overlay"></div>
      </div>

      <div className="details-content-wrapper">
        <img className="details-poster" src={`https://image.tmdb.org/t/p/w500${apiMovie.poster_path}`} alt={displayTitle} />
        
        <div className="details-info">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>{displayTitle}</h1>
            
            {/* <-- Added the Delete button right next to the Edit button here --> */}
            <div style={{ display: 'flex', gap: '10px' }}>
              <button className="btn-secondary" onClick={() => setIsEditing(!isEditing)}>
                {isEditing ? 'Cancel Edit' : 'Edit Movie Info'}
              </button>
              
              {isAdmin && (
                <button 
                  className="btn-primary" 
                  style={{ backgroundColor: '#8a0303', border: '1px solid #ff4d4d' }} 
                  onClick={handleDelete}
                >
                  Delete Movie
                </button>
              )}
            </div>
          </div>

          <p style={{ color: '#aaa', marginBottom: '20px', fontSize: '1.1rem' }}>
            Release: {apiMovie.release_date || apiMovie.first_air_date} &nbsp;|&nbsp; TMDB Rating: {apiMovie.vote_average?.toFixed(1)}
            {displayRating && <span style={{ color: 'gold', marginLeft: '15px' }}><FaStar style={{ transform: 'translateY(2px)' }}/> My Rating: {displayRating}/10</span>}
          </p>
          
          <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
            {apiMovie.genres?.map(g => <span key={g.id} style={{ border: '1px solid #555', padding: '5px 15px', borderRadius: '20px', fontSize: '0.9rem' }}>{g.name}</span>)}
          </div>

          {isEditing ? (
            <form className="edit-form" onSubmit={handleSaveEdit}>
              <label>Custom Title</label>
              <input type="text" value={editForm.title} onChange={(e) => setEditForm({...editForm, title: e.target.value})} required />
              
              <label>Custom Overview</label>
              <textarea value={editForm.overview} onChange={(e) => setEditForm({...editForm, overview: e.target.value})} required />
              
              <label>My Rating (1-10)</label>
              <input type="number" min="0" max="10" value={editForm.userRating} onChange={(e) => setEditForm({...editForm, userRating: e.target.value})} />
              
              <button type="submit" className="btn-primary" style={{ width: 'fit-content', marginTop: '15px' }}>Save Changes</button>
            </form>
          ) : (
            <>
              <p style={{ marginBottom: '30px', fontSize: '1.2rem', lineHeight: '1.6', maxWidth: '800px' }}>{displayOverview}</p>
              <button className="btn-primary" onClick={handleFavorite} style={{ padding: '12px 24px', fontSize: '1.1rem' }}>
                {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}