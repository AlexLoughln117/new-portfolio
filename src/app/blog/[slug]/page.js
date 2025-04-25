// src/app/blog/[slug]/page.js

import { notFound } from 'next/navigation';
// Make sure this import path is correct for your structure
import { getAllPostSlugs, getPostData } from '../../../lib/posts'; // Ensure paths are correct
import { MDXRemote } from 'next-mdx-remote/rsc'; // Using RSC version
import Image from 'next/image'; // <-- 1. Import the Image component
import styles from './page.module.css'; // Ensure this CSS module exists and is styled

// --- Generate Static Params ---
// Ensure this function exists and is EXPORTED and ASYNC
export async function generateStaticParams() {
  // Get the array of { params: { slug: '...' } } objects
  const paths = getAllPostSlugs();
  console.log('[generateStaticParams] Returning paths:', JSON.stringify(paths, null, 2));
  return paths;
}

// --- Generate Metadata ---
// Ensure this function is also exported if you use it
export async function generateMetadata({ params }) {
  const postData = getPostData(params.slug); // Use getPostData, not getPost

  if (!postData) {
    return {
      title: 'Post Not Found'
    }
  }
  // Make sure frontMatter exists and has the title/excerpt properties
  return {
    title: postData.frontMatter?.title || 'Blog Post',
    description: postData.frontMatter?.excerpt || 'An interesting blog post.',
  };
}

// --- Define Components for MDX ---
// 2. Create an object mapping tag names used in MDX to the components
const components = {
  Image, // Make the imported Image component available to MDX
  // Add any other custom components you want to use in MDX here
  // e.g., CustomButton: MyButtonComponent,
};


// --- Page Component ---
// Ensure this is the default export
export default async function PostPage({ params }) {
  const { slug } = params;
  // Ensure getPostData correctly fetches and parses frontmatter + content
  const postData = getPostData(slug);

  if (!postData) {
    notFound(); // Trigger 404 if post data isn't found
  }

  // Destructure frontMatter and content safely
  const { frontMatter, content } = postData;

  // Basic check if content exists
  if (!content) {
      console.error(`No MDX content found for slug: ${slug}`);
      // Handle appropriately - maybe show an error message or redirect
      return <p>Error: Post content is missing.</p>;
  }


  return (
    <article className={styles.postContainer}>
      <header className={styles.postHeader}>
        {/* Add nullish coalescing for safety */}
        <h1 className={styles.postTitle}>{frontMatter?.title ?? 'Untitled Post'}</h1>
        <div className={styles.postMeta}>
          {/* Check if date exists before formatting */}
          {frontMatter?.date && (
            <>
              Published on: {new Date(frontMatter.date).toLocaleDateString('en-GB', {
                year: 'numeric', month: 'long', day: 'numeric'
              })}
            </>
          )}
          {/* Check if author exists */}
          {frontMatter?.author && <span> by {frontMatter.author}</span>}
        </div>
      </header>
      <div className={styles.postContent}>
        {/* 3. Pass the components object to MDXRemote */}
        <MDXRemote source={content} components={components} />
      </div>
    </article>
  );
}
