import { Shield, Heart, Award, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-blue-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">About Save Teeth Dental Care</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Committed to providing exceptional dental care with a focus on patient comfort, hygiene, and long-lasting results.
          </p>
        </div>
      </section>

      {/* Story & Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Dental Clinic Interior"
                className="rounded-3xl shadow-xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story & Mission</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Save Teeth Dental Care Clinic was founded with a simple mission: to provide high-quality, accessible, and pain-free dental care to the community of Gulshan-e-Iqbal, Karachi. 
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                We believe that a healthy smile is the foundation of overall well-being. Our clinic is equipped with modern technology and adheres to the strictest hygiene standards to ensure your safety and comfort during every visit.
              </p>
              
              <div className="space-y-4">
                {[
                  'State-of-the-art dental equipment',
                  'Strict sterilization and hygiene protocols',
                  'Experienced and compassionate doctors',
                  'Patient-first approach to treatment'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="text-blue-600 shrink-0" size={20} />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Patients Trust Us</h2>
            <p className="text-lg text-slate-600">We go above and beyond to ensure you receive the best possible care.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-6">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Safe & Hygienic</h3>
              <p className="text-slate-600">We follow international standards for sterilization to guarantee a safe environment.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-6">
                <Heart size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Gentle Care</h3>
              <p className="text-slate-600">Our doctors are known for their gentle approach, making treatments virtually painless.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-6">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Expert Doctors</h3>
              <p className="text-slate-600">Highly qualified professionals with years of experience in modern dentistry.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Meet Our Experts</h2>
            <p className="text-lg text-slate-600">Dedicated professionals committed to your oral health.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Dr Noshaba */}
            <div className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] bg-slate-200 relative">
                <img 
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Dr. Noshaba Arshad" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-1">Dr. Noshaba Arshad</h3>
                <p className="text-blue-600 font-medium mb-4">Lead Dentist</p>
                <p className="text-slate-600 mb-6">
                  A highly skilled dental professional with extensive experience in general and cosmetic dentistry. Dr. Noshaba is known for her meticulous attention to detail and patient-centric approach.
                </p>
                <div className="space-y-2">
                  <p className="text-sm text-slate-700"><span className="font-semibold">Specialties:</span> Root Canal, Cosmetic Dentistry</p>
                  <p className="text-sm text-slate-700"><span className="font-semibold">Experience:</span> 10+ Years</p>
                </div>
              </div>
            </div>

            {/* Dr Parveen */}
            <div className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] bg-slate-200 relative">
                <img 
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Dr. Parveen Memon" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-1">Dr. Parveen Memon</h3>
                <p className="text-blue-600 font-medium mb-4">Senior Dentist</p>
                <p className="text-slate-600 mb-6">
                  Dedicated to providing painless and effective dental treatments. Dr. Parveen specializes in restorative procedures and preventive care, ensuring long-term oral health for all patients.
                </p>
                <div className="space-y-2">
                  <p className="text-sm text-slate-700"><span className="font-semibold">Specialties:</span> Restorative Dentistry, Extractions</p>
                  <p className="text-sm text-slate-700"><span className="font-semibold">Experience:</span> 8+ Years</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
