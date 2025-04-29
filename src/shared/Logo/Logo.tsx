import { Link } from 'react-router-dom';
import s from './Logo.module.scss';

export const Logo = () => {
  const logoText = "<\u00A0Hulaievych\u00A0/>";

  return (
    <div className={s.logo}>
      <Link to={'/'}>
        {logoText.split('').map((letter, index) => (
          <span key={index} style={{ animationDelay: `${index * 0.05}s` }}>
            {letter}
          </span>
        ))}
      </Link>
    </div>
  );
};