import Link from 'next/link';

export default async function ProjectDetail({ params }) {
  // In Next.js 15, params is a Promise, so we must await it to get the values
  const { id } = await params;

  // Let's create some dummy data based on the ID for a stunning presentation
  const dummyData = {
    '1': { title: 'Portfolio Website', color: 'from-purple-500 to-indigo-500', role: 'Frontend & Design', timeline: '4 Weeks' },
    '2': { title: 'Weather App', color: 'from-blue-400 to-cyan-400', role: 'Full Stack Development', timeline: '2 Weeks' },
    '3': { title: 'Task Manager', color: 'from-pink-500 to-rose-400', role: 'UI/UX & Frontend', timeline: '3 Weeks' },
  };

  const project = dummyData[id] || { title: `Project ${id}`, color: 'from-gray-500 to-gray-700', role: 'Development', timeline: 'TBD' };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className={`relative pt-40 pb-32 overflow-hidden bg-gradient-to-br ${project.color} text-white`}>
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-black/20 mix-blend-multiply pointer-events-none"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl pointer-events-none"></div>
        
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <Link href="/projects" className="inline-flex items-center text-white/80 hover:text-white font-semibold mb-10 transition-colors group">
            <span className="mr-2 transform group-hover:-translate-x-1 transition-transform">&larr;</span> Back to Projects
          </Link>
          <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-6 drop-shadow-lg">
            {project.title}
          </h1>
          <p className="text-2xl text-white/90 max-w-2xl font-light">
            A deep dive into the strategy, design, and development behind this digital experience.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-white text-gray-900 relative">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            
            {/* Sidebar Details */}
            <div className="md:col-span-1 space-y-10">
              <div>
                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Role</h4>
                <p className="text-xl font-semibold text-gray-900">{project.role}</p>
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Timeline</h4>
                <p className="text-xl font-semibold text-gray-900">{project.timeline}</p>
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Tech Stack</h4>
                <div className="flex flex-wrap gap-2 mt-3">
                  {['React', 'Next.js', 'Tailwind CSS'].map(tech => (
                    <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="md:col-span-2 space-y-10 text-lg text-gray-600 leading-relaxed">
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900 mb-6 tracking-tight">The Challenge</h2>
                <p>
                  Building {project.title} presented unique challenges that required an innovative approach. 
                  The primary goal was to create an engaging, lightning-fast user experience without compromising on visual quality or accessibility.
                </p>
              </div>
              
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900 mb-6 tracking-tight">The Solution</h2>
                <p className="mb-4">
                  We leveraged the power of Next.js for server-side rendering and static site generation, ensuring optimal performance. 
                  For styling, we utilized Tailwind CSS to rapidly prototype and build a highly custom, responsive interface.
                </p>
                <p>
                  The result is a highly polished digital product that not only meets but exceeds the original project requirements, delivering significant value and a delightful user experience.
                </p>
              </div>

              <div className="pt-10">
                <button className={`px-10 py-4 bg-gradient-to-r ${project.color} text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all`}>
                  Launch Project
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
