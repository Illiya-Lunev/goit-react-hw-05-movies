import Container from './componets/Container/Container';
import AppBar from './componets/AppBar/AppBar';
import { Switch, Route } from 'react-router-dom';

export default function App() {
  return (
    <Container>
      <AppBar />
      <Route path="/"></Route>
    </Container>
  );
}
