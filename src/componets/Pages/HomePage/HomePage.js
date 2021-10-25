import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as ApiService from '../../../Service/ApiService';

export default function HomePage() {
  const location = useLocation();
  const [trends, setTrends] = useState(null);

  useEffect(() => {
    ApiService.fetchTrending().then(data => setTrends(data.results));
  }, []);
  return (
    <div>
      <h1>Trending today</h1>
      {trends && (
        <ul>
          {trends.map(trend => (
            <li key={trend.id}>
              <Link
                to={{
                  pathname: `/movies/${trend.id}`,
                  state: { from: location },
                }}
              >
                {trend.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
