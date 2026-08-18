import styles from './page.module.css';
import HeroBanner from '../components/HeroBanner/HeroBanner';
import Services from '../components/Services/Services';

export default function Home() {
  return (
    <main>
      {/* We just use the components like custom HTML tags! */}
      <HeroBanner />

      <Services />

      {/* We will create these as separate components next! */}
      <section className={styles.contentSection}>
        <h2>What People Say</h2>
        <p>Reviews and testimonials will go here.</p>
      </section>

      <section className={styles.contentSection}>
        <h2>Our Work</h2>
        <p>Gallery of recent projects.</p>
      </section>

      <section className={styles.contentSection}>
        <h2>Get In Touch</h2>
        <p>Contact form and info will go here.</p>
      </section>
    </main>
  );
}
