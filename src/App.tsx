import './App.scss';
import { Header } from './modules/Header/Header';
import { Photo } from './modules/Photo';
import { HomePage } from './modules/HomePage';
import { MyProjects } from './modules/MyProjects';
import { AboutMe } from './modules/AboutMe';
import { Contact } from './modules/Contact';
import { useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import Footer from './modules/Footer/Footer';

export const App = () => {
  const location = useLocation();
  const [rotate, setRotate] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);
  const [contentHeight, setContentHeight] = useState(0);
  const cubeRef = useRef<HTMLDivElement | null>(null);
  const homePageRef = useRef<HTMLDivElement | null>(null);
  const contactPageRef = useRef<HTMLDivElement | null>(null);
  const aboutPageRef = useRef<HTMLDivElement | null>(null);
  const projectsPageRef = useRef<HTMLDivElement | null>(null);

  const updateHeight = () => {
    let activePageRef: typeof homePageRef | null = null;

    switch (location.pathname) {
      case '/':
        activePageRef = homePageRef;
        break;
      case '/projects':
        activePageRef = projectsPageRef;
        break;
      case '/about-me':
        activePageRef = aboutPageRef;
        break;
      case '/contact':
        activePageRef = contactPageRef;
        break;
      default:
        activePageRef = homePageRef;
    }

    if (activePageRef?.current) {
      setContentHeight(activePageRef.current.offsetHeight);
    }
  };

  useEffect(() => {
    if (cubeRef.current) {
      setContentWidth(cubeRef.current.offsetWidth);
    }
    updateHeight();

    switch (location.pathname) {
      case '/':
        setRotate(0);
        break;
      case '/projects':
        setRotate(-90);
        break;
      case '/about-me':
        setRotate(-180);
        break;
      case '/contact':
        setRotate(-270);
        break;
      default:
        setRotate(0);
        break;
    }

  }, [location.pathname])

  useEffect(() => {
    const handleResize = () => updateHeight();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="app" id="top">
      <header>
        <Header />
      </header>
      <main className="container" style={{ height: `${contentHeight + 84}px`}}>
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
              <div
                ref={homePageRef}
                className="side front"
                style={{ transform: `translateZ(${contentWidth / 2}px)` }}
              >
                <HomePage />
              </div>
              <div
                ref={contactPageRef}
                className="side right"
                style={{ transform: `rotateY(-90deg) translateZ(${contentWidth / 2}px)` }}
              >
                <Contact />
              </div>
              <div
                ref={aboutPageRef}
                className="side back"
                style={{ transform: `rotateY(-180deg) translateZ(${contentWidth / 2}px)` }}
              >
                <AboutMe />
              </div>
              <div
                ref={projectsPageRef}
                className="side left"
                style={{ transform: `rotateY(-270deg) translateZ(${contentWidth / 2}px)` }}
              >
                <MyProjects />
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
