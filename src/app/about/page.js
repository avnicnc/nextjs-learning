export default function About() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section for About */}
      <section className="relative py-32 bg-gray-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-[30rem] h-[30rem] bg-purple-600/20 rounded-full mix-blend-screen filter blur-[100px]"></div>
          <div className="absolute bottom-10 right-10 w-[30rem] h-[30rem] bg-blue-600/20 rounded-full mix-blend-screen filter blur-[100px]"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center mt-20">
          <span className="inline-block py-1 px-4 rounded-full bg-white/10 border border-white/20 text-purple-300 text-sm font-semibold tracking-wider mb-6 backdrop-blur-sm">
            OUR STORY
          </span>
          <h1 className="text-6xl md:text-7xl font-black tracking-tight mb-8">
            Driven by Passion, <br className="hidden md:block"/> Defined by <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 drop-shadow-sm">Excellence</span>.
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
            We are a team of digital creators dedicated to building experiences that matter. Our mission is to elevate brands through innovative design and cutting-edge technology.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-32 bg-white text-gray-900 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            
            <div className="order-2 md:order-1 relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-100 to-blue-50 transform -translate-x-6 translate-y-6 rounded-[2rem] -z-10 transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0"></div>
              <div className="bg-white p-12 rounded-[2rem] shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100">
                <h3 className="text-3xl font-extrabold mb-8 text-gray-900 tracking-tight">What We Believe In</h3>
                <ul className="space-y-8">
                  {[
                    { title: "Innovation", desc: "Pushing boundaries and exploring new technologies." },
                    { title: "Quality", desc: "Never compromising on the standard of our work." },
                    { title: "Collaboration", desc: "Working closely with our clients to ensure success." }
                  ].map((val, idx) => (
                    <li key={idx} className="flex gap-6 items-start">
                      <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-blue-50 text-purple-600 rounded-2xl flex items-center justify-center font-black text-2xl flex-shrink-0 shadow-sm">
                        {idx + 1}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">{val.title}</h4>
                        <p className="text-gray-600 leading-relaxed">{val.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-8">
                Our Journey
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed mb-10">
                <p>
                  What started as a small passion project has grown into a full-fledged digital agency. We've spent years honing our craft, learning from every challenge, and celebrating every victory with our partners.
                </p>
                <p>
                  Today, we focus on creating Next.js and React-powered applications that are lightning-fast, highly accessible, and visually breathtaking. Our process is transparent, collaborative, and entirely focused on delivering value.
                </p>
              </div>
              <button className="px-10 py-4 bg-gray-900 text-white font-bold rounded-full hover:bg-gray-800 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                Meet the Team
              </button>
            </div>
            
          </div>
        </div>
      </section>
    </main>
  );
}