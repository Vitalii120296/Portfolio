import { Link } from 'react-router-dom';
import s from './HomePage.module.scss';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

export const HomePage = () => {
  const { t } = useTranslation('HomePage');  // Use the translation namespace

  return (
    <div className={s.home_page}>
      <h1 className={s.home_page__title}>{t('home.title')}</h1>  {/* Translated title */}
      <h2>{t('home.intro')}</h2>  {/* Translated intro */}

      <motion.p
        initial={{
          opacity: 0,
          y: -20,
        }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.5,
            duration: 1,
          }
        }}
      >
        {t('home.description')}
      </motion.p>

      <motion.p
        initial={{
          opacity: 0,
          y: -20,
        }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 1,
            duration: 1,
          }
        }}
      >
        {t('home.focus')}
      </motion.p>

      <motion.p
        initial={{
          opacity: 0,
          y: -20,
        }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 1.5,
            duration: 1,
          }
        }}
      >
        {t('home.website_description')}
      </motion.p>

      <motion.div
        className={s.home_page__block}
        initial={{
          opacity: 0,
          y: -20,
        }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 2,
            duration: 1,
          }
        }}
      >
        <h3>{t('home.what_you_will_find')}</h3>
        <ul>
          <li><Link to="/projects">{t('home.projects')}</Link></li> 
          <li><Link to="/about-me">{t('home.about_me')}</Link></li>
          <li><Link to="/contact">{t('home.contacts')}</Link></li> 
        </ul>
      </motion.div>

      <motion.img
        src="img/person.svg"
        alt="person"
        className={s.home_page__picture}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: 1,
            delay: 2.5
          }
        }}
      />

      <p>
        {t('home.thank_you')}<br />
        {t('home.click_menu')}
      </p>
    </div>
  );
};
