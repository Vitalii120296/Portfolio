import './App.scss';
import { Header } from './modules/Header/Header';
import { Photo } from './modules/Photo';
import { HomePage } from './modules/HomePage';
import { MyProjects } from './modules/MyProjects';
import { AboutMe } from './modules/AboutMe';
import { Contact } from './modules/Contact';
import { useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

export const App = () => {
  const location = useLocation();
  const [rotate, setRotate] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);
  const cubeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (cubeRef.current) {
      setContentWidth(cubeRef.current.offsetWidth);
    }

    switch (location.pathname) {
      case '/':
        return setRotate(0);
      case '/projects':
        return setRotate(90);
      case '/about-me':
        return setRotate(180);
      case '/contact':
        return setRotate(270);
      default:
        return setRotate(0);
    }
  }, [location.pathname])

  return (
    <div className="app" id="top">
      <header>
        <Header />
      </header>
      <main className="container">
        <Photo />
        <div className="container_3d">
          <div
            className="cube-wrapper"
            style={{ transform: `translateZ(-${contentWidth / 2}px)` }}
          >
            <div
              ref={cubeRef}
              className="cube"
              style={{ transform: `rotateY(${rotate}deg) rotate3d(1, 1, 1, 0deg)` }}
            >
              <div className="side front" style={{ transform: `translateZ(${contentWidth / 2}px)` }}>
                <HomePage />
              </div>
              <div className="side right" style={{ transform: `rotateY(90deg) translateZ(${contentWidth / 2}px)` }}>
                <Contact />
              </div>
              <div className="side back" style={{ transform: `rotateY(180deg) translateZ(${contentWidth / 2}px)` }}>
                <AboutMe />
              </div>
              <div className="side left" style={{ transform: `rotateY(270deg) translateZ(${contentWidth / 2}px)` }}>
                <MyProjects />
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer />
    </div>
  );
};
