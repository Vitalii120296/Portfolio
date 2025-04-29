import { Link } from 'react-router-dom';
import s from './HomePage.module.scss';
import { motion } from 'motion/react';

export const HomePage = () => {
  return (
    <div className={s.home_page}>
      <h1 className={s.home_page__title}>Вітаю на моєму портфоліо!</h1>
      <h2>
        Мене звати Віталій, я — Frontend-розробник, який створює сучасні, інтуїтивні та естетичні інтерфейси.
      </h2>
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
        Я поєдную технічні знання з креативним баченням, щоб розробляти веб-додатки, які не тільки виглядають добре, а й працюють швидко та зручно.
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
        Мій фокус — розробка адаптивних SPA (single-page applications), інтеграція з API, підтримка тем (світла/темна), кастомні UI-компоненти та підтримка мультимовності (i18n). У своїх проєктах я активно використовую React, TypeScript, SCSS, Git та інші сучасні технології.
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
        Цей сайт — не просто онлайн-візитка. Це демонстрація моїх навичок, уваги до деталей, а також підхід до користувацького досвіду. Кожен розділ, кожна анімація, кожен проєкт — це відображення мого стилю як розробника.<br />
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
        <h3>Що ви знайдете на цьому сайті:</h3>
        <ul>
          <li><Link to="/projects">Мої проєкти:</Link> приклади реальних задач, які я вирішував — від гри до онлайн-магазину</li>
          <li><Link to="/about-me">Про мене:</Link> хто я, які навички маю, мій підхід до роботи</li>
          <li><Link to="/contact">Контакти:</Link> де мене знайти, якщо хочете співпрацювати або просто поспілкуватися</li>
        </ul>
      </motion.div>
      <motion.img
        src="img/person.svg"
        alt="person"
        className={s.home_page__picture}
        initial={{opacity: 0}}
        animate={{
          opacity: 1,
          transition: {
            duration:1,
            delay: 2.5
          }
        }}
      />
      <p>
        Дякую, що завітали!<br />
        Натисніть на будь-який пункт меню зверху, щоб дізнатися більше.
      </p>
    </div>
  );
};
