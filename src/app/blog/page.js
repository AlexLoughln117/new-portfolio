// src/app/blog/page.js
import Link from 'next/link';
import { getSortedPostsData } from '../../lib/posts';
import PageBanner from '@/components/PageBanner';
import BlogPostsClient from '@/components/BlogPostsClient';
import styles from './page.module.css';

export const metadata = {
  title: 'My Blog',
  description: 'Thoughts, musings, and updates on various topics.',
};

// This remains a Server Component
// It now accepts searchParams to read URL query parameters
export default function BlogIndexPage({ searchParams }) {
  const allPostsData = getSortedPostsData();

  const allTags = allPostsData
    .map(post => post.tag)
    .filter(tag => tag);
  const uniqueTags = [...new Set(allTags)];

  // Get the initial tag from URL query params, e.g., /blog?tag=Work
  const initialSelectedTag = searchParams?.tag || null;

  return (
    <>
      <PageBanner
        title="Blog"
        subtitle="Thoughts, musings, and updates."
      />
      <div className={styles.blogContainer}>
        <BlogPostsClient
          initialPosts={allPostsData}
          tags={uniqueTags}
          initialSelectedTag={initialSelectedTag} // Pass the tag from URL
        />
      </div>
    </>
  );
}