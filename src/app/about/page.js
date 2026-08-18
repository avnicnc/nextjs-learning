import styles from '../page.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Me</h1>
      <p className={styles.subtitle}>Hi! I am currently learning React and Next.js.</p>
    </div>
  );
}
