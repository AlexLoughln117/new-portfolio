import Link from 'next/link';
import Image from 'next/image';
import { aboutIntro } from '../data/homepage';
import styles from './AboutIntro.module.css';

export default function AboutIntro({ showCta }) {
  return (
    <section className={styles.aboutSplit}>
      <div className={styles.aboutImage}>
        <Image
          src={aboutIntro.image}
          alt="Alex Loughlin"
          width={400}
          height={500}
          className={styles.headshot}
        />
      </div>
      <div className={styles.aboutText}>
        <h2 className={styles.heading}>{aboutIntro.heading}</h2>
        {aboutIntro.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        {showCta && (
          <div className={styles.ctaWrapper}>
            <Link href="/about" className="btn btn-secondary">Learn more →</Link>
          </div>
        )}
      </div>
    </section>
  );
}
