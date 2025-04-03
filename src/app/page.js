import Link from 'next/link';
// Import the CSS module for styling this page.
// Make sure you create this file: src/app/page.module.css
import styles from './page.module.css';

export default function HomePage() {
  return (
    // Use the className from the CSS module for the main container
    <div className={styles.ctnHome}>

      {/* Wrap the entire clickable intro area with the Next.js Link component */}
      {/* The 'href' prop defines the destination URL */}
      {/* <Link href="/category/work" className={styles.introLinkWrapper}> */}

        {/* Use classNames for styling elements */}
        <div className={styles.articleIntro}>
          <div className={styles.homeIntro}>
            <h2>Hi, I&apos;m Alex Loughlin</h2>
            <h3>
              A web developer with 10 years of experience in building and maintaining
              beautiful and forward-thinking websites. I have worked with
              digital agencies and in-house teams, currently working for Drew+Rose as their Lead Developer.
            </h3><br></br>
            <h3>Experience working with WordPress, Shopify, PHP, Next.JS and front-end web technologies.</h3>
            <div className={styles.socialLinks}>
              <Link href="https://www.linkedin.com/in/alex-loughlin-806626124/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </Link>
            </div>
            {/* Apply specific styling to the link text if desired */}
            {/* <h3 className={styles.homeIntroLink}>
              See Work &gt; {}
            </h3> */}
          </div>
        </div>
      {/* </Link> */}

      {/* You can add back other sections (like blog, books) here later */}
      {/* Example: */}
      {/* <div className={styles.someOtherSection}> */}
      {/* <h2>Other Content</h2> */}
      {/* </div> */}

    </div>
  );
}