'use client';

import { useState } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { DivisionType } from '../types';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [selectedDivision, setSelectedDivision] = useState<string>(DivisionType.CHEMICALS);
  const [hasSent, setHasSent] = useState(false);
  const [result, setResult] = useState('');

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult('Sending....');
    
    const formData = new FormData(event.currentTarget);
    formData.append('access_key', 'bd5334d8-3860-4e87-b307-eecaffffb4c7');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      
      if (data.success) {
        setResult('Form Submitted Successfully');
        setHasSent(true);
        setName('');
        setEmail('');
        setMessage('');
        setSelectedDivision(DivisionType.CHEMICALS);
        (event.target as HTMLFormElement).reset();
        setTimeout(() => {
          setHasSent(false);
          setResult('');
        }, 5000);
      } else {
        setResult('Error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setResult('Error');
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-white relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">

        {/* Left: Info */}
        <div className="reveal">
          <h2 className="text-4xl md:text-6xl font-serif text-neutral-900 mb-8 leading-tight">
            Get in touch
          </h2>

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
              <p className="text-lg font-serif text-neutral-800 mb-2">Ground Floor, Building No. 5,</p>
              <p className="text-lg font-serif text-neutral-800 mb-2">Ashirwad Industrial Premises Co‑operative Society Ltd.,</p>
              <p className="text-lg font-serif text-neutral-800 mb-2">Ram Mandir Road,</p>
              <p className="text-lg font-serif text-neutral-800">Mumbai – 400104, India</p>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest text-neutral-400 mb-2">General Inquiries</h4>
              <a href="mailto:info@thesunrisegrp.com" className="text-2xl font-serif text-neutral-800 hover:text-gold-600 transition-colors border-b border-transparent hover:border-gold-600 block mb-1">
                info@thesunrisegrp.com
              </a>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest text-neutral-400 mb-2">Call Us</h4>
              <p className="text-2xl font-serif text-neutral-800">+91 8454847259</p>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="bg-neutral-50 p-10 lg:p-12 reveal">
          {!hasSent ? (
            <form onSubmit={onSubmit} className="space-y-8">
              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-500 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full bg-transparent border-b border-neutral-300 text-neutral-900 py-3 text-lg font-serif focus:border-gold-500 focus:outline-none placeholder-neutral-300 font-light"
                  required
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-500 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="w-full bg-transparent border-b border-neutral-300 text-neutral-900 py-3 text-lg font-serif focus:border-gold-500 focus:outline-none placeholder-neutral-300 font-light"
                  required
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-500 mb-2">I am interested in</label>
                <div className="relative">
                  <select
                    name="division"
                    value={selectedDivision}
                    onChange={(e) => setSelectedDivision(e.target.value)}
                    className="w-full bg-transparent border-b border-neutral-300 text-neutral-900 py-3 text-lg font-serif focus:border-gold-500 focus:outline-none appearance-none rounded-none"
                  >
                    <option value={DivisionType.CHEMICALS}>Chemical Goods</option>
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
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us briefly about your requirements..."
                  className="w-full bg-transparent border-b border-neutral-300 text-neutral-900 py-3 min-h-[100px] focus:border-gold-500 focus:outline-none resize-none placeholder-neutral-300 font-light text-lg"
                  required
                />
              </div>

              {result && (
                <div className={`text-sm ${result.includes('Successfully') ? 'text-gold-600' : 'text-red-600'}`}>
                  {result}
                </div>
              )}

              <div className="pt-6">
                <button
                  type="submit"
                  disabled={result === 'Sending....'}
                  className="w-full bg-neutral-900 text-white py-5 px-8 font-bold tracking-[0.2em] uppercase hover:bg-gold-600 transition-colors flex items-center justify-between group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {result === 'Sending....' ? 'Sending...' : 'Send Inquiry'}
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
