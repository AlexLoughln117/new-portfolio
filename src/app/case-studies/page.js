import styles from './page.module.css';
import CaseStudyCards from '../../components/CaseStudyCards';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Case Studies',
  description: 'Selected work from my career in client management, project delivery, and performance marketing.',
};

export default function CaseStudiesPage() {
  return (
    <div>
      <div className={styles.container}>
        <p className={styles.sectionLabel}>Case Studies</p>
        <h2 className={styles.sectionHeading}>Selected work</h2>
        <CaseStudyCards />
      </div>
      <Footer />
    </div>
  );
}
