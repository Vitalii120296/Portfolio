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
              <img src="img/github-link.svg" alt="facebook" />
            </div>
            <div className={s.contacts__link}>
              <img src="img/linkedin-link.svg" alt="linkedin" />
            </div>
            <div className={s.contacts__link}>
              <img src="img/facebook-link.svg" alt="facebook" />
            </div>
            <div className={s.contacts__link}>
              <img src="img/instagram-link.svg" alt="instagram" />
            </div>
            <div className={s.contacts__link}>
              <img src="img/gmail-link.svg" alt="gmail" />
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};
