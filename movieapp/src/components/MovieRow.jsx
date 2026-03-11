import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';

export default function MovieRow({ title, movies }) {
  const hiddenMovies = useSelector((state) => state.hiddenMovies);

  if (!movies || movies.length === 0) return null;

  // Filter out the deleted movies
  const visibleMovies = movies.filter(movie => !hiddenMovies.includes(movie.id));

  if (visibleMovies.length === 0) return null; // Hide the whole row if everything is deleted

  return (
    <div className="movie-row">
      <h2>{title}</h2>
      <div className="swiper-container">
        <Swiper 
          modules={[Navigation]}
          navigation
          spaceBetween={10} 
          slidesPerView={2} 
          breakpoints={{ 640: { slidesPerView: 4 }, 1024: { slidesPerView: 6 }, 1440: { slidesPerView: 8 } }}
        >
          {visibleMovies.map((movie) => (
            <SwiperSlide key={movie.id}><MovieCard movie={movie} /></SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}