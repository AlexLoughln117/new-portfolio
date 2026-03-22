import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getAllCaseStudies, getCaseStudy } from '../../../data/caseStudies';
import Footer from '../../../components/Footer';
import styles from '../detail.module.css';

// Generate static pages for all case studies at build time
export async function generateStaticParams() {
  return getAllCaseStudies().map((cs) => ({ slug: cs.slug }));
}

// Dynamic metadata per case study
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return { title: 'Not Found' };
  return {
    title: `${cs.title} — Case Study`,
    description: cs.description,
  };
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  return (
    <div>
      <div className={styles.detail}>
        <Link href="/case-studies" className={styles.backLink}>← Back to case studies</Link>
        <h1 className={styles.title}>{cs.title}</h1>
        <p className={styles.client}>{cs.client}</p>

        {cs.detailImage && (
          <div className={styles.heroImage}>
            <Image src={cs.detailImage} alt={cs.title} width={760} height={428} priority />
          </div>
        )}

        <h2 className={styles.subheading}>Overview</h2>
        <p className={styles.body}>{cs.overview}</p>

        <h2 className={styles.subheading}>My Role</h2>
        <p className={styles.body}>{cs.role}</p>

        <h2 className={styles.subheading}>What I Delivered</h2>
        {cs.delivered.split('\n').map((paragraph, i) => (
          <p key={i} className={styles.body}>{paragraph}</p>
        ))}

        <h2 className={styles.subheading}>Results</h2>
        <div className={styles.resultGrid}>
          {cs.results.map((r, i) => (
            <div key={i} className={styles.resultItem}>
              <div className={styles.resultNum}>{r.num}</div>
              <div className={styles.resultLabel}>{r.label}</div>
            </div>
          ))}
        </div>

        {cs.testimonial && (
          <div className={styles.testimonial}>
            <blockquote className={styles.testimonialQuote}>
              &ldquo;{cs.testimonial.quote}&rdquo;
            </blockquote>
            <div className={styles.testimonialAttribution}>
              <span className={styles.testimonialName}>{cs.testimonial.name}</span>
              <span className={styles.testimonialTitle}>{cs.testimonial.title}, {cs.testimonial.company}</span>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
