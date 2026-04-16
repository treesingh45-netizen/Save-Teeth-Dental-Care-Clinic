import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <img 
                src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR_uTPOV7XXkxxARKSEQBmKp9Mv4HBKPn-5eRhLGASdQAz5gn8o" 
                alt="Save Teeth Logo" 
                className="w-12 h-12 object-contain"
                referrerPolicy="no-referrer"
              />
              <span className="font-bold text-xl text-slate-900 leading-tight">Save Teeth<br/><span className="text-sm font-medium text-blue-600">Dental Care Clinic</span></span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`${
                  isActive(link.path)
                    ? 'text-blue-600 font-semibold'
                    : 'text-slate-600 hover:text-blue-600'
                } transition-colors duration-200`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:03123647509"
              className="flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full font-medium hover:bg-blue-100 transition-colors"
            >
              <Phone size={18} />
              <span>03123647509</span>
            </a>
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-blue-700 transition-colors shadow-sm shadow-blue-200"
            >
              Book Appointment
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full left-0 shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`${
                  isActive(link.path)
                    ? 'bg-blue-50 text-blue-600 font-semibold'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-blue-600'
                } block px-3 py-3 rounded-md text-base`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-3 px-3">
              <a
                href="tel:03123647509"
                className="flex items-center justify-center gap-2 bg-blue-50 text-blue-700 px-4 py-3 rounded-lg font-medium"
              >
                <Phone size={18} />
                <span>Call 03123647509</span>
              </a>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center bg-blue-600 text-white px-4 py-3 rounded-lg font-medium shadow-sm"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
