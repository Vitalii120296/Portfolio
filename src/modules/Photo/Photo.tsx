import s from './Photo.module.scss';

export const Photo = () => {
  return (
    <div className={s.photo__wrapper}>
      <div className={(s.photo)}>
        <img src="img/photo/photo.png" alt="photo" />
      </div>
    </div>
  );
};