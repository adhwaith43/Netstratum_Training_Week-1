import { useEffect, useState } from 'react';
import { tmdb } from '../services/tmdb';
import HeroBanner from '../components/HeroBanner';
import MovieRow from '../components/MovieRow';
import Loader from '../components/Loader';

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const [trending, popular, topRated, action, comedy, horror] = await Promise.all([
        tmdb.getTrending(), tmdb.getPopular(), tmdb.getTopRated(),
        tmdb.getDiscover(28), tmdb.getDiscover(35), tmdb.getDiscover(27)
      ]);
      setData({
        hero: trending.data.results[0], trending: trending.data.results, popular: popular.data.results,
        topRated: topRated.data.results, action: action.data.results, comedy: comedy.data.results, horror: horror.data.results
      });
    };
    fetchData();
  }, []);

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