import { useState, useEffect } from 'react';
import { tmdb } from '../services/tmdb';
import MovieGrid from '../components/MovieGrid';
import GenreFilter from '../components/GenreFilter';
import Pagination from '../components/Pagination';

export default function Search() {
  const [query, setQuery] = useState('');
  const [genre, setGenre] = useState('');
  const [genres, setGenres] = useState([]);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => { tmdb.getGenres().then(res => setGenres(res.data.genres)); }, []);

  useEffect(() => {
    const fetchSearch = async () => {
      const res = query 
        ? await tmdb.search(query, page, genre) 
        : await tmdb.discover(page, genre);
      setMovies(res.data.results);
      setTotalPages(res.data.total_pages);
    };
    const debounce = setTimeout(() => fetchSearch(), 500);
    return () => clearTimeout(debounce);
  }, [query, genre, page]);

  return (
    <div className="page-container">
      <div className="controls">
        <input type="text" placeholder="Search movies..." value={query} onChange={(e) => { setQuery(e.target.value); setPage(1); }} />
        <GenreFilter genres={genres} selectedGenre={genre} onSelect={(val) => { setGenre(val); setPage(1); }} />
      </div>
      <MovieGrid movies={movies} />
      <Pagination page={page} setPage={setPage} totalPages={totalPages > 500 ? 500 : totalPages} />
    </div>
  );
}