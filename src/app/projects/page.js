import styles from '../page.module.css';
import LikeButton from '@/components/LikeButton';
import Link from 'next/link';

// Simulating fetching data from a database
async function getProjects() {
  // We'll simulate a slight delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  
  return [
    { id: '1', title: 'Portfolio Website', desc: 'Built with Next.js and CSS Modules.' },
    { id: '2', title: 'Weather App', desc: 'Fetches real-time data from an API.' },
    { id: '3', title: 'Task Manager', desc: 'A simple interactive to-do list.' }
  ];
}

export default async function Projects() {
  const projects = await getProjects();
  // console.log('PROJECTS RECEIVED BY PAGE:', projects);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>My Projects</h1>
      <p className={styles.subtitle}>Here are some of the cool things I have built.</p>
      <ul style={{ marginTop: '2rem', listStyle: 'none', padding: 0, width: '100%', maxWidth: '600px' }}>

          
        {projects.map((project) => (
          <li key={project.id} style={{ background: '#fff', padding: '1rem 2rem', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', marginBottom: '1rem' }}>
            <Link href={`/projects/${project.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <h3>{project.title}</h3>
              <p style={{ color: '#64748b' }}>{project.desc}</p>
            </Link>
            <LikeButton />
          </li>
        ))}
      </ul>
    </div>
  );
}