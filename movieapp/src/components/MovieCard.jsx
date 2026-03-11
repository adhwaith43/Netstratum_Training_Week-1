import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function MovieCard({ movie }) {
  if (!movie.poster_path) return null;
  return (
    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }} className="movie-card">
      <Link to={`/details/movie/${movie.id}`}>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title || movie.name} loading="lazy" />
      </Link>
    </motion.div>
  );
}