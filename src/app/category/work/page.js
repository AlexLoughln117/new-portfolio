// src/app/category/work/page.js  <-- Note the updated path
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css'; // Will look for page.module.css in the same folder

// Placeholder data (same as before)
const projects = [
  { id: 1, title: 'Project One', tagline: 'Description...', imageUrl: '/images/project1-placeholder.jpg', link: '/work/project-one' },
  { id: 2, title: 'Project Two', tagline: 'Another cool project.', imageUrl: '/images/project2-placeholder.jpg', link: '/work/project-two' },
  { id: 3, title: 'Project Three', tagline: 'Web development showcase.', imageUrl: '/images/project3-placeholder.jpg', link: '/work/project-three' },
];

export default function WorkPage() {
  return (
    <div className={styles.workContainer}>
      <h1 className={styles.workHeading}>Work</h1>
      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <Link href={project.link} key={project.id} className={styles.projectCard}>
            <div
              className={styles.projectImage}
              style={{ backgroundImage: `url(${project.imageUrl})` }}
            >
              <div className={styles.projectOverlay}>
                <div className={styles.projectInfo}>
                  <h2>{project.title}</h2>
                  <p>{project.tagline}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}