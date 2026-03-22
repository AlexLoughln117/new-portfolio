import { whatIDo } from '../data/homepage';
import styles from './WhatIDo.module.css';

export default function WhatIDo() {
  return (
    <section className={styles.section}>
      <div className="container">
        <p className={styles.sectionLabel}>{whatIDo.label}</p>
        <h2 className={styles.sectionHeading}>{whatIDo.heading}</h2>
        <div className={styles.cards}>
          {whatIDo.pillars.map((pillar) => (
            <div key={pillar.title} className={styles.card}>
              <div className={styles.cardIcon}>{pillar.icon}</div>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
