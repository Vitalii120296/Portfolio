import { useEffect, useState } from 'react';
import s from './ProjectCard.module.scss';
import { Card } from '../../../types/card';
import { motion } from 'motion/react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function ProjectCard() {
  const [cards, setCards] = useState<Card[]>([]);
  const location = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    fetch(i18n.language === 'en' ? './api/projects_en.json' : './api/projects_uk.json')
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
  }, [i18n.language]);

  const variantAnimation = {
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 1 + i * 0.2,
        duration: 1,
      }
    }),
    hidden: {
      y: 100,
      opacity: 0,
      transition: {
        delay: 1,
      }
     }
  }

  return (
    <>
      {
        cards.map((card, i) => (
          <motion.div
            key={card.name}
            className={s.card}
            variants={variantAnimation}
            initial='hidden'
            animate={location.pathname === '/projects' ? 'visible' : 'hidden'}
            custom={i}
          >
            <a href={card.link} target='blank'>
              <div className={s.card__img}>
                <img src={card.img} alt={card.name} />
              </div>
            </a>
            <div className={s.card__name}>{card.name}</div>
            <div className={s.card__description}>{card.description}</div>
          </motion.div>
        ))
      }
    </>
  )
}
