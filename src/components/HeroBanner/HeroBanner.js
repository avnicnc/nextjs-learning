import styles from './HeroBanner.module.css';

export default function HeroBanner() {
  return (
    <section className={styles.bannerSection}>
      <h1 className={styles.title}>Build the Future</h1>
      <p className={styles.subtitle}>
        We create stunning, high-performance web experiences that captivate your audience and drive real results.
      </p>
      <button className={styles.ctaButton}>Start Your Project</button>
    </section>
  );
}
