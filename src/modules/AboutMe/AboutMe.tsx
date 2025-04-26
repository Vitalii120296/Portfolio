import s from './AboutMe.module.scss';

export const AboutMe = () => {
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
          <div className={s.about__skills_image}>
            <img src="img/languages/react.png" alt="react" className={s.about__skills_image_react} />
          </div>
          <div className={s.about__skills_image}>
            <img src="img/languages/typescript.svg" alt="typescript" />
          </div>
          <div className={s.about__skills_image}>
            <img src="img/languages/javascript.svg" alt="javascript" />
          </div>
          <div className={s.about__skills_image}>
            <img src="img/languages/html5.svg" alt="html5" />
          </div>
          <div className={s.about__skills_image}>
            <img src="img/languages/css.svg" alt="css" />
          </div>
          <div className={s.about__skills_image}>
            <img src="img/languages/sass.svg" alt="sass" />
          </div>
          <div className={s.about__skills_image}>
            <img src="img/languages/redux.svg" alt="redux" />
          </div>
          <div className={s.about__skills_image}>
            <img src="img/languages/reactrouter.svg" alt="react router" className={s.about__skills_image_reactrouter} />
          </div>
          <div className={s.about__skills_image}>
            <img src="img/languages/tailwindcss.svg" alt="tailwind css" className={s.about__skills_image_tailwindcss}/>
          </div>
          <div className={s.about__skills_image}>
            <img src="img/languages/webpack.svg" alt="webpack" className={s.about__skills_image_webpack}/>
          </div>
          <div className={s.about__skills_image}>
            <img src="img/languages/git.svg" alt="git" />
          </div>
          <div className={s.about__skills_image}>
            <img src="img/languages/github.svg" alt="github" className={s.about__skills_image_github}/>
          </div>
          <div className={s.about__skills_image}>
            <img src="img/languages/i18next.svg" alt="i18next"/>
          </div>
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
