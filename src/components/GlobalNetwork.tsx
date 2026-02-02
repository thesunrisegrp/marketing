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

        <div className="max-w-4xl mx-auto text-center reveal">
          <div className="mb-8">
            <p className="text-2xl md:text-3xl font-serif text-white mb-6">
              Strategic Presence: <span className="text-gold-500">UK, USA, DUBAI, AUSTRALIA, CHINA</span>
            </p>
            <p className="text-lg text-neutral-300 font-light leading-relaxed max-w-3xl mx-auto">
              These allow us to have your requirements quickly and ensure seamless supply chain coordination cater with business needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

