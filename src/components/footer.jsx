import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

// Inline SVG replacement for Github icon
const GithubIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    width="20" 
    height="20" 
    stroke="currentColor" 
    strokeWidth="2" 
    fill="none" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

// Inline SVG replacement for Instagram icon
const InstagramIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    width="20" 
    height="20" 
    stroke="currentColor" 
    strokeWidth="2" 
    fill="none" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-ecoGreen-dark to-green-950 text-white pt-16 pb-8 mt-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Info Column */}
          <div className="md:col-span-5 text-center md:text-left">
            <h2 className="text-3xl font-display font-extrabold tracking-tight bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent">
              Urban Harvest Hub
            </h2>
            <p className="mt-4 text-sm text-green-100/80 leading-relaxed max-w-sm">
              Empowering urban communities with sustainable growing methods, organic products, and local ecological initiatives for a greener tomorrow.
            </p>
            
            {/* Social Icons */}
            <div className="flex justify-center md:justify-start gap-4 mt-6">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer" 
                className="bg-white/10 hover:bg-white/20 p-2.5 rounded-xl transition duration-200"
                aria-label="GitHub"
              >
                <GithubIcon />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                className="bg-white/10 hover:bg-white/20 p-2.5 rounded-xl transition duration-200"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a 
                href="#" 
                className="bg-white/10 hover:bg-white/20 p-2 rounded-xl transition duration-200"
                aria-label="Website"
              >
                <Globe size={20} />
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div className="md:col-span-3 text-center md:text-left">
            <h3 className="font-display font-bold text-lg mb-4 text-white uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm text-green-100/80">
              <li>
                <Link to="/" className="hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors duration-200">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-white transition-colors duration-200">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/workshops" className="hover:text-white transition-colors duration-200">
                  Workshops
                </Link>
              </li>
              <li>
                <Link to="/booking" className="hover:text-white transition-colors duration-200">
                  Book Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter / Contact Column */}
          <div className="md:col-span-4 text-center md:text-left">
            <h3 className="font-display font-bold text-lg mb-4 text-white uppercase tracking-wider">
              Stay Connected
            </h3>
            <p className="text-sm text-green-100/80 mb-4">
              Subscribe to our newsletter for weekly urban farming tips and event updates.
            </p>
            
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto md:mx-0">
              <input
                type="email"
                placeholder="Enter email address"
                required
                className="bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-sm text-white placeholder-green-100/50 focus:outline-none focus:ring-2 focus:ring-white/50 flex-grow"
              />
              <button 
                type="submit" 
                className="bg-white text-ecoGreen-dark hover:bg-green-50 font-semibold px-4 py-2.5 rounded-xl text-sm transition duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
          
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-green-100/60">
          <p>
            © 2026 Urban Harvest Hub. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-white transition duration-200">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;