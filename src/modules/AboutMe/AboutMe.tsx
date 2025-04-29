import { useLocation } from 'react-router-dom';
import s from './AboutMe.module.scss';
import { motion } from 'motion/react';
import { images } from './../../data/Data';

export const AboutMe = () => {
  const location = useLocation();

  const variantAnimation = {
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 1 + i * 0.1,
        duration: 1,
      }
    }),
    hidden: {
      opacity: 0,
      scale: 0,
      transition: {
        delay: 1
      }
    }
  }

  return (
    <div className={s.about}>
      <div className={s.about__title}>
        <h1>Про мене</h1>
      </div>
      <h2>
        Моя ціль — не просто писати код, а будувати продукти, якими зручно користуватися, які швидко працюють і виглядають естетично.
      </h2>

      <div className={s.about__block}>
        <p className={s.about__list_title}>Мої скіли:</p>
        <ul>
          <li>Мови: JavaScript, TypeScript, HTML5, CSS3, SCSS</li>
          <li>Фреймворки / Бібліотеки: React, Redux, React Router, TailwindCSS</li>
          <li>Інші технології: Webpack, Git, GitHub, REST API, i18next</li>
          <li>Інструменти: VS Code, Figma, Postman, Chrome DevTools</li>
        </ul>
        <div className={s.about__skills}>
          {Object.entries(images).map(([name, link], i) => (
            <motion.div
              key={i}
              className={s.about__skills_image}
              variants={variantAnimation}
              initial='hidden'
              animate={location.pathname === '/about-me' ? 'visible' : 'hidden'}
              custom={i}
            >
              <img src={link} alt={name} className={s[`about__skills_image_${name}`]} />
            </motion.div>
          ))}
        </div>
      </div>

      <div className={s.about__block}>
        <p className={s.about__list_title}>Підхід до роботи:</p>
        <ul>
          <li>Пишу чистий і структурований код, використовуючи компонентну архітектуру.</li>
          <li>Впроваджую адаптивну верстку, з урахуванням кросбраузерності.</li>
          <li>Застосовую принципи UI/UX для зручності користувачів.</li>
          <li>Працюю з інтернаціоналізацією (i18n), а також темами з використанням CSS-змінних і SCSS.</li>
        </ul>
      </div>

      <div className={s.about__block}>
        <p className={s.about__list_title}>Чим я пишаюсь:</p>
        <ul>
          <li>Створив повністю адаптивний інтернет-магазин з мультимовною підтримкою та анімаціями.</li>
          <li>Розробив гру “2048” з використанням нативного JavaScript та логікою обробки комбінацій.</li>
          <li>Побудував власне портфоліо з кастомним дизайном, темною темою та flip-анімаціями між розділами.</li>
        </ul>
      </div>

      <div className={s.about__block}>
        <p className={s.about__list_title}>Цілі на майбутнє:</p>
        <ul>
          <li>Поглибити знання у сфері React Native та Next.js</li>
          <li>Освоїти тестування (Jest / Cypress)</li>
          <li>Взяти участь у відкритих проєктах або волонтерській розробці</li>
        </ul>
      </div>
    </div>

  );
};
