// src/components/BlogPostsClient.js
'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Import useRouter
import styles from '../app/blog/page.module.css';

export default function BlogPostsClient({ initialPosts, tags, initialSelectedTag }) {
  // Initialize selectedTag with the value from URL query param
  const [selectedTag, setSelectedTag] = useState(initialSelectedTag || null);
  const router = useRouter();

  const filteredPosts = useMemo(() => {
    if (!selectedTag) {
      return initialPosts;
    }
    return initialPosts.filter(post => post.tag === selectedTag);
  }, [initialPosts, selectedTag]);

  // Function to update URL query parameter
  const updateURLWithTag = (tag) => {
    const params = new URLSearchParams(window.location.search);
    if (tag) {
      params.set('tag', tag);
    } else {
      params.delete('tag');
    }
    const queryString = params.toString();
    // Using router.replace to avoid adding to browser history for filter changes
    // scroll: false prevents the page from scrolling to top on URL change
    router.replace(`/blog${queryString ? `?${queryString}` : ''}`, { scroll: false });
  };

  const handleTagClick = (tag) => {
    let newSelectedTag;
    if (selectedTag === tag) {
      newSelectedTag = null; // Deselect if clicking the same tag again
    } else {
      newSelectedTag = tag;
    }
    setSelectedTag(newSelectedTag);
    updateURLWithTag(newSelectedTag); // Update URL
  };

  const handleShowAllClick = () => {
    setSelectedTag(null);
    updateURLWithTag(null); // Update URL
  };

  return (
    <>
      {tags && tags.length > 0 && (
        <div className={styles.tagFilterContainer}>
          <button
            onClick={handleShowAllClick} // Use dedicated handler
            className={`${styles.tagFilterButton} ${!selectedTag ? styles.activeTag : ''}`}
          >
            All Posts
          </button>
          {tags.map(tag => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              className={`${styles.tagFilterButton} ${selectedTag === tag ? styles.activeTag : ''}`}
            >
              {tag}
            </button>
          ))}
        </div>
      )}

      <section className={styles.postsList}>
        {filteredPosts && filteredPosts.length > 0 ? (
          filteredPosts.map(({ slug, date, title, excerpt, tag: postTag }) => ( // Renamed 'tag' to 'postTag' to avoid conflict in scope
            <article key={slug} className={styles.postItem}>
              {postTag && <div className={styles.tag}>{postTag}</div>}
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
          <p>No blog posts found{selectedTag ? ` with the tag "${selectedTag}"` : ''}.</p>
        )}
      </section>
    </>
  );
}