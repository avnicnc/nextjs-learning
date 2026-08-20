import Image from 'next/image';
import { notFound } from 'next/navigation';

async function getProject(slug) {
  try {
    const wpApiUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || "https://living-governor.localsite.io/wp-json/wp/v2";
    const res = await fetch(`${wpApiUrl}/posts?slug=${slug}&_embed`, {
      next: { revalidate: 60 }
    });
    
    if (!res.ok) return null;
    const data = await res.json();
    return data.length > 0 ? data[0] : null;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default async function ProjectDetail({ params }) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    notFound();
  }

  // Extract featured image
  let featuredImageUrl = null;
  if (project._embedded && project._embedded['wp:featuredmedia']) {
    console.log("FEATURED MEDIA DATA:", JSON.stringify(project._embedded['wp:featuredmedia'][0], null, 2));
    featuredImageUrl = project._embedded['wp:featuredmedia'][0]?.source_url || project._embedded['wp:featuredmedia'][0]?.media_details?.sizes?.full?.source_url;
  }

  // Format date
  const dateObj = new Date(project.date);
  const formattedDate = dateObj.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <main className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Title & Date */}
        <div className="mb-8 text-center">
          <p className="text-gray-500 text-sm font-medium mb-2">{formattedDate}</p>
          <h1 
            className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6"
            dangerouslySetInnerHTML={{ __html: project.title.rendered }}
          />
          
          {/* Short Description (Excerpt) */}
          {project.excerpt && (
            <div 
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              dangerouslySetInnerHTML={{ __html: project.excerpt.rendered }}
            />
          )}
        </div>

        {/* Featured Image */}
        {featuredImageUrl && (
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-12 shadow-lg">
            <Image 
              src={featuredImageUrl}
              alt={project.title.rendered}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Full Content (if you want to keep it, otherwise we can remove this section) */}
        <div 
          className="prose prose-lg max-w-none text-gray-800"
          dangerouslySetInnerHTML={{ __html: project.content.rendered }}
        />
        
      </div>
    </main>
  );
}
