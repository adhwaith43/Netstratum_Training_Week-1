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
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      slidesPerView={1}
      className="hero-swiper" // <-- Added this class
      // style={{ width: '100%', height: '85vh' }}
    >
      {movies.slice(0, 5).map((movie) => (
        <SwiperSlide key={movie.id}>
          <div className="hero-banner" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})` }}>
            <div className="hero-overlay"></div>
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="hero-content">
              <h1 className="hero-title">{movie.title || movie.name}</h1>
              <p className="hero-desc">{movie.overview}</p>
              <Link to={`/details/movie/${movie.id}`} className="btn-primary">
                Play / More Info
              </Link>
            </motion.div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}