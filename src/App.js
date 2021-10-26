import Container from './componets/Container/Containier';
import AppBar from './componets/AppBar/AppBar';
import { Switch, Route } from 'react-router-dom';
import Loader from './componets/Loader/Loader';
import { lazy, Suspense } from 'react';

const HomePageView = lazy(() =>
  import(
    './componets/Pages/View/HomePageView.js' /* webpackChunkName: "home-page" */
  ),
);

const MoviesPageView = lazy(() =>
  import(
    './componets/Pages/View/MoviesPageView' /* webpackChunkName: "movies-page" */
  ),
);

const MovieDetailsPageViews = lazy(() =>
  import(
    './componets/Pages/View/MovieDetailsPageViews' /* webpackChunkName: "movie-details-page" */
  ),
);

const NotFoundViews = lazy(() =>
  import(
    './componets/Pages/View/NotFoundViews' /* webpackChunkName: "not-found-page" */
  ),
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
