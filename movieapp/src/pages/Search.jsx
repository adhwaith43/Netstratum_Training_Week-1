import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { tmdb } from '../services/tmdb';
import MovieGrid from '../components/MovieGrid';
import GenreFilter from '../components/GenreFilter';
import Pagination from '../components/Pagination';

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';

  const [query, setQuery] = useState(initialQuery);
  const [genre, setGenre] = useState('');
  const [genres, setGenres] = useState([]);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Sync state if URL changes from Navbar search
  useEffect(() => {
    setQuery(searchParams.get('q') || '');
    setPage(1);
  }, [searchParams]);

  useEffect(() => { tmdb.getGenres().then(res => setGenres(res.data.genres)); }, []);

  useEffect(() => {
    const fetchSearch = async () => {
      let res;
      if (query) {
        res = await tmdb.search(query, page);
        let results = res.data.results;
        if (genre) results = results.filter(movie => movie.genre_ids.includes(parseInt(genre)));
        setMovies(results);
      } else {
        res = await tmdb.discover(page, genre);
        setMovies(res.data.results);
      }
      setTotalPages(res?.data?.total_pages || 1);
    };

    const debounce = setTimeout(() => fetchSearch(), 500);
    return () => clearTimeout(debounce);
  }, [query, genre, page]);

  // Update URL without refreshing when typing in the big input
  const handleLocalSearch = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    setSearchParams(newQuery ? { q: newQuery } : {});
  };

  return (
    <div className="page-container">
      {/* Restored Old Search Style Input */}
      <div style={{ marginBottom: '30px', display: 'flex', gap: '20px', flexDirection: 'column', alignItems: 'center' }}>
        <input 
          type="text" 
          placeholder="Search for movies, TV shows..." 
          value={query} 
          onChange={handleLocalSearch} 
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
          No movies found. Try adjusting your search or filters.
        </div>
      )}
    </div>
  );
}