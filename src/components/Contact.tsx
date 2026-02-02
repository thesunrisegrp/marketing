'use client';

import { useState } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { DivisionType } from '../types';

export default function Contact() {
  const [message, setMessage] = useState('');
  const [selectedDivision, setSelectedDivision] = useState<string>(DivisionType.CHEMICALS);
  const [hasSent, setHasSent] = useState(false);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSent(true);
    setTimeout(() => {
        setHasSent(false);
        setMessage('');
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-white relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
        
        {/* Left: Info */}
        <div className="reveal">
          <span className="text-gold-600 font-bold tracking-[0.2em] text-sm uppercase mb-4 block">Get in Touch</span>
          <h2 className="text-4xl md:text-6xl font-serif text-neutral-900 mb-8 leading-tight">
            Ready to Expand Your <span className="italic text-gold-600">Global Reach?</span>
          </h2>
          <p className="text-xl text-neutral-500 font-light mb-12 max-w-md">
            Partner with The Sunrise Group for reliable exports, logistics, and market expertise.
          </p>

          <div className="space-y-10">
            <div>
              <h4 className="text-xs uppercase tracking-widest text-neutral-400 mb-2">Registered Address</h4>
              <p className="text-lg font-serif text-neutral-800 mb-2">No. 2, 86 A Pearl Heaven, Chapel Road,</p>
              <p className="text-lg font-serif text-neutral-800 mb-2">Bandra (West),</p>
              <p className="text-lg font-serif text-neutral-800 mb-3">Mumbai – 400050, India</p>
              <p className="text-sm text-neutral-500 font-light italic">Kindly direct all official correspondence and documentation to this address.</p>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest text-neutral-400 mb-2">Office Address</h4>
              <p className="text-lg font-serif text-neutral-800 mb-2">Ground Floor, Office No. 40, Building No. 5,</p>
              <p className="text-lg font-serif text-neutral-800 mb-2">Ashirwad Industrial Premises Co‑operative Society Ltd.,</p>
              <p className="text-lg font-serif text-neutral-800 mb-2">Ram Mandir Road,</p>
              <p className="text-lg font-serif text-neutral-800">Mumbai – 400104, India</p>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest text-neutral-400 mb-2">Email Us</h4>
              <a href="mailto:info@thesunrisegrp.com" className="text-2xl font-serif text-neutral-800 hover:text-gold-600 transition-colors border-b border-transparent hover:border-gold-600">
                info@thesunrisegrp.com
              </a>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest text-neutral-400 mb-2">Call Us</h4>
              <p className="text-2xl font-serif text-neutral-800">+91-9769022665</p>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="bg-neutral-50 p-10 lg:p-12 reveal">
          {!hasSent ? (
            <form onSubmit={handleSend} className="space-y-8">
              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-500 mb-2">I am interested in</label>
                <div className="relative">
                  <select 
                    value={selectedDivision}
                    onChange={(e) => setSelectedDivision(e.target.value)}
                    className="w-full bg-transparent border-b border-neutral-300 text-neutral-900 py-3 text-lg font-serif focus:border-gold-500 focus:outline-none appearance-none rounded-none"
                  >
                    <option value={DivisionType.CHEMICALS}>Chemical Solutions</option>
                    <option value={DivisionType.TEXTILE}>Textile Exports</option>
                    <option value={DivisionType.ENGINEERING}>Engineering Goods</option>
                    <option value="General">General Partnership</option>
                  </select>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-400">
                    <ArrowRight className="w-5 h-5 rotate-90" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-500 mb-2">Your Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us briefly about your requirements..."
                  className="w-full bg-transparent border-b border-neutral-300 text-neutral-900 py-3 min-h-[100px] focus:border-gold-500 focus:outline-none resize-none placeholder-neutral-300 font-light text-lg"
                  required
                />
              </div>

              <div className="pt-6">
                <button 
                  type="submit"
                  className="w-full bg-neutral-900 text-white py-5 px-8 font-bold tracking-[0.2em] uppercase hover:bg-gold-600 transition-colors flex items-center justify-between group"
                >
                  Send Inquiry
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                </button>
              </div>
            </form>
          ) : (
            <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center animate-fade-in-up">
               <div className="w-20 h-20 rounded-full bg-gold-50 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-gold-600" />
               </div>
               <h3 className="text-3xl font-serif text-neutral-900 mb-3">Inquiry Sent</h3>
               <p className="text-neutral-500 max-w-xs">Thank you for reaching out. A representative will contact you shortly.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
