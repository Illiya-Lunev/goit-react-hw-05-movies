import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as ApiService from '../../../Service/ApiService';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    ApiService.fetchReviews({ movieId }).then(data => setReviews(data.results));
  }, [movieId]);

  return (
    <>
      {reviews && reviews.length > 0 && (
        <ul>
          {reviews.map(item => (
            <li key={item.id}>
              <p>Author: {item.author}</p>
              <p>{item.content}</p>
            </li>
          ))}
        </ul>
      )}
      {reviews && reviews.length === 0 && (
        <p> We don't have any reviews for this movie</p>
      )}
    </>
  );
}
