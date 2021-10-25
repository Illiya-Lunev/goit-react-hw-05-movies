import Navigation from '../Navigation/Navigation';
import s from './appBar.module.css';

export default function Appbar() {
  return (
    <header className={s.header}>
      <Navigation />
    </header>
  );
}
