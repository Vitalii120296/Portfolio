import { useEffect, useState } from 'react';
import s from './ProjectCard.module.scss';
import { Card } from '../../../types/card';

export default function ProjectCard() {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    fetch('./api/projects.json')
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('Failed to fetch projects')
      })
      .then((data: Card[]) => {
        setCards(data);
      })
      .catch(error => {
        throw error;
      })
  }, []);

  return (
    <>
      {
        cards.map(card => (
          <div className={s.card}>
            <a href={card.link} target='blank'>
              <div className={s.card__img}>
                <img src={card.img} alt={card.name} />
              </div>
            </a>
            <div className={s.card__name}>{card.name}</div>
            <div className={s.card__description}>{card.description}</div>
          </div>
        ))
      }
    </>
  )
}
