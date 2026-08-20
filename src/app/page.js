import HeroBanner from '../components/HeroBanner/HeroBanner';
import Services from '../components/Services/Services';
import ProjectsGallery from '../components/ProjectsGallery/ProjectsGallery';
import Testimonials from '../components/Testimonials/Testimonials';
import { getPage } from '../lib/wordpress';

export default async function Home() {
  // Fetch the home page data from WordPress
  let pageData = null;
  try {
    pageData = await getPage('home');
  } catch (error) {
    console.error("Error fetching home page", error);
  }

  // Extract ACF fields based on the page_section flexible content layout
  const sections = pageData?.acf?.page_section || [];

  console.log("sections",sections);
  const heroSection = sections.find(section => section.acf_fc_layout === 'hero_banner') || {};

  const heroTitle = heroSection.banner_title || (pageData?.title?.rendered || undefined);
  // It looks like banner_description includes HTML, so we might want to pass it as subtitle
  // But wait, our HeroBanner expects text for subtitle. Let's pass the raw string and handle it.
  const heroSubtitle = heroSection.banner_description || undefined;
  
  // Try to extract button text if available in button_list
  const primaryBtn = heroSection.button_list?.[0]?.banner_button?.title || undefined;
  const secondaryBtn = heroSection.button_list?.[1]?.banner_button?.title || undefined;

  // Extract Services section
  const servicesSection = sections.find(section => section.acf_fc_layout === 'services') || {};
  const servicesTitle = servicesSection.service_main_title || undefined;
  const servicesDesc = servicesSection.services_description || undefined;
  
  // Format the repeater field to match what Services.js expects
  // We handle service_icon assuming it could be an image ID or a URL string
  // Extract Project Gallery section
  const projectGallerySection = sections.find(section => section.acf_fc_layout === 'project_gallery') || {};
  const projectGalleryTitle = projectGallerySection.gallery_title || undefined;
  const projectGallerySubtitle = projectGallerySection.gallery_subtitle || undefined;
  const projectGalleryButton = projectGallerySection.gallery_button || undefined;
  const projectGalleryList = projectGallerySection.project_gallery_list || undefined;

  const servicesList = servicesSection.services_list ? await Promise.all(
    servicesSection.services_list.map(async (item) => {
      let iconUrl = item.service_icon;
      // If ACF returns an Image ID, fetch the URL from the media endpoint
      if (typeof item.service_icon === 'number') {
        try {
          const mediaRes = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/media/${item.service_icon}`);
          if (mediaRes.ok) {
            const mediaData = await mediaRes.json();
            iconUrl = mediaData.source_url;
          }
        } catch (e) {
          console.error("Failed to fetch media for icon", e);
        }
      }

      return {
        title: item.service_title,
        desc: item.service_subtitle, // you had service_desc, but the API returned service_subtitle
        icon: iconUrl
      };
    })
  ) : undefined;


  // Extract Testimonial section
  const testimonialSection = sections.find(section => section.acf_fc_layout === 'testimonial') || {};
  const testimonialTitle = testimonialSection.testimonial_title || undefined;
  
  // Format the repeater field to handle the avatar image safely
  const testimonialsList = testimonialSection.testimonial_list ? await Promise.all(
    testimonialSection.testimonial_list.map(async (item) => {
      let avatarUrl = item.avatar;
      // If ACF returns an Image ID, fetch the URL from the media endpoint
      if (typeof item.avatar === 'number') {
        try {
          const mediaRes = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/media/${item.avatar}`);
          if (mediaRes.ok) {
            const mediaData = await mediaRes.json();
            avatarUrl = mediaData.source_url;
          }
        } catch (e) {
          console.error("Failed to fetch media for avatar", e);
        }
      } else if (item.avatar && item.avatar.url) {
        // If ACF returns an Image Object
        avatarUrl = item.avatar.url;
      }

      return {
        quote: item.quote,
        author: item.author,
        role: item.role,
        avatar: avatarUrl || (item.author ? item.author.split(' ').map(n => n[0]).join('') : '')
      };
    })
  ) : undefined;

  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <HeroBanner 
        title={heroTitle}
        subtitle={heroSubtitle}
        primaryButtonText={primaryBtn}
        secondaryButtonText={secondaryBtn}
      />
      <Services 
        title={servicesTitle}
        description={servicesDesc}
        servicesList={servicesList}
      />
      <ProjectsGallery 
        title={projectGalleryTitle}
        subtitle={projectGallerySubtitle}
        button={projectGalleryButton}
        projectsList={projectGalleryList}
      />
      <Testimonials 
        title={testimonialTitle}
        testimonialsList={testimonialsList}
      />
    </main>
  );
}



