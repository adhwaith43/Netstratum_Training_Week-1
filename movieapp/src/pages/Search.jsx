import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { tmdb } from '../services/tmdb';
import MovieGrid from '../components/MovieGrid';
import GenreFilter from '../components/GenreFilter';
import Pagination from '../components/Pagination';

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { i18n } = useTranslation();
  
  // Get type from URL, default to movie
  const mediaType = searchParams.get('type') || 'movie'; 
  
  const [query, setQuery] = useState('');
  const [genre, setGenre] = useState('');
  const [genres, setGenres] = useState([]);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Re-fetch genres if the user switches between TV/Movies or changes Language
  useEffect(() => { 
    tmdb.getGenres(mediaType, i18n.language).then(res => {
      setGenres(res.data.genres);
      setGenre(''); // Reset selected genre when switching media types
    }); 
  }, [mediaType, i18n.language]);

  // Master fetch logic
  useEffect(() => {
    const fetchSearch = async () => {
      let res;
      if (query) {
        // 1. Fetch text search
        res = await tmdb.search(query, page, mediaType, i18n.language);
        let results = res.data.results;
        
        // 2. Client-side filter for genres since TMDB search endpoint ignores them
        if (genre) {
          results = results.filter(item => item.genre_ids.includes(parseInt(genre)));
        }
        setMovies(results);
      } else {
        // Use discover endpoint which perfectly handles genres
        res = await tmdb.discover(page, mediaType, genre, i18n.language);
        setMovies(res.data.results);
      }
      setTotalPages(res?.data?.total_pages || 1);
    };

    const debounce = setTimeout(() => fetchSearch(), 500);
    return () => clearTimeout(debounce);
  }, [query, genre, page, mediaType, i18n.language]);

  return (
    <div className="page-container">
      <div style={{ marginBottom: '30px', display: 'flex', gap: '20px', flexDirection: 'column', alignItems: 'center' }}>
        <h2 style={{textTransform: 'uppercase', letterSpacing: '1px'}}>{mediaType === 'tv' ? 'TV Shows' : 'Movies'}</h2>
        
        <input 
          type="text" 
          placeholder={`Search ${mediaType === 'tv' ? 'TV shows' : 'movies'}...`}
          value={query} 
          onChange={(e) => { setQuery(e.target.value); setPage(1); }} 
          style={{ width: '100%', maxWidth: '600px', padding: '15px 20px', fontSize: '1.2rem', borderRadius: '30px', border: 'none', outline: 'none', background: '#333', color: 'white' }}
        />
        <div className="controls">
          <GenreFilter genres={genres} selectedGenre={genre} onSelect={(val) => { setGenre(val); setPage(1); }} />
        </div>
      </div>
      
      {movies.length > 0 ? (
        <>
          <MovieGrid movies={movies} />
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