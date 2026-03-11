import { Swiper, SwiperSlide } from 'swiper/react';
import MovieCard from './MovieCard';

export default function MovieRow({ title, movies }) {
  if (!movies || movies.length === 0) return null;
  return (
    <div className="movie-row">
      <h2>{title}</h2>
      <Swiper spaceBetween={10} slidesPerView={2} breakpoints={{ 640: { slidesPerView: 4 }, 1024: { slidesPerView: 6 }, 1440: { slidesPerView: 8 } }}>
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}><MovieCard movie={movie} /></SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}