// src/lib/posts.js
import fs from 'fs'; // Node.js file system module
import path from 'path'; // Node.js path module
import matter from 'gray-matter'; // Library to parse front matter

// Define the path to the directory containing blog posts
// Assumes 'content/blog' is at the root of your project
const postsDirectory = path.join(process.cwd(), 'content/blog');

/**
 * Gets metadata for all published posts, sorted by date.
 * @returns {Array} Array of post objects with metadata (slug, title, date, etc.)
 */
export function getSortedPostsData() {
  // Get file names under /content/blog
  let filenames = [];
  try {
    filenames = fs.readdirSync(postsDirectory);
  } catch (error) {
    console.error("Error reading posts directory:", postsDirectory, error);
    return []; // Return empty if directory doesn't exist or error reading
  }

  const allPostsData = filenames
    .filter(filename => filename.endsWith('.mdx')) // Filter for MDX files
    .map(filename => {
      // Remove ".mdx" from file name to get slug
      const slug = filename.replace(/\.mdx$/, '');

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, filename);
      let fileContents;
      try {
        fileContents = fs.readFileSync(fullPath, 'utf8');
      } catch (error) {
        console.error(`Error reading file: ${fullPath}`, error);
        return null; // Skip this file if reading fails
      }

      // Use gray-matter to parse the post metadata section (front matter)
      const matterResult = matter(fileContents);

      // Combine the data with the slug
      return {
        slug,
        ...(matterResult.data), // Spread front matter properties (title, date, etc.)
      };
    })
    .filter(post => post && post.published !== false); // Filter out nulls and unpublished posts

  // Sort posts by date (newest first)
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

/**
 * Gets all possible slugs (filenames without .mdx) for blog posts.
 * Used by generateStaticParams in dynamic route pages.
 * @returns {Array} Array of objects like [{ params: { slug: '...' } }, ...]
 */
export function getAllPostSlugs() {
   let filenames = [];
   try {
     filenames = fs.readdirSync(postsDirectory);
   } catch (error) {
     console.error("Error reading posts directory for slugs:", postsDirectory, error);
     return [];
   }

  return filenames
    .filter(filename => filename.endsWith('.mdx'))
    .map(filename => {
      return {
        params: {
          slug: filename.replace(/\.mdx$/, ''),
        },
      };
    });
}

/**
 * Gets the full data (front matter + content) for a single post based on slug.
 * @param {string} slug - The slug of the post (filename without .mdx).
 * @returns {object | null} Object containing slug, frontMatter, and content, or null if not found.
 */
export function getPostData(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  let fileContents;

  try {
    fileContents = fs.readFileSync(fullPath, 'utf8');
  } catch (error) {
    // If file doesn't exist or error reading, return null
    console.error(`Error reading post file for slug "${slug}": ${fullPath}`, error);
    return null;
  }

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Combine the data with the slug and content
  return {
    slug,
    frontMatter: matterResult.data,
    content: matterResult.content, // The MDX content itself as a string
  };
}

