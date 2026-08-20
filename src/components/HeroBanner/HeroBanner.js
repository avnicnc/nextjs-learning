export default function HeroBanner({ 
  title, 
  subtitle, 
  primaryButtonText,
  secondaryButtonText
}) {
  // If there's no title from WordPress, don't show the hero section at all
  if (!title) return null;

  return (
    <section className="relative flex items-center justify-center min-h-[90vh] overflow-hidden bg-gray-950 text-white">
      {/* Background Gradient Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[40rem] h-[40rem] bg-purple-600/30 rounded-full mix-blend-screen filter blur-[128px] opacity-50"></div>
        <div className="absolute top-20 right-1/4 w-[35rem] h-[35rem] bg-pink-600/30 rounded-full mix-blend-screen filter blur-[128px] opacity-50"></div>
        <div className="absolute -bottom-32 left-1/2 w-[45rem] h-[45rem] bg-blue-600/30 rounded-full mix-blend-screen filter blur-[128px] opacity-50"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1 
          className="text-6xl md:text-8xl font-black tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-br from-white via-purple-100 to-gray-400 drop-shadow-sm"
          dangerouslySetInnerHTML={{ __html: title }}
        ></h1>
        
        {subtitle && (
          <div 
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light [&>p]:mb-4"
            dangerouslySetInnerHTML={{ __html: subtitle }}
          ></div>
        )}

        {(primaryButtonText || secondaryButtonText) && (
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {primaryButtonText && (
              <button className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-500 hover:to-pink-500 transition-all duration-300 shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] transform hover:-translate-y-1">
                {primaryButtonText}
              </button>
            )}
            {secondaryButtonText && (
              <button className="px-10 py-4 bg-white/5 border border-white/10 backdrop-blur-md text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1">
                {secondaryButtonText}
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
