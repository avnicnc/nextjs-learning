export default function ProjectsGallery() {
  const projects = [
    { id: 1, title: "Fintech App", img: "bg-purple-500", category: "Mobile" },
    { id: 2, title: "E-Commerce Platform", img: "bg-blue-500", category: "Web" },
    { id: 3, title: "Marketing Site", img: "bg-pink-500", category: "Design" },
    { id: 4, title: "SaaS Dashboard", img: "bg-indigo-500", category: "Web Application" }
  ];

  return (
    <section className="py-24 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-gray-900">
              Our Latest Work
            </h2>
            <p className="text-lg text-gray-600 max-w-xl">
              A glimpse into the digital experiences we've crafted for forward-thinking brands.
            </p>
          </div>
          <button className="md:inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors">
            View all projects &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group relative rounded-3xl overflow-hidden cursor-pointer aspect-video shadow-sm hover:shadow-xl transition-all duration-300">
              <div className={`absolute inset-0 ${project.img} opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105 transform`}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-purple-300 font-medium text-sm tracking-wider uppercase mb-2 block">{project.category}</span>
                <h3 className="text-3xl font-bold text-white">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
