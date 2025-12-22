'use client';

import { useEffect } from 'react';
import { Heart, BookOpen, ArrowRight, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function SunriseCares() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
      reveals.forEach((el) => {
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;
        const revealPoint = 100;
        
        if (revealTop < windowHeight - revealPoint) {
          el.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
    
    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans bg-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white py-4 shadow-[0_2px_20px_rgba(0,0,0,0.05)]">
        <div className="max-w-[1500px] mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-4 group cursor-pointer">
            <img 
              src="/company.png" 
              alt="The Sunrise Group Logo" 
              className="h-10 w-auto"
            />
            <span className="font-serif text-xl tracking-widest font-bold text-neutral-900 hidden md:block">
              THE SUNRISE GROUP
            </span>
          </Link>
          <Link 
            href="/"
            className="flex items-center gap-2 text-neutral-600 hover:text-gold-600 transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-linear-to-b from-gold-50 to-white">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gold-500 mb-8 animate-fade-in">
            <Heart className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-neutral-900 mb-6 animate-fade-in-up">
            Sunrise <span className="text-gold-600 italic">Cares</span>
          </h1>
          <p className="text-xl text-neutral-500 font-light max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            An expression of what The Sunrise Group stands for—work that respects and uplifts the people and places it touches.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="max-w-[900px] mx-auto px-6 lg:px-12">
          {/* About Sunrise Cares */}
          <div className="reveal mb-20">
            <p className="text-lg text-neutral-600 font-light leading-relaxed mb-6">
              Sunrise Cares is an expression of what The Sunrise Group stands for, not a formal programme or obligation. It grows from a basic belief: work is meaningful only when it also respects and uplifts the people and places it touches.
            </p>
            <p className="text-lg text-neutral-600 font-light leading-relaxed mb-6">
              The effort is quiet and evolving. There is no fixed template or headline target. Instead, Sunrise Cares moves step by step, responding to needs that feel real, and taking up initiatives where encouragement, time, or resources from the Group can genuinely help someone move forward.
            </p>
            <p className="text-lg text-neutral-600 font-light leading-relaxed">
              Through Sunrise Cares, The Sunrise Group chooses to stay close to people's journeys—listening, learning, and contributing where it can, with sincerity and respect.
            </p>
          </div>

          {/* Divider */}
          <div className="reveal flex items-center justify-center mb-20">
            <div className="h-px bg-neutral-200 flex-1"></div>
            <div className="px-6">
              <Heart className="w-6 h-6 text-gold-500" />
            </div>
            <div className="h-px bg-neutral-200 flex-1"></div>
          </div>

          {/* Mission Shiksha Jyoti */}
          <div className="reveal mb-20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-gold-50 flex items-center justify-center">
                <BookOpen className="w-7 h-7 text-gold-600" />
              </div>
              <div>
                <span className="text-gold-600 font-bold tracking-[0.2em] text-xs uppercase block mb-1">Initiative</span>
                <h2 className="text-3xl md:text-4xl font-serif text-neutral-900">Mission Shiksha Jyoti</h2>
              </div>
            </div>
            
            <div className="pl-0 md:pl-18">
              <p className="text-lg text-neutral-600 font-light leading-relaxed mb-6">
                Mission Shiksha Jyoti is one of the first initiatives to take shape under Sunrise Cares. It focuses on learning and guidance, especially for students and young individuals who may be talented and sincere, but short on support or exposure at the right moments.
              </p>
              <p className="text-lg text-neutral-600 font-light leading-relaxed mb-6">
                The mission is built on a simple thought: learning is not just about marks or degrees. It is often the spark that builds self-belief, dignity, and the courage to dream a little bigger. Mission Shiksha Jyoti aims to be present at those sensitive points—offering guidance, clarity, or even just a bit of encouragement that tells someone, "what you are doing matters, keep going."
              </p>
              <p className="text-lg text-neutral-600 font-light leading-relaxed">
                Every interaction under Shiksha Jyoti is kept small, human, and respectful. The focus is less on numbers and more on whether what was done actually made a difference to someone's day, decision, or direction.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="reveal flex items-center justify-center mb-20">
            <div className="h-px bg-neutral-200 flex-1"></div>
            <div className="px-6">
              <ArrowRight className="w-6 h-6 text-gold-500" />
            </div>
            <div className="h-px bg-neutral-200 flex-1"></div>
          </div>

          {/* The Road Ahead */}
          <div className="reveal">
            <span className="text-gold-600 font-bold tracking-[0.2em] text-sm uppercase mb-4 block">Looking Forward</span>
            <h2 className="text-3xl md:text-4xl font-serif text-neutral-900 mb-8">The Road Ahead</h2>
            
            <p className="text-lg text-neutral-600 font-light leading-relaxed mb-6">
              Sunrise Cares is still at the beginning of its journey. Mission Shiksha Jyoti is the first step, not the final shape. As the Group understands more about the needs around it, new efforts may emerge—whether in learning, livelihoods, or other areas where a steady hand can be useful.
            </p>
            <p className="text-lg text-neutral-600 font-light leading-relaxed mb-6">
              Nothing is done for show; there is no rush to add new names or verticals. The intention is to move carefully, add only what can be sustained, and remain honest about the impact being created.
            </p>
            <p className="text-lg text-neutral-700 font-medium leading-relaxed italic border-l-4 border-gold-500 pl-6 py-2 bg-gold-50/50">
              In time, Sunrise Cares will be defined not by how many initiatives it carries, but by how quietly and consistently it has stood beside people when it mattered.
            </p>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-[900px] mx-auto px-6 lg:px-12 text-center">
          <h3 className="text-2xl md:text-3xl font-serif text-white mb-6">
            Want to learn more about our initiatives?
          </h3>
          <p className="text-neutral-400 mb-8 font-light">
            Reach out to us to know how you can be a part of Sunrise Cares.
          </p>
          <Link 
            href="/#contact"
            className="inline-flex items-center gap-3 bg-gold-500 text-white px-8 py-4 font-bold tracking-[0.15em] uppercase text-sm hover:bg-gold-600 transition-colors"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="py-8 bg-neutral-950 text-center">
        <p className="text-neutral-500 text-sm">
          &copy; {new Date().getFullYear()} The Sunrise Group. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
