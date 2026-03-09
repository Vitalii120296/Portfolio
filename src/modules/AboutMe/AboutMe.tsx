import { useLocation } from "react-router-dom";
import s from "./AboutMe.module.scss";
import { motion } from "motion/react";
import { images } from "./../../data/Data";
import { useTranslation } from "react-i18next";

export const AboutMe = () => {
  const location = useLocation();
  const { t } = useTranslation("About");
  const skills = t("about.skills_list", { returnObjects: true }) as Record<
    string,
    string
  >;
  const proudList = t("about.proud_list", { returnObjects: true }) as Record<
    string,
    string
  >;

  const variantAnimation = {
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 1 + i * 0.1,
        duration: 1,
      },
    }),
    hidden: {
      opacity: 0,
      scale: 0,
      transition: {
        delay: 1,
      },
    },
  };

  return (
    <div className={s.about}>
      <div className={s.about__title}>
        <h1>{t("about.title")}</h1>
      </div>
      <h2>{t("about.goal")}</h2>

      <div className={s.about__block}>
        <p className={s.about__list_title}>{t("about.skills_title")}</p>
        <ul>
          {Object.entries(skills).map(([key, value]) => (
            <li key={key}>{value}</li>
          ))}
        </ul>
        <div className={s.about__skills}>
          {Object.entries(images).map(([name, link], i) => (
            <motion.div
              key={i}
              className={s.about__skills_image}
              variants={variantAnimation}
              initial="hidden"
              animate={location.pathname === "/about-me" ? "visible" : "hidden"}
              custom={i}
            >
              <img
                src={link}
                alt={name}
                className={s[`about__skills_image_${name}`]}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <div className={s.about__block}>
        <p className={s.about__list_title}>{t("about.approach_title")}</p>
        <ul>
          <li>{t("about.approach_list.clean_code")}.</li>
          <li>{t("about.approach_list.responsive_layout")}.</li>
          <li>{t("about.approach_list.ui_ux")}.</li>
          <li>{t("about.approach_list.i18n_themes")}.</li>
        </ul>
      </div>

      <div className={s.about__block}>
        <p className={s.about__list_title}>{t("about.proud_title")}</p>
        <ul>
          {Object.entries(proudList).map(([key, value]) => (
            <li key={key}>{value}</li>
          ))}
        </ul>
      </div>

      <div className={s.about__block}>
        <p className={s.about__list_title}>{t("about.future_goals_title")}</p>
        <ul>
          <li>{t("about.future_goals_list.react_native_next_js")}</li>
          <li>{t("about.future_goals_list.open_source")}</li>
        </ul>
      </div>
    </div>
  );
};
