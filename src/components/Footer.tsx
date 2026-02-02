'use client';

import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [result, setResult] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSunriseCaresSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult('Sending....');
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    formData.append('access_key', 'bd5334d8-3860-4e87-b307-eecaffffb4c7');
    formData.append('subject', 'Sunrise Cares Newsletter Subscription');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult('Successfully subscribed!');
        setEmail('');
        (event.target as HTMLFormElement).reset();
        setTimeout(() => {
          setResult('');
        }, 5000);
      } else {
        setResult('Error. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setResult('Error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-neutral-900 text-white pt-24 pb-12 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/company.png"
                alt="The Sunrise Group Logo"
                className="h-8 w-auto"
              />
              <span className="font-serif text-lg tracking-widest font-bold">THE SUNRISE GROUP</span>
            </div>
            <p className="text-neutral-500 text-sm leading-relaxed mb-4">
              Global leaders in chemical, textile, and engineering trade. Building bridges since 1985.
            </p>
            <div className="text-neutral-400 text-sm leading-relaxed space-y-4">
              <div>
                <p className="text-neutral-300 font-semibold mb-1">Registered Address</p>
                <p>No. 2, 86 A Pearl Heaven, Chapel Road,</p>
                <p>Bandra (West),</p>
                <p>Mumbai – 400050, India</p>
              </div>
              <div>
                <p className="text-neutral-300 font-semibold mb-1">Office Address</p>
                <p>Ground Floor, Building No. 5,</p>
                <p>Ashirwad Industrial Premises Co‑operative Society Ltd.,</p>
                <p>Ram Mandir Road,</p>
                <p>Mumbai – 400104, India</p>
              </div>
            </div>
          </div>

          {/* Links */}
          {/* Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white mb-6 font-bold">Company</h4>
            <ul className="space-y-4 text-neutral-400 text-sm">
              <li><a href="#about" className="hover:text-gold-500 transition-colors">About Us</a></li>
              <li><a href="#leadership" className="hover:text-gold-500 transition-colors">Leadership</a></li>
              <li><a href="/sunrise-cares" className="hover:text-gold-500 transition-colors">Sunrise Cares</a></li>
              <li><a href="#" className="hover:text-gold-500 transition-colors">Compliance</a></li>
              <li><a href="#contact" className="hover:text-gold-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Sunrise Cares / Updates */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-xs uppercase tracking-widest text-white mb-6 font-bold">Reach out for Sunrise Cares</h4>
            <p className="text-neutral-400 text-sm mb-6 max-w-sm">
              Join our initiative to make a difference. Stay updated on our latest community projects and sustainability efforts.
            </p>
            <form onSubmit={handleSunriseCaresSubmit} className="flex flex-col gap-2 max-w-xs">
              <div className="flex border-b border-neutral-700 pb-2">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  className="bg-transparent border-none outline-none text-white w-full placeholder-neutral-600 text-sm"
                  required
                  disabled={isSubmitting}
                />
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="text-gold-500 uppercase text-xs font-bold hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Joining...' : 'Join'}
                </button>
              </div>
              {result && (
                <p className={`text-xs ${result.includes('Successfully') ? 'text-gold-500' : 'text-red-400'}`}>
                  {result}
                </p>
              )}
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-neutral-600 text-xs">
          <p>&copy; {new Date().getFullYear()} The Sunrise Group. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a 
              href="https://www.linkedin.com/company/the-sunrise-grp/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="https://x.com/thesunrisegrp?s=21" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Twitter
            </a>
            <a 
              href="https://www.instagram.com/thesunrisegrp?igsh=MWYxbXduMWhobHZiaQ%3D%3D&utm_source=qr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Instagram
            </a>
            <a 
              href="https://www.facebook.com/share/1BkotwpYcx/?mibextid=wwXIfr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

