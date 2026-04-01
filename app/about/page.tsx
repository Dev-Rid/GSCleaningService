'use client';

import { useState, useEffect } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const values = [
    {
      icon: '🤝',
      title: 'Integrity',
      description: 'Honest pricing, transparent communication.',
    },
    {
      icon: '⭐',
      title: 'Quality',
      description: 'Consistent, high-standard cleaning every time.',
    },
    {
      icon: '🌿',
      title: 'Eco-Responsibility',
      description: 'Safe, sustainable cleaning products.',
    },
    {
      icon: '💼',
      title: 'Professionalism',
      description: 'Trained, insured, and DBS-checked staff.',
    },
    {
      icon: '❤️',
      title: 'Customer Care',
      description: 'Your satisfaction is our priority.',
    },
  ];

  const compliance = [
    { icon: '🛡️', label: 'Public Liability Insurance' },
    { icon: '👷', label: 'Employers\' Liability Insurance' },
    { icon: '✅', label: 'DBS Checks for All Staff' },
    { icon: '⚗️', label: 'COSHH Compliance' },
    { icon: '🏥', label: 'Health & Safety Policies' },
    { icon: '🔒', label: 'GDPR Compliance' },
    { icon: '♻️', label: 'Waste Disposal Regulations' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50">

      {/* Decorative Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-green-300/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <svg className="absolute top-32 right-20 w-32 h-32 text-emerald-200/30 animate-float" viewBox="0 0 100 100" fill="currentColor" style={{ animationDelay: '0.5s' }}>
          <path d="M50 10 Q70 30 70 50 Q70 70 50 90 Q40 70 40 50 Q40 30 50 10 Z" />
        </svg>
        <svg className="absolute bottom-40 right-1/4 w-24 h-24 text-green-300/25 animate-float" viewBox="0 0 100 100" fill="currentColor" style={{ animationDelay: '1.5s' }}>
          <path d="M50 10 Q70 30 70 50 Q70 70 50 90 Q40 70 40 50 Q40 30 50 10 Z" />
        </svg>
        <svg className="absolute top-1/3 left-20 w-20 h-20 text-emerald-300/20 animate-float" viewBox="0 0 100 100" fill="currentColor" style={{ animationDelay: '2s' }}>
          <path d="M50 10 Q70 30 70 50 Q70 70 50 90 Q40 70 40 50 Q40 30 50 10 Z" />
        </svg>
      </div>

      <div className="relative pt-24">
        <div className="max-w-7xl mx-auto px-6 pb-20">

          {/* Hero / Who We Are */}
          <section className={`py-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-emerald-200">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              UK-Registered • North East England
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                  <span className="text-slate-800">Who</span>{' '}
                  <span className="bg-gradient-to-r from-emerald-700 via-green-600 to-emerald-800 bg-clip-text text-transparent">
                    We Are
                  </span>
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  <span className="font-semibold text-emerald-700">Green Sahara Limited</span> (owner of GS Cleaning Services) is a UK-registered cleaning services company providing professional, eco-friendly cleaning solutions across the <span className="font-semibold text-slate-700">North East of England</span>.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  We specialise in residential cleaning, end-of-tenancy cleaning, and carpet cleaning, serving homeowners, tenants, landlords, and letting agents.
                </p>
                <blockquote className="border-l-4 border-emerald-500 pl-6 py-2 bg-emerald-50/60 rounded-r-xl">
                  <p className="text-emerald-800 italic font-medium leading-relaxed">
                    "GS Cleaning Services aims to position itself as a reliable, eco-conscious, and quality-focused cleaning provider in the North East of England."
                  </p>
                </blockquote>
              </div>

              {/* Visual Card */}
              <div className="relative">
                <div className="bg-gradient-to-br from-emerald-600 to-green-700 rounded-3xl p-10 shadow-2xl relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-36 h-36 bg-white rounded-full blur-2xl"></div>
                  </div>
                  <div className="relative z-10">
                    <div className="text-6xl mb-4">🌿</div>
                    <h3 className="text-2xl font-bold text-white mb-2">Green Sahara Limited</h3>
                    <p className="text-emerald-200 mb-6">Professional Cleaning Services</p>
                    <div className="space-y-3">
                      {['Residential Cleaning', 'End of Tenancy Cleaning', 'Carpet Cleaning'].map((s, i) => (
                        <div key={i} className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3 border border-white/20">
                          <div className="w-5 h-5 rounded-full bg-emerald-400 flex items-center justify-center flex-shrink-0">
                            <svg className="w-3 h-3 text-emerald-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-white font-medium text-sm">{s}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl px-5 py-3 border border-emerald-100">
                  <p className="text-xs text-slate-500 font-medium">Serving</p>
                  <p className="text-slate-800 font-bold text-sm">North East England</p>
                </div>
              </div>
            </div>
          </section>

          {/* Vision & Mission */}
          <section className={`py-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Vision */}
              <div className="group bg-white rounded-2xl p-10 shadow-sm hover:shadow-xl transition-all duration-300 border border-emerald-100 hover:border-emerald-300 hover:-translate-y-2">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🔭</div>
                <h2 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-emerald-700 transition-colors">Our Vision</h2>
                <p className="text-slate-600 leading-relaxed">
                  To become a <span className="font-semibold text-emerald-700">trusted and recognisable</span> residential cleaning brand in North East England known for reliability, professionalism, and environmentally responsible services.
                </p>
              </div>

              {/* Mission */}
              <div className="group bg-white rounded-2xl p-10 shadow-sm hover:shadow-xl transition-all duration-300 border border-emerald-100 hover:border-emerald-300 hover:-translate-y-2">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🎯</div>
                <h2 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-emerald-700 transition-colors">Our Mission</h2>
                <p className="text-slate-600 leading-relaxed">
                  To provide <span className="font-semibold text-emerald-700">high-quality, affordable, and dependable</span> cleaning services using trained staff, modern equipment, and eco-friendly products.
                </p>
              </div>
            </div>
          </section>

          {/* Our Values */}
          <section className={`py-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-10">
              Our <span className="text-emerald-600">Values</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 border border-emerald-100 hover:border-emerald-300 hover:-translate-y-2 text-center"
                >
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{value.icon}</div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-emerald-700 transition-colors">{value.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Our Team */}
          <section className={`py-16 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-gradient-to-br from-emerald-600 to-green-700 rounded-3xl p-10 md:p-16 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full blur-2xl"></div>
              </div>
              <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Team</h2>
                  <p className="text-emerald-100 leading-relaxed text-lg mb-6">
                    Green Sahara Limited is led by a dedicated <span className="font-semibold text-white">Managing Director</span> responsible for strategy, compliance, and finance.
                  </p>
                  <p className="text-emerald-100 leading-relaxed text-lg">
                    Operations are managed by an experienced team overseeing <span className="font-semibold text-white">scheduling, quality control, and staff supervision</span>.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { role: 'Managing Director', icon: '👔', desc: 'Strategy, compliance & finance' },
                    { role: 'Operations Manager', icon: '📋', desc: 'Scheduling & quality control' },
                    { role: 'Cleaning Staff', icon: '🧹', desc: 'Trained & DBS-checked' },
                    { role: 'Customer Support', icon: '📞', desc: 'Here to help you' },
                  ].map((member, i) => (
                    <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:bg-white/20 transition-all duration-300">
                      <div className="text-3xl mb-2">{member.icon}</div>
                      <p className="text-white font-bold text-sm mb-1">{member.role}</p>
                      <p className="text-emerald-200 text-xs leading-relaxed">{member.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Compliance & Assurance */}
          <section className={`py-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-white rounded-2xl p-10 md:p-14 shadow-lg border border-emerald-100">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Compliance & <span className="text-emerald-600">Assurance</span>
              </h2>
              <p className="text-slate-600 text-lg mb-10">
                We operate with full adherence to UK regulations so you can trust us completely.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {compliance.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 bg-emerald-50 rounded-xl px-5 py-4 border border-emerald-100 hover:border-emerald-300 hover:bg-emerald-100/60 transition-all duration-300 group"
                  >
                    <div className="text-2xl group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                    <span className="text-slate-700 font-medium text-sm leading-snug">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className={`py-10 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-gradient-to-br from-slate-50 to-emerald-50 rounded-2xl p-10 shadow-sm border border-emerald-100 text-center">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">
                Ready for a <span className="text-emerald-600">Cleaner Home?</span>
              </h2>
              <p className="text-slate-600 text-lg mb-8 max-w-xl mx-auto">
                Get in touch today for a free quote and discover why customers across the North East trust Green Sahara.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="group relative px-8 py-4 bg-emerald-600 text-white rounded-xl font-semibold text-lg overflow-hidden transition-all duration-300 hover:bg-emerald-700 hover:shadow-xl hover:shadow-emerald-200 hover:-translate-y-1"
                >
                  Get a Free Quote
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 bg-white text-emerald-700 rounded-xl font-semibold text-lg border-2 border-emerald-600 hover:bg-emerald-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  View Our Services
                </a>
              </div>
            </div>
          </section>

        </div>
      </div>


      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=DM+Sans:wght@400;500;600;700&display=swap');

        * {
          font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        h1, h2, h3 {
          font-family: 'Outfit', sans-serif;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}