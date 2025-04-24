import { NavLink } from 'react-router-dom';
import s from './NavMenu.module.scss';
import { useContext } from 'react';
import { BurgerContext } from '../../../../shared/context/BurgerContext';
import classNames from 'classnames';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import InfoOutlineIcon from '@mui/icons-material/InfoOutline';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';


export const NavMenu = () => {
  const { burgerMenuActivate, setBurgerMenuActivate } = useContext(BurgerContext);

  const toggleBurgerMenu = () => setBurgerMenuActivate(prev => !prev)
  return (
    <div className={classNames(s.nav__wrapper, "container")}>
      <nav className={s.nav}>
        {/* <div className={s.nav__logo}>
          <img src="img/logo.png" alt="" />
        </div> */}
        <ul className={s.nav__list}>
          <li className={s.nav__item}>
            <NavLink to="/" className={s.nav__link}>
              <HomeIcon fontSize='medium' className={s.nav__icons} />
              Home
            </NavLink>
          </li>
          <li className={s.nav__item}>
            <NavLink to="projects" className={s.nav__link}>
              <WorkIcon className={s.nav__icons} fontSize='small' />
              Projects
            </NavLink>
          </li>
          <li className={s.nav__item}>
            <NavLink to="about-me" className={s.nav__link}>
              <InfoOutlineIcon className={s.nav__icons} fontSize='small' />
              About me
            </NavLink>
          </li>
          <li className={s.nav__item}>
            <NavLink to="contact" className={s.nav__link}>
              <PermContactCalendarIcon className={s.nav__icons} fontSize='small' />
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <div
        className={classNames(s.nav__burger_icon, {
          [s.isActive]: burgerMenuActivate,
        })}
        onClick={toggleBurgerMenu}
      >
        <img src="img/icons/burgerMenu.png" alt="menu" />
      </div>
    </div>
  );
};