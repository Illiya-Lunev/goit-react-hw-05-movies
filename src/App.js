import Container from './componets/Container/Container';
import AppBar from './componets/AppBar/AppBar';
import { Switch, Route } from 'react-router-dom';
import HomePage from './componets/Pages/HomePage/HomePage';
import MoviesPage from './componets/Pages/MoviesPage/MoviesPage';
import NotFoundViews from './componets/Pages/View/NotFoundViews';

export default function App() {
  return (
    <Container>
      <AppBar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route path="/movies">
          <MoviesPage />
        </Route>

        <Route>
          <NotFoundViews />
        </Route>
      </Switch>
    </Container>
  );
}
