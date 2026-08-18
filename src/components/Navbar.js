import Link from 'next/link';
import styles from './components.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        MyPortfolio
      </Link>
      <div className={styles.navLinks}>
        <Link href="/" className={styles.link}>Home</Link>
        <Link href="/about" className={styles.link}>About</Link>
        <Link href="/projects" className={styles.link}>Projects</Link>
      </div>
    </nav>
  );
}