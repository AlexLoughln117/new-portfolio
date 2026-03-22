import Link from 'next/link';
import { hero } from '../data/homepage';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          {hero.headline}<br />
          <span className={styles.heroAccent}>{hero.headlineAccent}</span>
        </h1>
        <p className={styles.subtitle}>{hero.subtitle}</p>
        <p className={styles.intro}>
          {hero.intro.map((line, i) => (
            <span key={i}>
              {i > 0 && <br />}
              {line}
            </span>
          ))}
        </p>
        <div className={styles.ctaGroup}>
          {hero.ctas.map((cta) => (
            <Link key={cta.href} href={cta.href} className={`btn btn-${cta.style}`}>
              {cta.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
