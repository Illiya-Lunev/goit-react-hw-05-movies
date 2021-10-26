import { useState, useEffect } from 'react';
import { useParams, useLocation, useHistory, Redirect } from 'react-router-dom';

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
          <button type="button" onClick={handleGoBackClick}>
            Go Back
          </button>
          <div>
            <img
              src={'https://image.tmdb.org/t/p/w300' + movie.poster_path}
              alt={movie.title}
            />

            <div>
              <h2>
                {movie.title} ({movie.release_date.substr(0, 4)})
              </h2>
              <span> User score: {movie.vote_average}</span>
              <h3>
                Overview:
                <span>{movie.overview} </span>
              </h3>
              <h4>
                Genres:
                <span>
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
