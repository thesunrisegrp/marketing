import { Leaf } from 'lucide-react';

export default function Sustainability() {
  return (
    <section id="sustainability" className="py-24 bg-gold-50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row gap-16 items-center">
        <div className="w-full md:w-1/2 relative reveal">
          <img 
            src="https://images.unsplash.com/photo-1473116763249-5643344cdf57?auto=format&fit=crop&q=80&w=1000" 
            alt="Sustainable Cotton" 
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute inset-0 border-[16px] border-white/50 m-4 pointer-events-none"></div>
        </div>
        <div className="w-full md:w-1/2 reveal">
          <Leaf className="w-12 h-12 text-gold-600 mb-6" />
          <h2 className="text-4xl font-serif text-neutral-900 mb-6">Growth with Conscience</h2>
          <p className="text-neutral-600 font-light leading-relaxed mb-6">
            Sustainability isn't just a buzzword for us; it's a metric of success. From sourcing BCI-certified cottons to optimizing shipping routes for lower carbon footprints, we are committed to responsible trade.
          </p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3 text-neutral-700">
              <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
              Eco-friendly Dyeing Processes
            </li>
            <li className="flex items-center gap-3 text-neutral-700">
              <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
              Ethical Labor Practices
            </li>
            <li className="flex items-center gap-3 text-neutral-700">
              <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
              Circular Economy Initiatives
            </li>
          </ul>
          <button className="px-8 py-4 border border-neutral-900 text-neutral-900 uppercase text-xs tracking-widest font-bold hover:bg-neutral-900 hover:text-white transition-colors">
            Read Our 2024 ESG Report
          </button>
        </div>
      </div>
    </section>
  );
}

