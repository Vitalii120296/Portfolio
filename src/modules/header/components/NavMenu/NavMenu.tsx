import { NavLink } from 'react-router-dom';
import s from './NavMenu.module.scss';
import { useContext } from 'react';
import { BurgerContext } from '../../../../shared/context/BurgerContext';
import classNames from 'classnames';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import InfoOutlineIcon from '@mui/icons-material/InfoOutline';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import { Logo } from '../../../../shared/Logo';
import { useTranslation } from 'react-i18next';
import MenuIcon from '@mui/icons-material/Menu';



export const NavMenu = () => {
  const { burgerMenuActivate, setBurgerMenuActivate } = useContext(BurgerContext);
  const toggleBurgerMenu = () => setBurgerMenuActivate(prev => !prev);
  const { t } = useTranslation('Header');

const getLinkClass = ({isActive}: {isActive: boolean}) => classNames(s.nav__link, {
    [s.isActive]: isActive,
  });

  return (
    <div className={classNames(s.nav__wrapper, "container")}>
      <Logo />
      <nav className={s.nav}>
        <ul className={s.nav__list}>
          <li className={s.nav__item}>
            <NavLink to="/" className={getLinkClass}>
              <HomeIcon fontSize='medium' className={s.nav__icons} />
              {t('Home')}
            </NavLink>
          </li>
          <li className={s.nav__item}>
            <NavLink to="projects" className={getLinkClass}>
              <WorkIcon className={s.nav__icons} fontSize='small' />
              {t('Projects')}
            </NavLink>
          </li>
          <li className={s.nav__item}>
            <NavLink to="about-me" className={getLinkClass}>
              <InfoOutlineIcon className={s.nav__icons} fontSize='small' />
              {t('About me')}
            </NavLink>
          </li>
          <li className={s.nav__item}>
            <NavLink to="contact" className={getLinkClass}>
              <PermContactCalendarIcon className={s.nav__icons} fontSize='small' />
              {t('Contact')}
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
        <MenuIcon fontSize='medium' className={s.nav__icons}/>
      </div>
    </div>
  );
};