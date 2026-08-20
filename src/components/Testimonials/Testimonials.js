export default function Testimonials({ title, testimonialsList }) {
  const displayTitle = title || "Client Success Stories";
  
  const defaultTestimonials = [
    {
      quote: "Working with this team was an absolute game-changer for our business. The website is not only stunning but highly functional.",
      author: "Sarah Jenkins",
      role: "CMO, TechNova",
      avatar: "SJ"
    },
    {
      quote: "They delivered beyond our expectations. The attention to detail and creative solutions were truly impressive.",
      author: "David Chen",
      role: "Founder, Bloomly",
      avatar: "DC"
    }
  ];

  const testimonials = testimonialsList && testimonialsList.length > 0 ? testimonialsList : defaultTestimonials;

  return (
    <section className="py-24 bg-gray-50 overflow-hidden relative">
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-16 text-center text-gray-900">
          {displayTitle}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {testimonials.map((t, idx) => {
            // Check if avatar is a full URL or just initials
            const isAvatarImage = t.avatar && t.avatar.length > 2 && (t.avatar.startsWith('http') || t.avatar.startsWith('/'));

            return (
              <div key={idx} className="bg-white p-10 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] transition-all duration-300 relative group transform hover:-translate-y-1">
                <div className="text-6xl text-purple-200 absolute top-6 right-8 font-serif transition-transform duration-300 group-hover:scale-110">"</div>
                <p className="text-xl text-gray-700 italic mb-8 relative z-10 leading-relaxed">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-4">
                  {isAvatarImage ? (
                    <div 
                      className="w-14 h-14 bg-cover bg-center rounded-full shadow-inner"
                      style={{ backgroundImage: `url(${t.avatar})` }}
                    ></div>
                  ) : (
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-inner">
                      {t.avatar}
                    </div>
                  )}
                  <div>
                    <h4 className="font-bold text-gray-900">{t.author}</h4>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
