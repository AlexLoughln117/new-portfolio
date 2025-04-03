// src/components/RecentBlogs.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import styles from './RecentBlogs.module.css'; // Import CSS Module

// --- getRecentPosts function remains the same ---
async function getRecentPosts() {
  const postsDirectory = path.join(process.cwd(), 'content/blog');
  let filenames = [];
  try {
    filenames = fs.readdirSync(postsDirectory);
  } catch (error) {
    console.error("Could not read blog directory:", postsDirectory, error);
    return [];
  }

  const posts = filenames
    .filter(filename => filename.endsWith('.md') || filename.endsWith('.mdx'))
    .map(filename => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);

      if (!data.title || !data.date) {
        console.warn(`Skipping ${filename}: missing title or date in frontmatter.`);
        return null;
      }

      return {
        slug: filename.replace(/\.(md|mdx)$/, ''),
        title: data.title,
        date: data.date,
        category: data.category,
        author: data.author,
        excerpt: data.excerpt,
      };
    })
    .filter(post => post !== null);

  posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  return posts.slice(0, 3);
}


// The React component (No Tailwind classes left)
export default async function RecentBlogs() {
  const recentPosts = await getRecentPosts();

  if (!recentPosts || recentPosts.length === 0) {
    return <section className={styles.recentBlogsSection}>No recent blog posts found.</section>;
  }

  return (
    <section className={styles.recentBlogsSection}>
      {/* Use CSS module class for the heading */}
      <h2 className={styles.sectionHeading}>
        Blog
      </h2>
      {/* Use CSS module class for the grid container */}
      <div className={styles.gridContainer}>
        {recentPosts.map(post => (
          <Link href={`/blog/${post.slug}`} key={post.slug} className={styles.postCard}>
            {post.category && (
              <p className={styles.postCategory}>{post.category}</p>
            )}
            <h3 className={styles.postTitle}>{post.title}</h3>
            {post.excerpt && (
              <p className={styles.postExcerpt}>{post.excerpt}</p>
            )}
          </Link>
        ))}
      </div>
    </section>
  );
}