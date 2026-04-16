import { Link } from 'react-router-dom';
import { ArrowRight, Star, Clock, MapPin, Phone, CheckCircle2 } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/15576515/pexels-photo-15576515.jpeg?auto=compress&cs=tinysrgb&w=1920")',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-white/80"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-6">
                <Star size={16} className="fill-blue-700" />
                <span>5.0 Google Rated Dental Clinic</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                Trusted Dental Care for a <span className="text-blue-600">Healthy, Beautiful Smile.</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 max-w-xl">
                Experience world-class dental treatments with our expert team. We use modern equipment to ensure your comfort and the best possible results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex justify-center items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200 text-lg"
                >
                  Book Appointment
                  <ArrowRight size={20} />
                </Link>
                <a
                  href="tel:03123647509"
                  className="inline-flex justify-center items-center gap-2 bg-white text-blue-700 border-2 border-blue-100 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors text-lg"
                >
                  <Phone size={20} />
                  Call Now
                </a>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-blue-200 rounded-full blur-3xl opacity-50 transform translate-x-10 translate-y-10"></div>
              <img
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Modern Dental Clinic"
                className="relative rounded-3xl shadow-2xl object-cover h-[500px] w-full"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">Expert Doctors</p>
                    <p className="text-xl font-bold text-slate-900">10+ Years Exp.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Dental Services</h2>
            <p className="text-lg text-slate-600">Comprehensive care for all your dental needs under one roof.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'General Checkups', desc: 'Regular checkups to maintain your oral health and prevent future issues.' },
              { title: 'Teeth Cleaning', desc: 'Professional scaling and polishing for a brighter, healthier smile.' },
              { title: 'Root Canal', desc: 'Painless root canal treatments to save your natural teeth.' }
            ].map((service, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-2xl hover:shadow-lg transition-shadow border border-slate-100">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                  <CheckCircle2 size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6">{service.desc}</p>
                <Link to="/services" className="text-blue-600 font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
                  Learn more <ArrowRight size={18} />
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="inline-flex items-center justify-center bg-slate-900 text-white px-8 py-3.5 rounded-full font-medium hover:bg-slate-800 transition-colors">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Our Patients Say</h2>
              <p className="text-lg text-slate-600">Don't just take our word for it. See why patients trust us with their smiles.</p>
            </div>
            <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm border border-slate-100">
              <span className="text-2xl font-bold text-slate-900">5.0</span>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} size={20} className="fill-current" />)}
              </div>
              <span className="text-slate-500 font-medium ml-2">Google Reviews</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Ali Raza', text: 'Excellent experience! Dr. Noshaba is very professional and the clinic is extremely clean. Highly recommended.' },
              { name: 'Sara Ahmed', text: 'Best dental clinic in Gulshan. Got my scaling done, very gentle and painless procedure.' },
              { name: 'Usman Khan', text: 'Very satisfied with the root canal treatment. The staff is polite and doctors are highly skilled.' }
            ].map((review, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-current" />)}
                </div>
                <p className="text-slate-700 mb-6 italic">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{review.name}</p>
                    <p className="text-xs text-slate-500">Verified Patient</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section (Timings & Location) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 bg-slate-900 rounded-3xl overflow-hidden shadow-2xl">
            <div className="p-10 md:p-16 text-white">
              <h2 className="text-3xl font-bold mb-8">Visit Our Clinic</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-400 shrink-0">
                    <Clock size={24} />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold mb-4">Clinic Timings</h3>
                    <ul className="space-y-3 text-slate-300">
                      <li className="flex justify-between border-b border-slate-700 pb-2">
                        <span>Monday - Thursday</span>
                        <span className="font-medium text-white">5:30 PM – 10 PM</span>
                      </li>
                      <li className="flex justify-between border-b border-slate-700 pb-2">
                        <span className="text-red-400">Friday</span>
                        <span className="text-red-400 font-medium">Closed</span>
                      </li>
                      <li className="flex justify-between pb-2">
                        <span>Saturday - Sunday</span>
                        <span className="font-medium text-white">5:30 PM – 10 PM</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-400 shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Location</h3>
                    <p className="text-slate-300 leading-relaxed">
                      W472+QHJ, NIPA Flyover, Block 11<br />
                      Gulshan-e-Iqbal, Karachi, Pakistan
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-full min-h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.995874797071!2d67.0984183!3d24.9126383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f32a0f338d1%3A0x6713917866a1e36!2sNIPA%20Chowrangi!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Clinic Location"
                className="grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
