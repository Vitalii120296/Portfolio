import { BurgerMenu } from './components/BurgerMenu';
import { NavMenu } from './components/NavMenu';
import s from './Header.module.scss';

export const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.nav__wrapper}>
        <NavMenu />
      </div>
      <BurgerMenu />
    </div>
  );
}