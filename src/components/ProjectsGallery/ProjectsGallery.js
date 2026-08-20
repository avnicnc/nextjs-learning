import Link from 'next/link';

export default async function ProjectsGallery({ title, subtitle, button }) {
  const displayTitle = title || "Our Latest Work";
  // The subtitle might contain HTML or be a plain string
  
  const displayButtonText = button?.title || "View all projects \u2192";
  const displayButtonUrl = button?.url || "/projects";
  const displayButtonTarget = button?.target || "_self";
  
  // Fetch projects from WordPress default posts
  let projectsList = [];
  try {
    const wpApiUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || "https://paragraph:animated@living-governor.localsite.io/wp-json/wp/v2";
    // Fetch posts with embedded media and terms
    const res = await fetch(`${wpApiUrl}/posts?_embed&per_page=6`, {
      next: { revalidate: 60 }
    });
    
    if (res.ok) {
      projectsList = await res.json();
    } else {
      console.error("Failed to fetch posts:", res.statusText);
    }
  } catch (error) {
    console.error("Error fetching posts:", error);
  }

  // Use fetched list or empty array
  const projectsToDisplay = projectsList && projectsList.length > 0 ? projectsList : [];

  return (
    <section className="py-24 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-gray-900">
              {displayTitle}
            </h2>
            {subtitle && (
              <div 
                className="text-lg text-gray-600 max-w-xl projects-subtitle" 
                dangerouslySetInnerHTML={{ __html: subtitle }} 
              />
            )
            }
          </div>
          {displayButtonText && (
            <Link href={displayButtonUrl} target={displayButtonTarget} className="md:inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors">
              {displayButtonText}
            </Link>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsToDisplay.map((project, idx) => {
            // Support default WordPress post structure and fallback to previous structure
            const projectTitle = project.title?.rendered || project.title || "";
            const category = project.tag || project.category || (project._embedded?.['wp:term']?.[0]?.[0]?.name) || "Project";
            const bgColor = project.acf?.color || project.color || "bg-purple-500";
            const featuredImage = project._embedded?.['wp:featuredmedia']?.[0]?.source_url || project.featured_image_url || project.image?.url || null;
            const projectSlug = project.slug || idx;
            
            // Check if color is a hex code or a tailwind class
            const isHex = bgColor.startsWith('#') || bgColor.startsWith('rgb');
            
            return (
              <Link href={`/projects/${projectSlug}`} key={project.id || idx} className="group relative rounded-3xl overflow-hidden cursor-pointer aspect-video shadow-sm hover:shadow-xl transition-all duration-300 block">
                {featuredImage ? (
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105 transform"
                    style={{ backgroundImage: `url(${featuredImage})` }}
                  ></div>
                ) : (
                  <div 
                    className={`absolute inset-0 opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105 transform ${!isHex ? bgColor : ''}`}
                    style={isHex ? { backgroundColor: bgColor } : {}}
                  ></div>
                )}
                
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-purple-300 font-medium text-sm tracking-wider uppercase mb-2 block">{category}</span>
                  <h3 className="text-3xl font-bold text-white" dangerouslySetInnerHTML={{ __html: projectTitle }}></h3>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

