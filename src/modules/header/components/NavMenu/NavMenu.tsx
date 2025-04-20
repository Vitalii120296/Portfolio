import { NavLink } from 'react-router-dom';
import s from './NavMenu.module.scss';

export const NavMenu = () => {
  return (
    <div className={s.nav__wrapper}>
      <nav className={s.nav}>
        <ul className={s.nav__list}>
          <li className={s.nav__item}>
            <NavLink to="/" className={s.nav__link}>
              Home
            </NavLink>
          </li>
          <li className={s.nav__item}>
            <NavLink to="/" className={s.nav__link}>
              My projects
            </NavLink>
          </li>
          <li className={s.nav__item}>
            <NavLink to="/" className={s.nav__link}>
              About me
            </NavLink>
          </li>
          <li className={s.nav__item}>
            <NavLink to="/" className={s.nav__link}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};