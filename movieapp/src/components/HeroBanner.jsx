import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css/effect-fade';

export default function HeroBanner({ movies }) {
  if (!movies || movies.length === 0) return null;

  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      effect="fade"
      speed={1500}
      autoplay={{ delay: 8000, disableOnInteraction: false }}
      slidesPerView={1}
      className="hero-swiper"
    >
      {movies.slice(0, 5).map((movie) => {
        // Fallback for trending endpoint which mixes tv and movies
        const mediaType = movie.media_type || 'movie'; 
        
        return (
          <SwiperSlide key={movie.id}>
            <div className="hero-banner" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`, padding: 0 }}>
              <div className="hero-overlay"></div>
              <Link to={`/details/${mediaType}/${movie.id}`} className="hero-slide-link">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="hero-content">
                  <h1 className="hero-title">{movie.title || movie.name}</h1>
                  <p className="hero-desc">{movie.overview}</p>
                </motion.div>
              </Link>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}