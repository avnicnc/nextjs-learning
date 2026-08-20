import styles from './components.module.css';

export default function Footer({ copyrightText }) {
  return (
    <footer className={styles.footer}>
      {copyrightText ? (
        <div dangerouslySetInnerHTML={{ __html: copyrightText }} />
      ) : (
        <p>© {new Date().getFullYear()} MyPortfolio. All rights reserved.</p>
      )}
    </footer>
  );
}