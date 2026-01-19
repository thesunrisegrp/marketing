export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-neutral-900">
      {/* <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
          alt="Global Connectivity" 
          className="w-full h-full object-cover animate-fade-in scale-105"
        />
      </div> */}
      <div className="absolute inset-0 bg-neutral-900 z-0"></div>

      <div className="relative z-20 text-center px-6 max-w-6xl mx-auto flex flex-col items-center">
        {/* <span className="inline-block py-1 px-3 border border-white/30 text-white/80 text-[10px] uppercase tracking-[0.3em] mb-6 backdrop-blur-sm animate-fade-in-up">
          Govt. Recognized Star Export House
        </span> */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-[1.1] animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          Bridging Worlds.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-200 to-gold-500">Mastering Trade.</span>
        </h1>
        <p className="text-lg md:text-xl text-neutral-300 font-light max-w-2xl mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          The Sunrise Group orchestrates the seamless flow of high-grade chemicals, premium textiles, and engineering solutions across international borders.
        </p>
        
        <div className="animate-fade-in-up" style={{ animationDelay: '600ms' }}>
          <a href="#divisions" className="group flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors text-xs uppercase tracking-widest cursor-pointer">
            Explore Our Expertise
            <div className="w-[1px] h-16 bg-white/20 group-hover:bg-gold-500 transition-colors relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-gold-500 animate-[fadeInUp_1.5s_infinite]"></div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

