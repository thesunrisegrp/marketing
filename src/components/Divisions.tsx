'use client';

import { useState } from 'react';
import { DivisionType, DivisionData } from '../types';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const divisions: DivisionData[] = [
  {
    id: DivisionType.CHEMICALS,
    title: "Chemicals",
    description: "Sourcing high-purity industrial chemicals, solvents, and colorants. Our network ensures strict regulatory compliance and consistent quality across all product lines.",
    capabilities: ["Industrial Solvents", "Agrochemical Intermediates", "Pharmaceutical APIs", "Specialty Coatings"],
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=2000",
    iconName: "flask",
    productCategories: [
      {
        title: "Products",
        items: [
            "Copper Phthalocyanine Crude", "Pigment Powders", "Industrial Solvents",
            "Food Colours", "Cosmetic Pigments", "Fluorescent Dyes",
            "Lake Colours", "Inkjet Dyes", "Acid Dyes",
            "Direct Dyes", "Solvent Dyes", "Reactive Dyes",
            "Leather Dyes", "Basic Dyes", "Optical Brighteners",
            "Reactive Dyes (Vinyl Sulphone)", "Dye Intermediates", "Pigment Emulsions",
            "Fine Chemicals", "Pharmaceutical Intermediates", "Specialty Solvents",
            "Laboratory Chemicals", "Biological Stains", "Dehydrated Culture Media",
            "Analytical Reagents"
        ]
      }
    ]
  },
  {
    id: DivisionType.TEXTILE,
    title: "Yarns & Textiles",
    description: "Connecting global fashion markets with premium raw materials. From sustainable organic cottons to high-performance synthetic blends, we bridge the gap between mills and manufacturers.",
    capabilities: ["Organic Cotton Yarns", "Performance Fabrics", "Sustainable Dyes", "Technical Textiles"],
    image: "https://images.unsplash.com/photo-1630920501459-f3e99320c4a5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    iconName: "anchor",
    productCategories: [
      {
        title: "Products",
        items: [
            "100% Cotton Yarn", "Polyester Cotton Blended Yarn", "Knitted Fabrics",
            "100% Viscose Spun Yarn", "Polyester Spun Yarn", "Blended Yarns",
            "Viscose Embroidery Thread", "Trilobal Polyester", "Metallic Yarn",
            "Recycled Cotton Yarns", "Sustainable Knitting Yarns", "Open End Yarns",
            "Polyester Filament Yarns (PFY)", "Fully Drawn Yarn (FDY)", "Cotton Yarns",
            "Technical Textiles", "Bulk Continuous Filament (BCF)", "Industrial Yarns",
            "Textile Grade Nylon", "Bed Linen", "Bath Linen",
            "Copier Paper", "Yarn & Chemicals", "Melange Yarn",
            "Dyed Yarn", "Modal & Lyocell Blends", "Home Textiles",
            "Jacquard Fabrics", "Faux Silk", "Christmas Ribbons", "Occasion Fabrics"
        ]
      }
    ]
  },
  {
    id: DivisionType.ENGINEERING,
    title: "Engineering",
    description: "Delivering precision-engineered components and heavy machinery. Our logistics network ensures safe transport of oversized cargo and sensitive technological equipment.",
    capabilities: ["Precision Machinery", "Automotive Components", "Construction Equipment", "Electrical Fittings"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000", 
    iconName: "cpu",
    productCategories: [
        {
            title: "Products",
            items: [
                "Transmission Parts", "Engine Components",
                "Hydraulic Systems", "Industrial Cranes",
                "CNC Machined Parts", "Carbide Tools"
            ]
        }
    ]
  }
];

export default function Divisions() {
  const [activeDivision, setActiveDivision] = useState<DivisionType>(DivisionType.CHEMICALS);
  const activeData = divisions.find(d => d.id === activeDivision)!;

  return (
    <section id="divisions" className="py-24 bg-neutral-50 border-t border-neutral-200">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between reveal">
          <div>
             <span className="block text-gold-600 font-bold tracking-[0.2em] text-sm uppercase mb-3">Our Expertise</span>
             <h2 className="text-4xl md:text-5xl font-serif text-neutral-900">Divisions of Excellence</h2>
          </div>
          <p className="text-neutral-500 max-w-md mt-4 md:mt-0 font-light text-lg">
             We operate at the intersection of industry and innovation, delivering specialized solutions across three core sectors.
          </p>
        </div>

        {/* Custom Tab Navigation */}
        <div className="flex flex-wrap gap-12 border-b border-neutral-200 mb-16 reveal">
          {divisions.map((div) => (
            <button
              key={div.id}
              onClick={() => setActiveDivision(div.id)}
              className={`pb-6 text-sm md:text-lg uppercase tracking-widest font-bold transition-all duration-500 relative ${
                activeDivision === div.id
                  ? 'text-neutral-900'
                  : 'text-neutral-400 hover:text-neutral-600'
              }`}
            >
              {div.title}
              <span className={`absolute bottom-[-1px] left-0 h-[2px] bg-gold-500 transition-all duration-500 ease-out ${activeDivision === div.id ? 'w-full' : 'w-0'}`}></span>
            </button>
          ))}
        </div>

        {/* Content Area - Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Image Side */}
          <div className="lg:col-span-5 relative h-[500px] lg:h-auto overflow-hidden group reveal">
            <div className="absolute inset-0 bg-neutral-900/10 z-10 transition-opacity duration-500 group-hover:bg-neutral-900/0"></div>
            <img 
              key={activeData.image} // Key change forces re-render for animation
              src={activeData.image} 
              alt={activeData.title} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 animate-fade-in"
            />
          </div>

          {/* Text Side */}
          <div className="lg:col-span-7 flex flex-col reveal">
            <h3 className="text-3xl md:text-4xl font-serif text-neutral-900 mb-6 animate-fade-in-up">
              {activeData.title} Portfolio
            </h3>
            <p className="text-xl text-neutral-600 font-light leading-relaxed mb-10 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              {activeData.description}
            </p>
            
            {/* Product Categories List */}
            {activeData.productCategories && (
              <div className="space-y-12 mb-12 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                {activeData.productCategories.map((category, idx) => (
                  <div key={idx}>
                    <h4 className="text-xs uppercase tracking-widest text-gold-600 font-bold mb-6 border-b border-gold-200 pb-2">
                      {category.title}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                      {category.items.map((item, iIdx) => (
                        <div key={iIdx} className="flex items-start gap-3 group">
                           <CheckCircle2 className="w-4 h-4 text-gold-400 mt-1 flex-shrink-0 opacity-50 group-hover:opacity-100 transition-opacity" />
                           <span className="text-neutral-700 font-light text-lg group-hover:text-neutral-900 transition-colors">
                             {item}
                           </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-auto animate-fade-in-up" style={{ animationDelay: '300ms' }}>
               <button className="group flex items-center gap-3 text-sm uppercase tracking-widest font-bold text-neutral-900 hover:text-gold-600 transition-colors">
                  View Full Product Catalog
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
               </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
