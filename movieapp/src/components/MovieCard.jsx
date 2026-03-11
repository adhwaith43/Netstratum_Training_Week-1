import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function MovieCard({ movie }) {
  if (!movie.poster_path) return null;

  // Smart detection: TMDB sometimes leaves out media_type. 
  // If it's missing, we check if it has a TV-specific property like 'first_air_date'.
  const mediaType = movie.media_type || (movie.first_air_date ? 'tv' : 'movie');

  return (
    <motion.div 
      whileHover={{ scale: 1.05 }} 
      transition={{ duration: 0.2 }} 
      className="movie-card"
    >
      <Link to={`/details/${mediaType}/${movie.id}`}>
        <img 
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
          alt={movie.title || movie.name} 
          loading="lazy" 
        />
      </Link>
    </motion.div>
  );
}