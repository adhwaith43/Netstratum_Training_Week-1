import { useEffect, useState } from 'react';
import { tmdb } from '../services/tmdb';
import HeroBanner from '../components/HeroBanner';
import MovieRow from '../components/MovieRow';
import Loader from '../components/Loader';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const [data, setData] = useState(null);
  const { i18n } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      const lang = i18n.language; // Pass lang to all calls
      const [trending, popular, topRated, action, comedy, horror] = await Promise.all([
        tmdb.getTrending(lang), 
        tmdb.getPopular('movie', lang), 
        tmdb.getTopRated('movie', lang),
        tmdb.getDiscover('movie', 28, lang), 
        tmdb.getDiscover('movie', 35, lang), 
        tmdb.getDiscover('movie', 27, lang)
      ]);
      setData({
        trending: trending.data.results, popular: popular.data.results,
        topRated: topRated.data.results, action: action.data.results, 
        comedy: comedy.data.results, horror: horror.data.results
      });
    };
    fetchData();
  }, [i18n.language]);

  if (!data) return <Loader />;

  return (
    <div>
      <HeroBanner movies={data.trending} /> {/* Pass the whole array instead of [0] */}
      <MovieRow title="Trending Now" movies={data.trending} />
      <MovieRow title="Popular" movies={data.popular} />
      <MovieRow title="Top Rated" movies={data.topRated} />
      <MovieRow title="Action Movies" movies={data.action} />
      <MovieRow title="Comedy Movies" movies={data.comedy} />
      <MovieRow title="Horror Movies" movies={data.horror} />
    </div>
  );
}