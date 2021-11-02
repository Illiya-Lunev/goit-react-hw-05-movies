import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as ApiService from '../../service/ApiService';
import s from './HomePage.module.css';

export default function HomePage() {
  const location = useLocation();
  const [trends, setTrends] = useState(null);

  useEffect(() => {
    ApiService.fetchTrending().then(data => setTrends(data.results));
  }, []);

  return (
    <div>
      <h1 className={s.title}>Trending today</h1>
      {trends && (
        <ul className={s.films_list}>
          {trends.map(trend => (
            <li className={s.films_item} key={trend.id}>
              <Link
                className={s.films_link}
                to={{
                  pathname: `/movies/${trend.id}`,
                  state: { from: location },
                }}
              >
                <img
                  className={s.films_poster}
                  src={'https://image.tmdb.org/t/p/w200' + trend.poster_path}
                  alt={trend.title}
                  width="240"
                ></img>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
