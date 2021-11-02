import { useState, useEffect } from 'react';
import * as ApiService from '../../service/ApiService';
import { Link, useHistory, useLocation } from 'react-router-dom';
import s from './moviesPage.module.css';

export default function MoviesPage() {
  const history = useHistory();
  const location = useLocation();
  const [query, setQuery] = useState('');

  const [inputQuery, setInputQuery] = useState('');
  const [movies, setMovies] = useState(null);

  if (location.search !== '') {
    if (query === '') {
      setQuery(new URLSearchParams(location.search).get('query'));
    }
  }

  useEffect(() => {
    if (query === '') {
      return;
    }

    ApiService.fetchMovies({ query }).then(data => setMovies(data.results));
    history.push({ ...location, search: `query=${query}` });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const handleInputChange = e => {
    setInputQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (inputQuery.trim() === '') {
      return;
    }
    setQuery(inputQuery);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={s.form}>
        <input
          className={s.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Enter the title of the movie"
          value={inputQuery}
          onChange={handleInputChange}
        ></input>
        <button type="submit" className={s.button}>
          Search
        </button>
      </form>
      <ul className={s.films_list}>
        {movies &&
          movies.map(movie => {
            return (
              <li className={s.films_item} key={movie.id}>
                <Link
                  className={s.films_link}
                  to={{
                    pathname: `/movies/${movie.id}`,
                    state: { from: location },
                  }}
                >
                  <img
                    className={s.films_poster}
                    src={'https://image.tmdb.org/t/p/w200' + movie.poster_path}
                    alt={movie.title}
                    width="240"
                  ></img>
                </Link>
              </li>
            );
          })}
        {movies && movies.length === 0 && (
          <p className={s.title}>No results were found for {query}</p>
        )}
      </ul>
    </>
  );
}
