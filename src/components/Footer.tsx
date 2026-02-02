export default function Footer() {
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
            <form className="flex border-b border-neutral-700 pb-2 max-w-xs">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-transparent border-none outline-none text-white w-full placeholder-neutral-600 text-sm"
              />
              <button type="submit" className="text-gold-500 uppercase text-xs font-bold hover:text-white transition-colors">Join</button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-neutral-600 text-xs">
          <p>&copy; {new Date().getFullYear()} The Sunrise Group. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">LinkedIn</a>
            <a href="#" className="hover:text-white">Twitter</a>
            <a href="#" className="hover:text-white">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

