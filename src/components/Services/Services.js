import styles from './Services.module.css';

export default function Services() {
  return (
    <section className={styles.contentSection}>
      <h2 className={styles.sectionTitle}>Our Expertise</h2>
      
      <div className={styles.cardContainer}>
         <div className={styles.card}>
            <h3 className={styles.cardTitle}>Web Design</h3>
            <p className={styles.cardText}>We craft beautiful, intuitive interfaces that provide users with seamless and engaging experiences.</p>
         </div>

         <div className={styles.card}>
            <h3 className={styles.cardTitle}>Development</h3>
            <p className={styles.cardText}>Robust, scalable, and lightning-fast applications built using the latest modern web technologies.</p>
         </div>

         <div className={styles.card}>
            <h3 className={styles.cardTitle}>SEO Strategy</h3>
            <p className={styles.cardText}>Data-driven optimization to ensure your brand reaches the top of search results and stays there.</p>
         </div>
      </div>
    </section>
  );
}
