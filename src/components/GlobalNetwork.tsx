import { Globe2, TrendingUp, ArrowRight } from 'lucide-react';

export default function GlobalNetwork() {
  return (
    <section id="network" className="py-24 bg-neutral-900 text-white relative overflow-hidden">
      {/* Abstract Map Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-cover bg-center"></div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-20 reveal">
          <span className="text-gold-500 font-bold tracking-[0.2em] text-sm uppercase mb-4 block">Our Footprint</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white">Strategic Presence</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Stat 1 */}
          <div className="p-8 border border-white/10 hover:border-gold-500/50 transition-colors duration-500 group reveal">
            <Globe2 className="w-10 h-10 text-gold-500 mx-auto mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-5xl font-serif mb-2">42</h3>
            <p className="text-sm uppercase tracking-widest text-neutral-400">Countries Served</p>
          </div>
          {/* Stat 2 */}
          <div className="p-8 border border-white/10 hover:border-gold-500/50 transition-colors duration-500 group reveal" style={{ transitionDelay: '100ms' }}>
            <TrendingUp className="w-10 h-10 text-gold-500 mx-auto mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-5xl font-serif mb-2">500+</h3>
            <p className="text-sm uppercase tracking-widest text-neutral-400">Enterprise Partners</p>
          </div>
          {/* Stat 3 */}
          <div className="p-8 border border-white/10 hover:border-gold-500/50 transition-colors duration-500 group reveal" style={{ transitionDelay: '200ms' }}>
            <ArrowRight className="w-10 h-10 text-gold-500 mx-auto mb-6 -rotate-45 group-hover:rotate-0 transition-transform" />
            <h3 className="text-5xl font-serif mb-2">4 Hubs</h3>
            <p className="text-sm uppercase tracking-widest text-neutral-400">Global Logistics Centers</p>
          </div>
        </div>

        <div className="mt-20 text-center reveal">
          <p className="text-neutral-400 max-w-2xl mx-auto mb-8 font-light">
            Strategic presence in Singapore, Dubai, Hamburg, and Mumbai allows us to execute complex trade routes with speed and efficiency.
          </p>
          <button className="text-white border-b border-gold-500 pb-1 hover:text-gold-500 transition-colors uppercase text-xs tracking-widest">
            View Network Map
          </button>
        </div>
      </div>
    </section>
  );
}

