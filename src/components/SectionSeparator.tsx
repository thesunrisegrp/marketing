export default function SectionSeparator() {
  return (
    <div className="w-full flex items-center justify-center py-16 opacity-60">
      <div className="relative w-64 h-12 flex items-center justify-center">
        {/* Horizontal Line */}
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-400 to-transparent"></div>
        
        {/* Center Sun Semi-Circle mimic */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-gold-500 rounded-full shadow-[0_0_15px_rgba(212,175,55,0.6)]"></div>
        
        {/* Rays */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full w-[1px] h-8 bg-gold-300 origin-bottom rotate-0"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full w-[1px] h-6 bg-gold-300 origin-bottom -rotate-45 translate-x-[-6px]"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full w-[1px] h-6 bg-gold-300 origin-bottom rotate-45 translate-x-[6px]"></div>
      </div>
    </div>
  );
}

