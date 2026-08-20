const fs = require('fs');
const file = 'src/app/projects/page.js';
let content = fs.readFileSync(file, 'utf8');

const oldHeaderRegex = /\/\/ Fetch Theme Settings[\s\S]*?Explore a curated selection of our most ambitious and impactful digital experiences.\s*<\/p>\s*<\/div>/;

const newHeader = \
export default async function Projects() {
  const projects = await getProjects();

  let pageData = null;
  let acf = null;

  try {
    const wpApiUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || "http://wpnext.local/wp-json/wp/v2";
    const res = await fetch(\\\\/pages?slug=projects&_embed\\\, {
      next: { revalidate: 60 }
    });

    if (res.ok) {
      const data = await res.json();
      if (data && data.length > 0) {
        pageData = data[0];
        acf = pageData.acf || {};
      }
    }
  } catch (error) {
    console.error("Failed to fetch projects page:", error);
  }

  // Find the Flexible Content layouts (project_section)
  const pageSections = acf?.page_section || [];
  const projectSection = pageSections.find(section => section.acf_fc_layout === 'project_section') || {};

  // Map ACF fields
  const tag = projectSection.project_tag || 'PORTFOLIO';
  const title = projectSection.project_title || 'Featured <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Projects</span>';
  const description = projectSection.project_description || '<p>Explore a curated selection of our most ambitious and impactful digital experiences.</p>';

  return (
    <main className="min-h-screen bg-gray-50 pt-32 pb-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <span className="inline-block py-1 px-4 rounded-full bg-purple-100 text-purple-700 text-sm font-bold tracking-wider mb-6">
          {tag}
        </span>
        <h1 
          className="text-5xl md:text-6xl font-black tracking-tight text-gray-900 mb-6"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <div 
          className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed [&>p]:mb-0"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>\;

content = content.replace(oldHeaderRegex, newHeader);
fs.writeFileSync(file, content);
