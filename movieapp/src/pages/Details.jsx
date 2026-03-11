import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { addFavorite, removeFavorite } from '../redux/favoritesSlice';
import { saveEditedMovie } from '../redux/editedSlice';
import { tmdb } from '../services/tmdb';
import { FaStar } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { motion, AnimatePresence } from 'framer-motion';
import Loader from '../components/Loader';

import { useAuth0 } from '@auth0/auth0-react'; 
import { hideMovie } from '../redux/hiddenSlice'; 

export default function Details() {
  const { type, id } = useParams();
  const [apiMovie, setApiMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [editForm, setEditForm] = useState({ title: '', overview: '', userRating: 0 });

  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const { i18n } = useTranslation();

  const { user, isAuthenticated } = useAuth0();
  // Ensure you use your exact Auth0 email here!
  const isAdmin = isAuthenticated && user?.email === 'adhwaitham@netstratum.com';
  const userId = user?.sub; 
  
  const userFavorites = useSelector((state) => {
    if (!state || !state.favorites || !state.favorites.users) return [];
    return state.favorites.users[userId] || [];
  });
  
  const editedData = useSelector((state) => state.editedMovies?.[id]); 
  const isFavorite = userFavorites.some((fav) => fav.id === parseInt(id));

  useEffect(() => {
    tmdb.getDetails(id, type, i18n.language).then((res) => {
      setApiMovie(res.data);
      setEditForm({
        title: editedData?.title || res.data.title || res.data.name,
        overview: editedData?.overview || res.data.overview,
        userRating: editedData?.userRating || 0
      });
    });

    // Fetch Cast Data
    tmdb.getCredits(id, type, i18n.language).then((res) => {
      setCast(res.data.cast.slice(0, 12)); // Grab top 12 actors
    });
  }, [id, type, editedData, i18n.language]);

  if (!apiMovie) return <Loader />;

  const displayTitle = editedData?.title || apiMovie.title || apiMovie.name;
  const displayOverview = editedData?.overview || apiMovie.overview;
  const displayRating = editedData?.userRating || null;

  const handleFavorite = () => {
    if (!isAuthenticated) return; 
    if (isFavorite) {
      dispatch(removeFavorite({ userId, movieId: apiMovie.id }));
      toast.success("Removed from Favorites");
    } else {
      dispatch(addFavorite({ userId, movie: apiMovie }));
      toast.success("Added to Favorites");
    }
  };

  const handleSaveEdit = (e) => {
    e.preventDefault();
    dispatch(saveEditedMovie({ id, ...editForm }));
    setIsEditing(false);
    toast.success("Movie details updated!");
  };

  const confirmDelete = () => {
    dispatch(hideMovie(apiMovie.id));
    toast.error("Movie deleted from platform");
    navigate('/'); 
  };

  return (
    <div>
      <div className="details-backdrop" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${apiMovie.backdrop_path})` }}>
        <div className="details-backdrop-overlay"></div>
      </div>

      <div className="details-content-wrapper">
        <img className="details-poster" src={`https://image.tmdb.org/t/p/w500${apiMovie.poster_path}`} alt={displayTitle} />
        
        <div className="details-info" style={{ width: '100%' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'nowrap' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '10px', paddingRight: '20px' }}>{displayTitle}</h1>
            
            <div style={{ display: 'flex', gap: '10px', flexShrink: 0, marginTop: '15px' }}>
              <button className="btn-secondary" onClick={() => setIsEditing(!isEditing)}>
                {isEditing ? 'Cancel Edit' : 'Edit Movie Info'}
              </button>
              
              {isAdmin && (
                <button className="btn-primary" style={{ backgroundColor: '#8a0303', border: '1px solid #ff4d4d' }} onClick={() => setShowDeleteModal(true)}>
                  Delete Movie
                </button>
              )}
            </div>
          </div>

          <p style={{ color: '#aaa', marginBottom: '20px', fontSize: '1.1rem' }}>
            Release: {apiMovie.release_date || apiMovie.first_air_date} &nbsp;|&nbsp; TMDB Rating: {apiMovie.vote_average?.toFixed(1)}
            {displayRating && <span style={{ color: '#e5a00d', marginLeft: '15px' }}><FaStar style={{ transform: 'translateY(2px)' }}/> My Rating: {displayRating}/10</span>}
          </p>
          
          <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
            {apiMovie.genres?.map(g => <span key={g.id} style={{ border: '1px solid #555', padding: '5px 15px', borderRadius: '20px', fontSize: '0.9rem' }}>{g.name}</span>)}
          </div>

          {isEditing ? (
            <form className="edit-form" onSubmit={handleSaveEdit} style={{ maxWidth: '800px', margin: '0', padding: '0', background: 'transparent' }}>
              <label style={{ display: 'block', marginBottom: '5px', color: '#888' }}>Custom Title</label>
              <input type="text" value={editForm.title} onChange={(e) => setEditForm({...editForm, title: e.target.value})} required style={{ marginBottom: '15px', width: '100%', padding: '10px' }} />
              
              <label style={{ display: 'block', marginBottom: '5px', color: '#888' }}>Custom Overview</label>
              <textarea value={editForm.overview} onChange={(e) => setEditForm({...editForm, overview: e.target.value})} required style={{ marginBottom: '15px', width: '100%', padding: '10px', height: '100px' }} />
              
              <label style={{ display: 'block', marginBottom: '5px', color: '#888' }}>My Rating (1-10)</label>
              <input type="number" min="0" max="10" value={editForm.userRating} onChange={(e) => setEditForm({...editForm, userRating: e.target.value})} style={{ padding: '10px' }} />
              
              <button type="submit" className="btn-primary" style={{ display: 'block', marginTop: '20px' }}>Save Changes</button>
            </form>
          ) : (
            <>
              <p style={{ marginBottom: '30px', fontSize: '1.2rem', lineHeight: '1.6', maxWidth: '800px' }}>{displayOverview}</p>
              
              {/* Cast Row Section */}
              {cast.length > 0 && (
                <div className="cast-container">
                  <h3 style={{ marginBottom: '15px' }}>Top Cast</h3>
                  <div className="cast-row">
                    {cast.map(actor => (
                      <div key={actor.id} className="cast-card">
                        <img src={actor.profile_path ? `https://image.tmdb.org/t/p/w200${actor.profile_path}` : 'https://via.placeholder.com/120x180?text=No+Image'} alt={actor.name} />
                        <div className="cast-name">{actor.name}</div>
                        <div className="cast-character">{actor.character}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {isAuthenticated && (
                <button className="btn-primary" onClick={handleFavorite} style={{ padding: '12px 24px', fontSize: '1.1rem', marginTop: '20px' }}>
                  {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
                </button>
              )}
            </>
          )}
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      <AnimatePresence>
        {showDeleteModal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)', zIndex: 1000, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} style={{ background: 'var(--bg-color)', padding: '40px', borderRadius: '8px', border: '1px solid #ff4d4d', textAlign: 'center', maxWidth: '450px' }}>
              <h2 style={{ marginBottom: '15px', color: '#ff4d4d' }}>Delete Movie?</h2>
              <p style={{ color: 'var(--text-color)', marginBottom: '30px' }}>This action is permanent and will hide this movie from all users across the platform.</p>
              <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
                <button className="btn-secondary" onClick={() => setShowDeleteModal(false)}>Cancel</button>
                <button className="btn-primary" style={{ backgroundColor: '#8a0303' }} onClick={confirmDelete}>Yes, Delete</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}