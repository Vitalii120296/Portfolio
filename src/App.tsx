import './App.scss'
import { Outlet } from 'react-router-dom';
import { Header } from './modules/Header/Header';

export const App = () => {

  return (
    <div className="app" id="top">
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>

      </footer>
    </div>
  );
};

