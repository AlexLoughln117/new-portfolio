// src/components/Header.js
import Link from 'next/link';
import styles from './Header.module.css'; // We'll create this CSS file next

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          {/* Link the logo back to the homepage */}
          <Link href="/">
            AVL {/* Or use an <Image> component if you have a logo file */}
          </Link>
        </div>
        <nav className={styles.nav}>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            { 
            /* <li><Link href="/bv-blog">BV</Link></li>
            <li><Link href="/category/work">Work</Link></li>
            <li><Link href="/games">Games</Link></li>
            <li><Link href="/books">Books</Link></li>
            <li><Link href="/blog">Blog</Link></li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;