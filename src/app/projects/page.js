import LikeButton from '@/components/LikeButton';
import Link from 'next/link';



// Fetch projects from WordPress
async function getProjects() {
  try {
    const wpApiUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || "http://wpnext.local/wp-json/wp/v2";
    // Using the posts endpoint just like the gallery, fetching all published posts
    const res = await fetch(`${wpApiUrl}/posts?_embed&per_page=100`, {
      next: { revalidate: 60 }
    });
    
    if (!res.ok) throw new Error("Failed to fetch projects");
    return await res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

// Strip HTML tags from excerpt
function stripHtml(html) {
  if (!html) return "";
  return html.replace(/<[^>]*>?/gm, '');
}

export default async function Projects() {
  const projects = await getProjects();

  return (
    <main className="min-h-screen bg-gray-50 pt-32 pb-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <span className="inline-block py-1 px-4 rounded-full bg-purple-100 text-purple-700 text-sm font-bold tracking-wider mb-6">
          PORTFOLIO
        </span>
        <h1 className="text-5xl md:text-6xl font-black tracking-tight text-gray-900 mb-6">
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Projects</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Explore a curated selection of our most ambitious and impactful digital experiences.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => {
            // Extract category safely
            let categoryName = 'Project';
            if (project._embedded && project._embedded['wp:term']) {
              const categories = project._embedded['wp:term'][0];
              if (categories && categories.length > 0) {
                categoryName = categories[0].name;
              }
            }

            // Fallback color if ACF isn't set
            const colorClass = project.acf?.color ? project.acf.color : "bg-purple-500";
            
            // Clean excerpt
            const cleanExcerpt = stripHtml(project.excerpt?.rendered);

            return (
              <li key={project.id} className="group relative bg-white rounded-3xl p-1 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.1)] transition-all duration-500 transform hover:-translate-y-2">
                <div className="bg-white rounded-[1.35rem] h-full p-8 flex flex-col relative overflow-hidden">
                  {/* Decorative background element */}
                  <div 
                    className={`absolute -top-24 -right-24 w-48 h-48 rounded-full mix-blend-multiply filter blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 ${!colorClass.startsWith('bg-') && !colorClass.startsWith('from-') ? '' : colorClass}`}
                    style={colorClass.startsWith('#') ? { backgroundColor: colorClass } : {}}
                  ></div>
                  
                  <div className="flex-1 relative z-10">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 block">
                      {categoryName}
                    </span>
                    <Link href={`/projects/${project.slug}`} className="block focus:outline-none">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors" dangerouslySetInnerHTML={{ __html: project.title.rendered }}></h3>
                      <p className="text-gray-600 leading-relaxed line-clamp-3">
                        {cleanExcerpt}
                      </p>
                    </Link>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row sm:justify-between items-start sm:items-center relative z-10">
                    <Link href={`/projects/${project.slug}`} className="text-sm font-bold text-purple-600 hover:text-purple-700 flex items-center gap-1 mb-4 sm:mb-0">
                      View Case Study <span className="text-lg leading-none">&rarr;</span>
                    </Link>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}