import Container from './componets/Container/Containier';
import AppBar from './componets/AppBar/AppBar';
import { Switch, Route } from 'react-router-dom';
import Loader from './componets/Loader/Loader';
import { lazy, Suspense } from 'react';

const HomePageView = lazy(() =>
  import('./pages/View/HomePageView' /* webpackChunkName: "home-page" */),
);

const MoviesPageView = lazy(() =>
  import('./pages/View/MoviesPageView' /* webpackChunkName: "movies-page" */),
);

const MovieDetailsPageViews = lazy(() =>
  import(
    './pages/View/MovieDetailsPageViews' /* webpackChunkName: "movie-details-page" */
  ),
);

const NotFoundViews = lazy(() =>
  import('./pages/View/NotFoundViews' /* webpackChunkName: "not-found-page" */),
);

export default function App() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/">
            <HomePageView />
          </Route>

          <Route path="/movies" exact>
            <MoviesPageView />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPageViews />
          </Route>

          <Route path="/error" exact>
            <NotFoundViews />
          </Route>
          <Route>
            <NotFoundViews />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}
