import styles from '../../page.module.css';
import Link from 'next/link';

export default async function ProjectDetail({ params }) {
  // In Next.js 15, params is a Promise, so we must await it to get the values
  const { id } = await params;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Project {id}</h1>
      <p className={styles.subtitle}>This is the detail page for project number {id}.</p>
      
      <div style={{ marginTop: '2rem' }}>
        <Link href="/projects" style={{ color: '#3b82f6', textDecoration: 'none', fontWeight: 'bold' }}>
          ← Back to Projects
        </Link>
      </div>
    </div>
  );
}
