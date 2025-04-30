import { useContext } from 'react';
import s from './BurgerMenu.module.scss';
import { BurgerContext } from '../../../../shared/context/BurgerContext';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import InfoOutlineIcon from '@mui/icons-material/InfoOutline';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import CloseIcon from '@mui/icons-material/Close';
import { useTranslation } from 'react-i18next';

export const BurgerMenu = () => {
  const { t } = useTranslation('Header'); 
  const { burgerMenuActivate, setBurgerMenuActivate } = useContext(BurgerContext);

  return (
    <div className={classNames(s.burger, {
      [s.active]: burgerMenuActivate,
    })}>
      <nav className={s.nav}>
        <div className={s.nav__close} onClick={() => setBurgerMenuActivate(prev => !prev)}>
          <CloseIcon />
        </div>
        <ul className={s.nav__list}>
          <li className={s.nav__item}>
            <NavLink
              to="/"
              className={s.nav__link}
              onClick={() => setBurgerMenuActivate(false)}
            >
              <HomeIcon fontSize='medium' className={s.nav__icons} />
              {t('Home')}
            </NavLink>
          </li>
          <li className={s.nav__item}>
            <NavLink
              to="projects"
              className={s.nav__link}
              onClick={() => setBurgerMenuActivate(false)}
            >
              <WorkIcon className={s.nav__icons} fontSize='small' />
              {t('Projects')}
            </NavLink>
          </li>
          <li className={s.nav__item}>
            <NavLink
              to="about-me"
              className={s.nav__link}
              onClick={() => setBurgerMenuActivate(false)}
            >
              <InfoOutlineIcon className={s.nav__icons} fontSize='small' />
              {t('About me')}
            </NavLink>
          </li>
          <li className={s.nav__item}>
            <NavLink
              to="contact"
              className={s.nav__link}
              onClick={() => setBurgerMenuActivate(false)}
            >
              <PermContactCalendarIcon className={s.nav__icons} fontSize='small' />
              {t('Contact')}
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};