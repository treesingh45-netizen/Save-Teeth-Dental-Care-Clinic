import { Link } from 'react-router-dom';
import { ArrowRight, Stethoscope, Sparkles, ShieldPlus, Zap, Syringe, Gem, Star, MessageSquare } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'General Dental Checkups',
      desc: 'Comprehensive oral examinations to detect and prevent dental issues early. Includes digital X-rays and personalized treatment plans.',
      icon: <Stethoscope size={32} className="text-blue-600" />
    },
    {
      title: 'Teeth Cleaning & Scaling',
      desc: 'Professional removal of plaque and tartar buildup to prevent gum disease and maintain a bright, healthy smile.',
      icon: <Sparkles size={32} className="text-blue-600" />
    },
    {
      title: 'Tooth Fillings',
      desc: 'Tooth-colored composite fillings to restore decayed or damaged teeth, blending seamlessly with your natural smile.',
      icon: <ShieldPlus size={32} className="text-blue-600" />
    },
    {
      title: 'Root Canal Treatment',
      desc: 'Painless endodontic therapy to save severely infected or damaged teeth, relieving pain and restoring function.',
      icon: <Zap size={32} className="text-blue-600" />
    },
    {
      title: 'Tooth Extraction',
      desc: 'Safe and gentle removal of problematic teeth, including wisdom teeth, with a focus on patient comfort and quick recovery.',
      icon: <Syringe size={32} className="text-blue-600" />
    },
    {
      title: 'Cosmetic Dentistry',
      desc: 'Enhance your smile with veneers, bonding, and smile makeovers tailored to your unique facial features.',
      icon: <Gem size={32} className="text-blue-600" />
    },
    {
      title: 'Teeth Whitening',
      desc: 'Professional whitening treatments to safely and effectively remove stains and brighten your smile by several shades.',
      icon: <Star size={32} className="text-blue-600" />
    },
    {
      title: 'Dental Consultation',
      desc: 'Expert advice and second opinions on complex dental issues, helping you make informed decisions about your oral health.',
      icon: <MessageSquare size={32} className="text-blue-600" />
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-blue-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Dental Services</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We offer a comprehensive range of dental treatments using the latest technology to ensure you receive the best possible care.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-all duration-300 group">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{service.desc}</p>
                <Link to="/contact" className="text-blue-600 font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
                  Book this service <ArrowRight size={18} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to improve your smile?</h2>
          <p className="text-blue-100 text-lg mb-8">
            Schedule a consultation today and let our expert team take care of your dental health.
          </p>
          <Link
            to="/contact"
            className="inline-flex justify-center items-center bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-colors shadow-lg text-lg"
          >
            Book an Appointment
          </Link>
        </div>
      </section>
    </div>
  );
}
