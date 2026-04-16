import { Link } from 'react-router-dom';
import { MapPin, Phone, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img 
                src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR_uTPOV7XXkxxARKSEQBmKp9Mv4HBKPn-5eRhLGASdQAz5gn8o" 
                alt="Save Teeth Logo" 
                className="w-12 h-12 object-contain bg-white rounded-lg p-1"
                referrerPolicy="no-referrer"
              />
              <span className="font-bold text-xl text-white leading-tight">Save Teeth<br/><span className="text-sm font-medium text-blue-400">Dental Care Clinic</span></span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Trusted Dental Care for a Healthy, Beautiful Smile. We provide comprehensive dental services with modern equipment and expert care.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Our Services</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact & Booking</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-blue-500 shrink-0 mt-1" size={20} />
                <span>W472+QHJ, NIPA Flyover, Block 11 Gulshan-e-Iqbal, Karachi, Pakistan</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-blue-500 shrink-0" size={20} />
                <a href="tel:03123647509" className="hover:text-white transition-colors">03123647509</a>
              </li>
            </ul>
          </div>

          {/* Timings */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Clinic Timings</h3>
            <ul className="space-y-3">
              <li className="flex justify-between items-center border-b border-slate-800 pb-2">
                <span>Monday - Thursday</span>
                <span className="text-white">5:30 PM – 10 PM</span>
              </li>
              <li className="flex justify-between items-center border-b border-slate-800 pb-2">
                <span className="text-red-400">Friday</span>
                <span className="text-red-400 font-medium">Closed</span>
              </li>
              <li className="flex justify-between items-center pb-2">
                <span>Saturday - Sunday</span>
                <span className="text-white">5:30 PM – 10 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Save Teeth Dental Care Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
