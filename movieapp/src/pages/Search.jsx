import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { tmdb } from '../services/tmdb';
import MovieGrid from '../components/MovieGrid';
import GenreFilter from '../components/GenreFilter';
import Pagination from '../components/Pagination';

export default function Search() {
  const [searchParams] = useSearchParams();
  const { i18n } = useTranslation();
  
  const [mediaType, setMediaType] = useState(searchParams.get('type') || 'movie');
  const [query, setQuery] = useState('');
  const [genre, setGenre] = useState('');
  const [genres, setGenres] = useState([]);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const hiddenMovies = useSelector((state) => state.hiddenMovies || []);

  useEffect(() => { 
    tmdb.getGenres(mediaType, i18n.language).then(res => {
      setGenres(res.data.genres);
      setGenre(''); 
    }); 
  }, [mediaType, i18n.language]);

  useEffect(() => {
    const fetchSearch = async () => {
      let res;
      if (query) {
        res = await tmdb.search(query, page, mediaType, i18n.language);
        let results = res.data.results;
        if (genre) results = results.filter(item => item.genre_ids.includes(parseInt(genre)));
        setMovies(results);
      } else {
        res = await tmdb.discover(page, mediaType, genre, i18n.language);
        setMovies(res.data.results);
      }
      setTotalPages(res?.data?.total_pages || 1);
    };
    const debounce = setTimeout(() => fetchSearch(), 500);
    return () => clearTimeout(debounce);
  }, [query, genre, page, mediaType, i18n.language]);

  // FIX #9: Filter out admin-deleted movies BEFORE checking length
  const visibleMovies = movies.filter(movie => !hiddenMovies.includes(movie.id));

  return (
    <div className="page-container">
      <div style={{ marginBottom: '30px', display: 'flex', gap: '20px', flexDirection: 'column', alignItems: 'center' }}>
        
        {/* Toggle Switch for Movie vs TV Show */}
        <div style={{ display: 'flex', gap: '10px', background: 'var(--input-bg)', padding: '5px', borderRadius: '30px' }}>
          <button className={mediaType === 'movie' ? 'btn-primary' : 'btn-secondary'} style={{ borderRadius: '25px', background: mediaType === 'movie' ? 'var(--primary-color)' : 'transparent', color: 'var(--text-color)' }} onClick={() => { setMediaType('movie'); setPage(1); }}>
            Movies
          </button>
          <button className={mediaType === 'tv' ? 'btn-primary' : 'btn-secondary'} style={{ borderRadius: '25px', background: mediaType === 'tv' ? 'var(--primary-color)' : 'transparent', color: 'var(--text-color)' }} onClick={() => { setMediaType('tv'); setPage(1); }}>
            TV Shows
          </button>
        </div>
        
        <input type="text" placeholder={`Search ${mediaType === 'tv' ? 'TV shows' : 'movies'}...`} value={query} onChange={(e) => { setQuery(e.target.value); setPage(1); }} style={{ width: '100%', maxWidth: '600px', padding: '15px 20px', fontSize: '1.2rem', borderRadius: '30px', border: 'none', outline: 'none', background: 'var(--input-bg)', color: 'var(--text-color)' }} />
        
        <div className="controls">
          <GenreFilter genres={genres} selectedGenre={genre} onSelect={(val) => { setGenre(val); setPage(1); }} />
        </div>
      </div>
      
      {/* Renders properly if empty after filtering out deleted movies */}
      {visibleMovies.length > 0 ? (
        <>
          <MovieGrid movies={visibleMovies} />
          <Pagination page={page} setPage={setPage} totalPages={totalPages > 500 ? 500 : totalPages} />
        </>
      ) : (
        <div style={{ textAlign: 'center', marginTop: '50px', fontSize: '1.2rem', color: '#888' }}>
          No results found. Try adjusting your search or filters.
        </div>
      )}
    </div>
  );
}