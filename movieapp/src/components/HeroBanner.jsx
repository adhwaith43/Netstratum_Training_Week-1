import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function HeroBanner({ movie }) {
  if (!movie) return null;
  const backgroundStyle = { backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})` };

  return (
    <div className="hero-banner" style={backgroundStyle}>
      <div className="hero-overlay"></div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="hero-content">
        <h1 className="hero-title">{movie.title || movie.name}</h1>
        <p className="hero-desc">{movie.overview}</p>
        <Link to={`/details/movie/${movie.id}`} className="btn-primary">More Info</Link>
      </motion.div>
    </div>
  );
}