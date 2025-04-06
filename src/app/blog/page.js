// src/app/blog/page.js
import Link from 'next/link';
import { getSortedPostsData } from '../../lib/posts'; // Adjust path if needed
import PageBanner from '@/components/PageBanner'; // Reuse the banner
import styles from './page.module.css';

export const metadata = {
  title: 'My Blog', // Set your desired blog title
};

// This is a Server Component
export default function BlogIndexPage() {
  // Fetch metadata for all posts at build time / server side
  // Note: getSortedPostsData uses sync fs methods, so page doesn't strictly need 'async'
  // but keeping it async is fine for consistency with Server Components pattern.
  const allPostsData = getSortedPostsData();

  return (
    <>
      <PageBanner
        title="Blog"
        subtitle="Thoughts, musings, and updates."
      />

      <div className={styles.blogContainer}>
        <section className={styles.postsList}>
          {allPostsData && allPostsData.length > 0 ? (
            allPostsData.map(({ slug, date, title, excerpt }) => (
              <article key={slug} className={styles.postItem}>
                <h2 className={styles.postTitle}>
                  <Link href={`/blog/${slug}`}>{title}</Link>
                </h2>
                <div className={styles.postMeta}>
                  Published on: {new Date(date).toLocaleDateString('en-GB', {
                    year: 'numeric', month: 'long', day: 'numeric'
                  })}
                </div>
                <p className={styles.postExcerpt}>{excerpt}</p>
                <Link href={`/blog/${slug}`} className={styles.readMore}>
                  Read More &rarr;
                </Link>
              </article>
            ))
          ) : (
            <p>No blog posts published yet.</p>
          )}
        </section>
      </div>
    </>
  );
}

