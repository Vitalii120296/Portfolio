import { useContext } from 'react';
import s from './BurgerMenu.module.scss';
import { BurgerContext } from '../../../../shared/context/BurgerContext';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

export const BurgerMenu = () => {
  const { burgerMenuActivate, setBurgerMenuActivate } = useContext(BurgerContext);

  return (
    <div className={classNames(s.burger, {
      [s.active]: burgerMenuActivate,
    })}>
      <nav className={s.nav}>
        <div className={s.nav__close} onClick={() => setBurgerMenuActivate(prev => !prev)}>
          <img src="img/icons/close.png" alt="close menu" />
        </div>
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