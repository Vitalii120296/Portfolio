import { Link } from 'react-router-dom';
import s from './Photo.module.scss';
import { useTranslation } from 'react-i18next';
import useTheme from '../../hooks/useTheme';
import classNames from 'classnames';

export const Photo = () => {
  const { t, i18n } = useTranslation('Header');
  const [theme, setTheme] = useTheme();

  return (
    <div className={s.photo__wrapper}>
      <div className={(s.photo)}>
        <Link to={'/about-me'}>
          <img src="img/photo/photo.png" alt="photo" />
        </Link>
      </div>
      <div className={s.photo__menu}>
        <div className={s.photo__menu_item}>
          <span>{t('Languages')}</span>
          <ul>
            <li
              className={classNames({
                [s.isActive]: i18n.language === 'en',
              })}
              onClick={() => i18n.changeLanguage('en')}
            >
              English
            </li>
            <li
              className={classNames({
                [s.isActive]: i18n.language === 'uk',
              })}
              onClick={() => i18n.changeLanguage('uk')}
            >
              Українська
            </li>
          </ul>
        </div>
        <div className={s.photo__menu_item}>
          <span>Theme:</span>
          <ul>
            <li
              className={classNames({
                [s.isActive]: theme === 'dark',
              })}
              onClick={() => setTheme('dark')}
            >
              Dark
            </li>
            <li
              className={classNames({
                [s.isActive]: theme === 'light',
              })}
              onClick={() => setTheme('light')}
            >
              Light
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};