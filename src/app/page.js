import Link from 'next/link';
// Import the CSS module for styling this page.
// Make sure you create this file: src/app/page.module.css
import styles from './page.module.css';
import RecentBlogs from '../components/RecentBlogs'; // Adjust path if needed

export default function HomePage() {
  return (
    // Use the className from the CSS module for the main container
    <div className={styles.ctnHome}>

        <div className={styles.articleIntro}>
          <div className={styles.homeIntro}>
            <h2>Hi, I&apos;m Alex Loughlin</h2>
            <h3>
            A Senior Web Developer with nearly 10 years of experience, specialising in
              bridging technical development with client and project management.
              With my unique experience, I can help bring efficiency and speed to any
              digital team.</h3><br></br>
            <h3>
              I have experience working with digital agencies and in-house teams, currently working for Drew+Rose as their Lead Developer.
            </h3><br></br>
            <h3>I have experience working with WordPress, Shopify, PHP, Next.JS and front-end web technologies.</h3>
            <div className={styles.socialLinks}>
            <Link href="/blog">
                Work+Blog
              </Link>
              <Link href="https://www.linkedin.com/in/alex-loughlin-806626124/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </Link>
            </div>
            {/* <h3 className={styles.homeIntroLink}>
              See Work &gt; {}
            </h3> */}
          </div>
        </div>
    

      {/* <RecentBlogs /> */}

    </div>
  );
}