import Footer from '../../components/Footer';
import styles from './page.module.css';

export const metadata = {
  title: 'Contact',
  description: 'Get in touch with Alex Loughlin — open to new opportunities in client and project leadership.',
};

export default function ContactPage() {
  return (
    <div>
      <div className={styles.contactPage}>
        <div className={styles.contactContent}>
          <h1>Get in touch</h1>
          <p>I&apos;m currently open to new opportunities in client and project leadership at digital agencies or in-house. Whether you have a specific role in mind or just want to have a conversation, I&apos;d love to hear from you.</p>

          <a className={styles.contactItem} href="mailto:aloughlin711@gmail.com">
            <span className={styles.contactIcon}>&#x2709;</span>
            <div className={styles.contactDetails}>
              <div className={styles.contactLabel}>Email</div>
              <div className={styles.contactValue}>aloughlin711@gmail.com</div>
            </div>
          </a>

          <a className={styles.contactItem} href="https://www.linkedin.com/in/alex-loughlin-806626124/" target="_blank" rel="noopener noreferrer">
            <span className={styles.contactIcon}>in</span>
            <div className={styles.contactDetails}>
              <div className={styles.contactLabel}>LinkedIn</div>
              <div className={styles.contactValue}>Alex Loughlin</div>
            </div>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
