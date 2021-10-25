import Container from './componets/Container/Container';
import AppBar from './componets/AppBar/AppBar';
import { Switch, Route } from 'react-router-dom';
import HomePageView from './componets/Pages/View/HomePageView';
import MovieDetailsPageViews from './componets/Pages/View/MovieDetailsPageViews';
import MoviesPageView from './componets/Pages/View/MoviesPageView';
import NotFoundViews from './componets/Pages/View/NotFoundViews';

export default function App() {
  return (
    <Container>
      <AppBar />
      <Switch>
        <Route exact path="/">
          <HomePageView />
        </Route>

        <Route path="/movies">
          <MoviesPageView />
        </Route>

        <Route path="/movies/:movieId">
          <MovieDetailsPageViews />
        </Route>

        <Route>
          <NotFoundViews />
        </Route>
      </Switch>
    </Container>
  );
}
