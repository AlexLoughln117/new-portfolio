
import Link from 'next/link';
import styles from './page.module.css'; 
import PageBanner from '@/components/PageBanner'; // <-- Import the new banner component (using alias)


// Define metadata for this page
export const metadata = {
  title: 'BV Blog', // <-- Updated title
};

/**
 * Fetches blog posts from the external WordPress REST API.
 * @returns {Promise<Array>} A promise that resolves to an array of post objects.
 */
async function getPosts() {
  // API endpoint for posts, embedding media (for featured images) and getting 10 posts
  const API_URL = 'https://bondvigilantes.com/wp-json/wp/v2/posts?_embed=true&per_page=10';

  try {
    // Fetch data using Next.js enhanced fetch
    const res = await fetch(API_URL);

    // Check if the request was successful
    if (!res.ok) {
      console.error(`Failed to fetch posts: ${res.status} ${res.statusText}`);
      throw new Error(`Failed to fetch posts: ${res.status}`);
    }

    // Parse the JSON response
    const posts = await res.json();
    return posts;
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return []; // Return empty array on error
  }
}


/**
 * BV Blog Page Component (Server Component) - Renamed function
 * Fetches and displays blog posts from Bond Vigilantes.
 */
export default async function BvBlogPage() { // <-- Renamed component function
  // Fetch posts when the page is requested/built on the server
  const posts = await getPosts();

  return (
    // The rest of the component's return statement remains the same...
    // using styles.blogContainer, styles.postsList, etc.
    <div className={styles.blogContainer}>
      <PageBanner
        title="Bond Vigilantes"
        subtitle="The latest articles from bondvigilantes.com"
        // No link needed for this page, so omit linkText/linkHref props
      />

      <div className={styles.postsList}>
        {posts && posts.length > 0 ? (
          posts.map((post) => (
            <article key={post.id} className={styles.postItem}>
              {/* Featured Image */}
              {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
                <img
                  src={post._embedded['wp:featuredmedia'][0].source_url}
                  alt={post._embedded['wp:featuredmedia'][0]?.alt_text || post.title.rendered}
                  className={styles.featuredImage}
                  loading="lazy"
                />
              )}
              {/* Title */}
              <h2
                className={styles.postTitle}
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              />
              {/* Meta */}
              <div className={styles.postMeta}>
                Published on: {new Date(post.date).toLocaleDateString('en-GB', {
                  year: 'numeric', month: 'long', day: 'numeric'
                })}
              </div>
              {/* Excerpt */}
              <div
                className={styles.postExcerpt}
                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
              />
              {/* Link */}
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.readMore}
              >
                Read Full Article &rarr;
              </a>
            </article>
          ))
        ) : (
          <p>No posts found or unable to load posts.</p>
        )}
      </div>
    </div>
  );
}
