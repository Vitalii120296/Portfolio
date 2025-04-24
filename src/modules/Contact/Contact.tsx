import { useState } from 'react';
import s from './Contact.module.scss';

export const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div className={s.contact}>
      <div className={s.contact__title}>
        Contacts:
      </div>
      <div className={s.contact__wrapper}>
        <div className={s.contacts}>
          <div className={s.contacts__mobile}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam nemo cumque architecto, suscipit assumenda non veritatis quaerat tempore cupiditate labore doloribus, iste velit rerum explicabo, nobis blanditiis et in nihil?
          </div>
          <div className={s.contacts__location}></div>
          <div className={s.contacts__email}></div>
          <div className={s.contacts__website}></div>
        </div>
        <form action="post" className={s.contact__form}>
          <label
            htmlFor="name"
            className={s.contact__label}
          >
            Ім‘я:
          </label>
          <input
            type="text"
            id="name"
            className={s.contact__input}
            onChange={(event) => setName(event.target.value)}
          />
          <label
            htmlFor="email"
            className={s.contact__label}
          >
            Емейл:
          </label>
          <input
            type="email"
            id="email"
            className={s.contact__input}
            onChange={(event) => setEmail(event.target.value)}
          />
          <label
            htmlFor="text"
            className={s.contact__label}
          >
            Текст:
          </label>
          <textarea
            id="text"
            className={s.contact__textarea}
            onChange={(event) => setMessage(event.target.value)}
          />
          <button type="submit" className={s.contact__submit}>
            Відправити
          </button>
        </form>
      </div>

    </div>
  );
}