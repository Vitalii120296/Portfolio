import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { App } from './App';
import { HomePage } from './modules/HomePage';
import { BurgerProvider } from './shared/context/BurgerContext';
import { ScrollToTop } from './shared/ScrollToTop/ScrollToTop';
import { Suspense } from 'react';

export const Root = () => (
  <BurgerProvider>
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="projects" element={<HomePage />} />
            <Route path="about-me" element={<HomePage />} />
            <Route path="contact" element={<HomePage />} />
          </Route>
        </Routes>
        </Suspense>
    </Router>
  </BurgerProvider>

);