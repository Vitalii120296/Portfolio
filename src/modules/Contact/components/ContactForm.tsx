import s from './ContactForm.module.scss';
import React, { useState } from 'react'

const TELEGRAM_BOT_TOKEN = '7749578552:AAGwc9bqAOsFrQ9NdMpyJf3EZ5M0KmdNG30';
const TELEGRAM_CHAT_ID = '1125974852';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setError(null); // Очищаємо попередні помилки

    const text = `
<b>📬 Нове повідомлення з сайту</b>
👤 <b>Ім’я:</b> ${name}
📧 <b>Email:</b> ${email}
📝 <b>Повідомлення:</b> ${message}
    `;

    try {
      const res = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text,
          parse_mode: 'HTML',
        }),
      });

      if (res.ok) {
        setSuccess(true);
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setError('Помилка при відправці. Спробуй ще раз.');
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setError('Помилка з’єднання. Спробуй ще раз.');
    } finally {
      setIsSending(false);
    }
  };


  return (
    <form onSubmit={handleSubmit} className={s.contact__form}>
          <label htmlFor="name" className={s.contact__label}>Ім‘я: 🧑</label>
          <input
            type="text"
            id="name"
            className={s.contact__input}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="email" className={s.contact__label}>Емейл: 📧</label>
          <input
            type="email"
            id="email"
            className={s.contact__input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="text" className={s.contact__label}>Текст: 📝</label>
          <textarea
            id="text"
            className={s.contact__textarea}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            style={{ resize: 'none' }}
          />

          <button type="submit" className={s.contact__submit} disabled={isSending}>
            {isSending ? 'Відправка...' : 'Відправити'}
          </button>

          {error && <div className={s.contact__error}>{error}</div>}
        </form>
  )
}
