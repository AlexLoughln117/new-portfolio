// src/components/PageBanner.js
import React from 'react';
import Link from 'next/link'; // Use Next.js Link for internal navigation
import styles from './PageBanner.module.css'; // We'll create this CSS module

/**
 * A reusable banner component for page titles and optional subtitles/links.
 * @param {object} props - Component props.
 * @param {string} props.title - The main title to display (required).
 * @param {string} [props.subtitle] - Optional subtitle text.
 * @param {string} [props.linkText] - Optional text for the link/button.
 * @param {string} [props.linkHref] - Optional URL for the link/button. Required if linkText is provided.
 * @param {boolean} [props.isExternalLink=false] - Set to true if linkHref is an external URL or a file path.
 */
const PageBanner = ({ title, subtitle, linkText, linkHref, isExternalLink = false }) => {
  // Basic validation: If there's link text, there must be a link href
  const showLink = linkText && linkHref;

  return (
    <div className={styles.bannerContainer}>
        <div className={styles.bannerInner}>
      {/* Display the title */}
      <h1>{title}</h1>

      {/* Conditionally display the subtitle if provided */}
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}

      {/* Conditionally display the link/button if text and href are provided */}
      {showLink && (
        // Use standard <a> tag for external links or file downloads
        isExternalLink ? (
          <a
            href={linkHref}
            className={styles.bannerLink}
            target="_blank" // Good practice for external links
            rel="noopener noreferrer"
          >
            {linkText}
          </a>
        ) : (
          // Use Next.js <Link> for internal navigation
          <Link href={linkHref} className={styles.bannerLink}>
            {linkText}
          </Link>
        )
      )}
      </div>
    </div>
  );
};

export default PageBanner;
