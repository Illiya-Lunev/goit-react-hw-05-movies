import { useState, useEffect } from 'react';
import { useParams, useLocation, useHistory, Redirect } from 'react-router-dom';
import s from './movieDetailsPage.module.css';

import * as ApiService from '../../../Service/ApiService';

export default function MovieDetailsPage() {
  const history = useHistory();
  const location = useLocation();

  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    ApiService.fetchMovieDetails({ movieId }).then(setMovie).catch(setError);
  }, [movieId]);

  const handleGoBackClick = () => {
    history.push(location.state.from);
  };

  return (
    <>
      {error && <Redirect to="/error" />}
      {movie && (
        <div>
          <button
            className={s.button}
            type="button"
            onClick={handleGoBackClick}
          >
            Go Back
          </button>
          <div className={s.card_container}>
            <img
              src={'https://image.tmdb.org/t/p/w300' + movie.poster_path}
              alt={movie.title}
            />

            <div className={s.card}>
              <h2 className={s.title}>
                {movie.title} ({movie.release_date.substr(0, 4)})
              </h2>
              <span> Vote / Votes: {movie.vote_average}</span>
              <h3 className={s.overview}>
                Overview:
                <span>{movie.overview} </span>
              </h3>
              <h4 className={s.overview}>
                Genres:
                <span className={s.genre}>
                  {movie.genres.slice(0, 3).map(genre => {
                    return `${genre.name} `;
                  })}
                </span>
              </h4>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
