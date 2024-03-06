import { useState } from 'react';
import ContactCode from '../components/ContactCode';
import styles from '../styles/ContactPage.module.css';
import axios from 'axios';
import SkillCard from '../components/SkillCard';
import styles2 from "../styles/ContactCode.module.css";

const contactItems = [
  {
    id: 1,
    title: "Languages",
    skills: [" C / C++", " Javascript", " Python", " SQL"],
  },
  {
    id: 2,
    title: "Developer Tools",
    skills: ["Git & GitHub", "VS Code", "Jupiter Notebook", "Colab"],
  },
  {
    id: 3,
    title: "frontend Development",
    skills: [
      "ReactJs",
      "React Native",
      "NextJs",
      "Tailwindcss",
      "Bootstrap",
      "HTML",
      "CSS",
    ],
  },
  {
    id: 4,
    title: "Backend Development",
    skills: ["NodeJs", "ExpressJs", "MongoDB"],
  },
  {
    id: 5,
    title: "Machine Learning",
    skills: ["Machine Learning", "Deep Learning","TensorFlow", "Keras", "NLP", "Stable diffusion"],
  },
  {
    id: 6,
    title: "Programming",
    skills: ["Data Structures & Algorithms"],
  },
  {
    id: 7,
    title: "Cloud Services",
    skills: ["AWS"],
  },
  {
    id: 8,
    title: "DevOps",
    skills: ["Docker", "Kubernetes"],
  },
];

const SkillPage = () => {



  return (
    <div className={styles.container}>
      <div>
        <h3 className={styles.heading}>Skills</h3>
        <div className={styles2.code}>
          <p className={styles2.line}>[</p>
          <p className={styles2.line}>&nbsp;&#123;</p>

          {contactItems.map((item) => (
            <SkillCard key={item.id} item={item} />
          ))}
          <p className={styles2.line}>&nbsp;&#125;</p>

          <p className={styles2.line}>]</p>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Skill' },
  };
}

export default SkillPage;
