import Hero from '../components/Hero';
import WhatIDo from '../components/WhatIDo';
import Stats from '../components/Stats';
import CaseStudyCards from '../components/CaseStudyCards';
import AboutIntro from '../components/AboutIntro';
import Footer from '../components/Footer';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <WhatIDo />
      <Stats />

      {/* CASE STUDY PREVIEWS */}
      <section className={styles.section}>
        <div className="container">
          <p className={styles.sectionLabel}>Selected Work</p>
          <h2 className={styles.sectionHeading}>Case studies</h2>
          <CaseStudyCards limit={4} />
        </div>
      </section>

      <AboutIntro showCta />

      <Footer />
    </div>
  );
}
