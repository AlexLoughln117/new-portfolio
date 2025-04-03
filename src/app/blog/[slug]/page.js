// src/app/blog/[slug]/page.js

import { notFound } from 'next/navigation';
// Make sure this import path is correct for your structure
import { getAllPostSlugs, getPostData } from '../../../lib/posts';
import { MDXRemote } from 'next-mdx-remote/rsc';
import styles from './page.module.css';

// --- Generate Static Params ---
// Ensure this function exists and is EXPORTED and ASYNC
export async function generateStaticParams() {
  // Get the array of { params: { slug: '...' } } objects
  const paths = getAllPostSlugs();

  // Log for debugging during build (optional)
  console.log('[generateStaticParams] Returning paths:', JSON.stringify(paths, null, 2));

  // Return the array
  return paths;
}

// --- Generate Metadata ---
// Ensure this function is also exported if you use it
export async function generateMetadata({ params }) {
  const postData = getPostData(params.slug);

  if (!postData) {
    return {
      title: 'Post Not Found'
    }
  }
  return {
    title: postData.frontMatter.title,
    description: postData.frontMatter.excerpt,
  };
}


// --- Page Component ---
// Ensure this is the default export
export default async function PostPage({ params }) {
  const { slug } = params;
  const postData = getPostData(slug);

  if (!postData) {
    notFound();
  }

  const { frontMatter, content } = postData;

  return (
    <article className={styles.postContainer}>
      <header className={styles.postHeader}>
        <h1 className={styles.postTitle}>{frontMatter.title}</h1>
        <div className={styles.postMeta}>
          Published on: {new Date(frontMatter.date).toLocaleDateString('en-GB', {
            year: 'numeric', month: 'long', day: 'numeric'
          })}
          {frontMatter.author && <span> by {frontMatter.author}</span>}
        </div>
      </header>
      <div className={styles.postContent}>
        <MDXRemote source={content} />
      </div>
    </article>
  );
}
