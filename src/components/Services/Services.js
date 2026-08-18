export default function Services() {
  const services = [
    {
      title: "Web Design",
      desc: "We craft beautiful, intuitive interfaces that provide users with seamless and engaging experiences.",
      icon: "✨"
    },
    {
      title: "Development",
      desc: "Robust, scalable, and lightning-fast applications built using the latest modern web technologies.",
      icon: "⚡"
    },
    {
      title: "SEO Strategy",
      desc: "Data-driven optimization to ensure your brand reaches the top of search results and stays there.",
      icon: "📈"
    }
  ];

  return (
    <section className="py-24 bg-gray-50 text-gray-900 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 drop-shadow-sm">
            Our Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how we can transform your digital presence with our comprehensive suite of services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <div key={idx} className="group p-8 bg-white rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.1)] transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-100 to-blue-50 rounded-bl-full z-0 opacity-50 transition-transform duration-500 group-hover:scale-150"></div>
              <div className="relative z-10">
                <div className="text-5xl mb-6 transform transition-transform group-hover:scale-110 group-hover:-rotate-3 inline-block">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
}
