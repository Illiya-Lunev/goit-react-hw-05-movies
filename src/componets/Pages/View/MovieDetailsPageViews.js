import MovieDetailsPage from '../MovieDetailsPage/MovieDetailsPage';
import { lazy, Suspense } from 'react';
import { useLocation, useRouteMatch, Route, NavLink } from 'react-router-dom';
import Loader from '../../Loader/Loader';
import s from '../MovieDetailsPage/movieDetailsPage.module.css';

const CastView = lazy(() =>
  import('./CastView.js' /* webpackChunkName: "cast" */),
);

const ReviewsView = lazy(() =>
  import('./ReviewsView.js' /* webpackChunkName: "reviews" */),
);

export default function MovieDetailsPageViews() {
  const { url, path } = useRouteMatch();
  const location = useLocation();

  return (
    <>
      <MovieDetailsPage />
      <div className={s.card_link}>
        <h2 className={s.card_title}>Additional information</h2>
        <NavLink
          className={s.link}
          activeClassName={s.activeLink}
          to={{
            pathname: `${url}/cast`,
            state: { from: location.state?.from || '/' },
          }}
        >
          Cast
        </NavLink>
        <NavLink
          className={s.link}
          activeClassName={s.activeLink}
          to={{
            pathname: `${url}/reviews`,
            state: { from: location.state?.from || '/' },
          }}
        >
          Reviews
        </NavLink>
      </div>
      <Suspense fallback={<Loader />}>
        <Route path={`${path}/cast`} exact>
          <div>
            <CastView />
          </div>
        </Route>

        <Route path={`${path}/reviews`} exact>
          <div>
            <ReviewsView />
          </div>
        </Route>
      </Suspense>
    </>
  );
}
