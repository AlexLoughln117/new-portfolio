import Link from 'next/link';
import AboutIntro from '../../components/AboutIntro';
import Footer from '../../components/Footer';
import styles from './page.module.css';

export const metadata = {
  title: 'About',
  description: 'Full-stack web developer turned digital director with 10 years building and delivering web projects.',
};

export default function AboutPage() {
  return (
    <div>
      <AboutIntro />

      {/* WHAT I DO NOW — full width band */}
      <section className={styles.nowSection}>
        <div className={styles.nowInner}>
          <h2>What I Do Now</h2>
          <p>I lead web development and digital delivery across a portfolio of 4&ndash;6 accounts at Drew+Rose, a full-service marketing agency in London. I&apos;m hands-on with code on key builds while running client relationships and co-ordinating teams across development, design and digital marketing.</p>
        </div>
      </section>

      {/* TIMELINE + CTA — two column */}
      <section className={styles.bottomSplit}>
        <div className={styles.timelineCol}>
          <h2>Career Timeline</h2>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineYear}>2025</div>
              <div className={styles.timelineRole}>Digital Director &amp; Senior Developer</div>
              <div className={styles.timelineCompany}>Drew+Rose &mdash; Web development, digital delivery, client relationships, team co-ordination</div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineYear}>2022</div>
              <div className={styles.timelineRole}>Senior Web Developer</div>
              <div className={styles.timelineCompany}>Drew+Rose &mdash; Team of 4, technical scoping, increasingly client-facing</div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineYear}>2021</div>
              <div className={styles.timelineRole}>Lead Web Developer</div>
              <div className={styles.timelineCompany}>Drew London &mdash; First team management role</div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineYear}>2018</div>
              <div className={styles.timelineRole}>Front End Web Developer</div>
              <div className={styles.timelineCompany}>Drew London &mdash; WordPress, Shopify, first client exposure</div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineYear}>2017</div>
              <div className={styles.timelineRole}>Front End Web Developer</div>
              <div className={styles.timelineCompany}>Govnet Communications &mdash; In-house team</div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineYear}>2016</div>
              <div className={styles.timelineRole}>Junior Front End Developer</div>
              <div className={styles.timelineCompany}>Vitamin London &mdash; First agency role</div>
            </div>
          </div>
        </div>
        <div className={styles.ctaCol}>
          <h2>Get in Touch</h2>
          <p>I&apos;m currently exploring new opportunities where I can combine technical delivery with client and account leadership. If you think I&apos;d be a good fit for your team, I&apos;d love to hear from you.</p>
          <div className={styles.ctaWrapper}>
            <Link href="/contact" className="btn btn-primary">Contact me</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
