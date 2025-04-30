import { Link } from 'react-router-dom';
import s from './Photo.module.scss';
import { useTranslation } from 'react-i18next';

export const Photo = () => {
  const { t, i18n } = useTranslation('Header');
  return (
    <div className={s.photo__wrapper}>
      <div className={(s.photo)}>
        <Link to={'/about-me'}>
          <img src="img/photo/photo.png" alt="photo" />
        </Link>
      </div>
      <div className={s.photo__menu}>
        <div className={s.photo__menu_languages}>
          <span>{t('Languages')}</span>
          <ul>
            <li onClick={() => i18n.changeLanguage('en')}>English</li>
            <li onClick={() => i18n.changeLanguage('uk')}>Українська</li>
          </ul>
        </div>
        <div style={{ padding: "15px 15px"}}>
          rscsrcscs
        </div>
      </div>
    </div>
  );
};