import styles from './components.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} MyPortfolio. All rights reserved.</p>
    </footer>
  );
}