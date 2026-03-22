import Link from 'next/link';
import Image from 'next/image';
import { getAllCaseStudies } from '../data/caseStudies';
import styles from './CaseStudyCards.module.css';

export default function CaseStudyCards({ limit }) {
  const allCaseStudies = getAllCaseStudies();
  const caseStudies = limit ? allCaseStudies.slice(0, limit) : allCaseStudies;

  return (
    <div>
      <div className={styles.csCards}>
        {caseStudies.map((cs) => (
          <Link key={cs.slug} href={`/case-studies/${cs.slug}`} className={styles.csCard}>
            {cs.cardImage ? (
              <div className={styles.csThumbImg}>
                <Image src={cs.cardImage} alt={cs.title} fill style={{ objectFit: 'cover' }} />
              </div>
            ) : (
              <div className={`${styles.csThumb} ${styles[cs.gradientClass]}`}>
                {cs.title.split('—')[0].trim()}
              </div>
            )}
            <div className={styles.csCardBody}>
              <span className={styles.csTag}>{cs.tag}</span>
              <h3>{cs.title}</h3>
              <p>{cs.description}</p>
              <span className={styles.csArrow}>View case study →</span>
            </div>
          </Link>
        ))}
      </div>
      {limit && allCaseStudies.length > limit && (
        <div className={styles.viewMore}>
          <Link href="/case-studies" className="btn btn-secondary">View more work →</Link>
        </div>
      )}
    </div>
  );
}
