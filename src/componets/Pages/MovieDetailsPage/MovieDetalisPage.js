import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import * as ApiService from '../../../Service/ApiService';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    ApiService.fetchMovieDetails({ movieId }).then(setMovie).catch(setError);
  }, [movieId]);

  return (
    <>
      {movie && (
        <div>
          <img
            src={'https://image.tmdb.org/t/p/w300' + movie.poster_path}
            alt={movie.title}
          />
        </div>
      )}
    </>
  );
}
