import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as ApiService from '../../../Service/ApiService';
import s from './cast.module.css';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    ApiService.fetchCast({ movieId })
      .then(data => setCast(data.cast))
      .catch(error => console.log(error));
  }, [movieId]);
  return (
    <>
      {cast && (
        <ul className={s.cast_list}>
          {cast.slice(0, 10).map(item => (
            <li className={s.item} key={item.id}>
              <div className={s.card_container}>
                <img
                  src={'https://image.tmdb.org/t/p/w200' + item.profile_path}
                  alt={item.title}
                />
                <h3>{item.name}</h3>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
