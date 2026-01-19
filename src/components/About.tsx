import { Award } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Text Content */}
        <div className="order-2 lg:order-1 reveal">
          <span className="text-gold-600 font-bold tracking-[0.2em] text-sm uppercase mb-4 block">Our Story & Mission</span>
          <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-8 leading-tight">
            Our Legacy of Excellence
          </h2>
          <div className="space-y-6 text-neutral-600 font-light leading-relaxed text-lg">
            <p>
              The Sunrise Group was founded under the vision of <strong className="font-medium text-neutral-900">Mr. Kishore Kumar Waghela</strong>, whose foresight and dedication to collective growth laid the foundation of the enterprise. What began as a small tailoring venture has grown into a diversified group recognized for its integrity, resilience, and ability to adapt to global markets.
            </p>
            <p>
              Our success is the result of the hard work of the people who built it, creating a legacy of excellence that continues to thrive today. Guided by our mission, <strong className="font-medium text-neutral-900">to deliver quality and grow together in an interconnected world</strong>, we strive to build partnerships that stand the test of time.
            </p>
            <p>
              Every consignment reflects our commitment to quality, regulatory standards, and service excellence. More than just exports, we deliver confidence in trade, bridging domestic and international markets with transparency, dependability, and shared prosperity.
            </p>
          </div>

          <div className="mt-12 flex gap-12">
            <div>
              <h3 className="text-4xl font-serif text-neutral-900">50+</h3>
              <p className="text-xs uppercase tracking-wider text-neutral-500 mt-2">Years Experience</p>
            </div>
            <div>
              <h3 className="text-4xl font-serif text-neutral-900">1971</h3>
              <p className="text-xs uppercase tracking-wider text-neutral-500 mt-2">Since</p>
            </div>
          </div>
        </div>

        {/* Image Composition */}
        <div className="order-1 lg:order-2 relative reveal">
          {/* <div className="relative h-[600px] w-full overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000" 
              alt="Modern Architecture" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div> */}
          <div className="relative h-[600px] w-full overflow-hidden bg-neutral-100 flex items-center justify-center">
            <span className="text-neutral-400 italic">Image coming soon</span>
          </div>
          {/* Floating Badge */}
          {/* <div className="absolute -bottom-10 -left-10 bg-gold-500 p-8 hidden md:block">
            <div className="border border-neutral-900/20 w-full h-full p-6 flex flex-col items-center justify-center text-center">
              <Award className="w-8 h-8 text-white mb-2" />
              <span className="text-white font-serif text-xl">Star Export</span>
              <span className="text-white/80 text-xs uppercase tracking-widest mt-1">House Status</span>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

