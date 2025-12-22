import { Leader } from '../types';

interface LeadershipProps {
  leaders: Leader[];
}

export default function Leadership({ leaders }: LeadershipProps) {
  return (
    <section id="leadership" className="py-24 bg-neutral-50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 reveal">
          <span className="text-gold-600 font-bold tracking-[0.2em] text-sm uppercase mb-4 block">Our Governance</span>
          <h2 className="text-4xl md:text-5xl font-serif text-neutral-900">Visionary Leadership</h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, index) => (
            <div key={index} className="group reveal" style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="relative overflow-hidden mb-6 aspect-[3/4]">
                <img 
                  src={leader.image} 
                  alt={leader.name}
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/10 transition-all duration-300"></div>
              </div>
              <h3 className="text-xl font-serif text-neutral-900 mb-1">{leader.name}</h3>
              <p className="text-xs uppercase tracking-widest text-gold-600 font-bold mb-3">{leader.role}</p>
              <p className="text-neutral-500 font-light text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">
                {leader.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

