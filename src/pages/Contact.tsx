import React, { useState } from 'react';
import { MapPin, Phone, Clock, Send, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the data to an API
    alert('Thank you for your booking request! We will contact you shortly to confirm your appointment.');
    setFormData({ name: '', phone: '', service: '', date: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-blue-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Contact & Booking</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Get in touch with us to schedule your appointment or ask any questions about our services.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Info & Map */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Get in Touch</h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Phone & WhatsApp</h3>
                    <p className="text-slate-600 mb-2">Call us or send a message on WhatsApp for quick responses.</p>
                    <div className="flex gap-4">
                      <a href="tel:03123647509" className="text-blue-600 font-semibold hover:underline">03123647509</a>
                      <a href="https://wa.me/923123647509" target="_blank" rel="noopener noreferrer" className="text-green-600 font-semibold hover:underline flex items-center gap-1">
                        <MessageCircle size={16} /> WhatsApp
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Clinic Location</h3>
                    <p className="text-slate-600">
                      W472+QHJ, NIPA Flyover, Block 11<br />
                      Gulshan-e-Iqbal, Karachi, Pakistan
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Opening Hours</h3>
                    <ul className="text-slate-600 space-y-1">
                      <li><span className="font-medium">Mon - Thu:</span> 5:30 PM – 10:00 PM</li>
                      <li><span className="font-medium text-red-500">Friday:</span> Closed</li>
                      <li><span className="font-medium">Sat - Sun:</span> 5:30 PM – 10:00 PM</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="h-64 rounded-2xl overflow-hidden shadow-md border border-slate-100">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.995874797071!2d67.0984183!3d24.9126383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f32a0f338d1%3A0x6713917866a1e36!2sNIPA%20Chowrangi!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Clinic Location"
                ></iframe>
              </div>
            </div>

            {/* Booking Form */}
            <div className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Book an Appointment</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-white"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-white"
                    placeholder="03XX XXXXXXX"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">Service Required</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-white"
                  >
                    <option value="" disabled>Select a service</option>
                    <option value="General Checkup">General Checkup</option>
                    <option value="Teeth Cleaning">Teeth Cleaning & Scaling</option>
                    <option value="Tooth Filling">Tooth Filling</option>
                    <option value="Root Canal">Root Canal</option>
                    <option value="Extraction">Tooth Extraction</option>
                    <option value="Whitening">Teeth Whitening</option>
                    <option value="Other">Other / Consultation</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-slate-700 mb-2">Preferred Date</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-white"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message (Optional)</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-white resize-none"
                    placeholder="Any specific symptoms or questions?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-md flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Submit Request
                </button>
                <p className="text-xs text-slate-500 text-center mt-4">
                  We will contact you to confirm the exact time of your appointment.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
