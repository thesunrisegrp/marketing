import { Award, ShieldCheck, Check } from 'lucide-react';
import { Certification } from '../types';

interface QualityCertificationsProps {
  certifications: Certification[];
}

export default function QualityCertifications({ certifications }: QualityCertificationsProps) {
  return (
    <section id="quality" className="py-24 bg-white border-b border-neutral-100">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row gap-16">
          {/* Text Side */}
          <div className="md:w-1/3 reveal">
            <span className="text-gold-600 font-bold tracking-[0.2em] text-sm uppercase mb-4 block">Our Standards</span>
            <h2 className="text-4xl font-serif text-neutral-900 mb-6">Uncompromising Quality Assurance</h2>
            <p className="text-neutral-600 font-light text-lg leading-relaxed mb-8">
              At The Sunrise Group, quality is not a department; it is a corporate discipline. We adhere to the strictest global standards to ensure that every shipment meets the regulatory frameworks of the destination country.
            </p>
            <div className="flex items-center gap-4 text-neutral-900 font-bold text-sm tracking-widest uppercase">
              <ShieldCheck className="w-6 h-6 text-gold-500" />
              <span>Zero Tolerance Policy</span>
            </div>
          </div>

          {/* Certificates Grid */}
          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8 reveal">
            {certifications.map((cert) => (
              <div key={cert.id} className="p-8 bg-neutral-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-neutral-100 group">
                <div className="flex items-start justify-between mb-4">
                  <Award className="w-8 h-8 text-neutral-300 group-hover:text-gold-500 transition-colors" />
                  <Check className="w-5 h-5 text-gold-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-xl font-serif text-neutral-900 mb-2">{cert.title}</h3>
                <p className="text-neutral-500 font-light text-sm">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

