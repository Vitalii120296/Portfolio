import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { App } from './App';
import { HomePage } from './modules/HomePage';
import { BurgerProvider } from './shared/context/BurgerContext';

export const Root = () => (
  <BurgerProvider>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </Router>
  </BurgerProvider>

);