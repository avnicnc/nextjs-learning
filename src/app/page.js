import HeroBanner from '../components/HeroBanner/HeroBanner';
import Services from '../components/Services/Services';
import ProjectsGallery from '../components/ProjectsGallery/ProjectsGallery';
import Testimonials from '../components/Testimonials/Testimonials';

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <HeroBanner />
      <Services />
      <ProjectsGallery />
      <Testimonials />
    </main>
  );
}
