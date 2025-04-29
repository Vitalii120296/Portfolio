import { Link } from 'react-router-dom';
import s from './Photo.module.scss';

export const Photo = () => {
  return (
    <div className={s.photo__wrapper}>
      <div className={(s.photo)}>
        <Link to={'/about-me'}>
          <img src="img/photo/photo.png" alt="photo" />
        </Link>
      </div>
    </div>
  );
};