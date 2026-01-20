import ContactForm from './components/ContactForm';
import s from './Contact.module.scss';
import { useTranslation } from 'react-i18next';

export const Contact = () => {
  const { t } = useTranslation('Contact');

  return (
    <div className={s.contact}>
      <div className={s.contact__title}>
        <h1>{t('contact.title')}</h1>
      </div>
      <div className={s.contact__wrapper}>
        <div className={s.contacts}>
          <div className={s.contacts__links}>
            <div className={s.contacts__link}>
              <a
                href="https://github.com/Vitalii120296"
                target='_blank'
                rel="noopener noreferrer"
              >
                <img src="img/github-link.svg" alt="facebook" />
              </a>
            </div>
            <div className={s.contacts__link}>
              <a
                href="http://www.linkedin.com/in/vitalii-hulaievych-6a623b349"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="img/linkedin-link.svg" alt="linkedin" />
              </a>
            </div>
            <div className={s.contacts__link}>
              <a
                href="https://www.facebook.com/v.hulaievych"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="img/facebook-link.svg" alt="facebook" />
              </a>
            </div>
            <div className={s.contacts__link}>
              <a
                href="https://www.instagram.com/v.hulaievych/"
                target="_blank"
                rel="noopener noreferrer">
                <img src="img/instagram-link.svg" alt="instagram" />
              </a>
            </div>
            <div className={s.contacts__link}>
              <a href="mailto:v.hulaievych@gmail.com">
                <img src="img/gmail-link.svg" alt="gmail" />
              </a>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </div >
  );
};
