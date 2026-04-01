'use client';

import { useState, useEffect } from 'react';

export default function WhyUsPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const reasons = [
    {
      icon: '🌿',
      title: 'Eco-Friendly Cleaning',
      description: 'We use environmentally responsible products that are safe for your home, your family, and the planet.',
      detail: 'All our cleaning solutions are certified eco-friendly — no harsh chemicals, just effective, sustainable cleaning.',
    },
    {
      icon: '💼',
      title: 'Professional & Reliable',
      description: 'Our staff are trained, DBS-checked, uniformed, and committed to delivering consistent quality.',
      detail: 'Every team member goes through rigorous training and background checks before stepping into your home.',
    },
    {
      icon: '💷',
      title: 'Transparent Pricing',
      description: 'Clear, honest pricing with no hidden fees.',
      detail: 'What we quote is what you pay. No surprises, no extras — just straightforward, fair pricing every time.',
    },
    {
      icon: '🛡️',
      title: 'Fully Insured',
      description: 'We carry Public Liability and Employers\' Liability insurance for your peace of mind.',
      detail: 'You\'re fully protected. Our comprehensive insurance cover means you can relax while we work.',
    },
    {
      icon: '🔧',
      title: 'Modern Equipment',
      description: 'We use industrial carpet extraction machines, commercial vacuums, steam cleaners, and microfibre systems.',
      detail: 'Professional-grade tools deliver deeper, longer-lasting results than standard domestic equipment.',
    },
    {
      icon: '📱',
      title: 'Digital Convenience',
      description: 'Online booking, digital invoicing, and fast communication.',
      detail: 'Book, pay, and communicate entirely online — saving you time and keeping everything organised.',
    },
    {
      icon: '🏘️',
      title: 'Trusted by Letting Agents',
      description: 'We work with landlords, tenants, and property managers across the North East.',
      detail: 'Our reliability and deposit-compliant cleans have made us a go-to partner for property professionals.',
    },
  ];

  const stats = [
    { value: '100%', label: 'Eco-Friendly Products' },
    { value: 'DBS', label: 'Checked Staff' },
    { value: '5★', label: 'Service Standard' },
    { value: 'Fully', label: 'Insured' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50">

      {/* Decorative Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-green-300/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <svg className="absolute top-32 right-20 w-32 h-32 text-emerald-200/30 animate-float" viewBox="0 0 100 100" fill="currentColor" style={{ animationDelay: '0.5s' }}>
          <path d="M50 10 Q70 30 70 50 Q70 70 50 90 Q40 70 40 50 Q40 30 50 10 Z" />
        </svg>
        <svg className="absolute top-1/3 left-20 w-20 h-20 text-emerald-300/20 animate-float" viewBox="0 0 100 100" fill="currentColor" style={{ animationDelay: '2s' }}>
          <path d="M50 10 Q70 30 70 50 Q70 70 50 90 Q40 70 40 50 Q40 30 50 10 Z" />
        </svg>
      </div>

      <div className="relative pt-24">
        <div className="max-w-7xl mx-auto px-6 pb-20">

          {/* Hero */}
          <section className={`py-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-emerald-200">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              Trusted across the North East
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="text-slate-800">Why Choose</span>
              <br />
              <span className="bg-gradient-to-r from-emerald-700 via-green-600 to-emerald-800 bg-clip-text text-transparent">
                Green Sahara?
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
              We're not just another cleaning company. Here's what sets us apart and why customers across the North East keep coming back.
            </p>
          </section>

          {/* Stats Strip */}
          <section className={`pb-16 transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {stats.map((s, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-emerald-100 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <p className="text-3xl font-bold bg-gradient-to-r from-emerald-700 to-green-600 bg-clip-text text-transparent mb-1">{s.value}</p>
                  <p className="text-slate-500 text-sm font-medium">{s.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Reasons Grid */}
          <section className={`pb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-10">
              The <span className="text-emerald-600">Green Sahara</span> Difference
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reasons.slice(0, 6).map((reason, i) => (
                <div
                  key={i}
                  className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-emerald-100 hover:border-emerald-300 hover:-translate-y-2"
                >
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{reason.icon}</div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-emerald-700 transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-3 text-sm">{reason.description}</p>
                  <p className="text-slate-400 text-xs leading-relaxed border-t border-emerald-50 pt-3">{reason.detail}</p>
                </div>
              ))}
            </div>

            {/* 7th reason — full width featured */}
            <div className="mt-6">
              <div className="group bg-gradient-to-br from-emerald-600 to-green-700 rounded-2xl p-10 shadow-xl relative overflow-hidden hover:-translate-y-1 transition-all duration-300">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-white rounded-full blur-3xl"></div>
                </div>
                <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className="text-6xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">{reasons[6].icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{reasons[6].title}</h3>
                    <p className="text-emerald-100 leading-relaxed mb-2">{reasons[6].description}</p>
                    <p className="text-emerald-200 text-sm leading-relaxed">{reasons[6].detail}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Compliance Strip */}
          <section className={`pb-16 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-white rounded-2xl p-10 shadow-lg border border-emerald-100">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">
                Compliance & <span className="text-emerald-600">Peace of Mind</span>
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { icon: '🛡️', label: 'Public Liability Insurance' },
                  { icon: '👷', label: 'Employers\' Liability Insurance' },
                  { icon: '✅', label: 'DBS Checked Staff' },
                  { icon: '🌿', label: 'Eco-Friendly Certified' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-emerald-50 rounded-xl px-5 py-4 border border-emerald-100 hover:border-emerald-300 transition-all duration-300 group">
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                    <span className="text-slate-700 font-medium text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-gradient-to-br from-slate-50 to-emerald-50 rounded-2xl p-10 shadow-sm border border-emerald-100 text-center">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">
                Ready to Experience the <span className="text-emerald-600">Difference?</span>
              </h2>
              <p className="text-slate-600 text-lg mb-8 max-w-xl mx-auto">
                Book your clean today or get a free, no-obligation quote tailored to your home.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="px-8 py-4 bg-emerald-600 text-white rounded-xl font-semibold text-lg hover:bg-emerald-700 hover:shadow-xl hover:shadow-emerald-200 hover:-translate-y-1 transition-all duration-300">
                  Get a Free Quote
                </a>
                <a href="/pricing" className="px-8 py-4 bg-white text-emerald-700 rounded-xl font-semibold text-lg border-2 border-emerald-600 hover:bg-emerald-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  View Pricing
                </a>
              </div>
            </div>
          </section>

        </div>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=DM+Sans:wght@400;500;600;700&display=swap');
        * { font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
        h1, h2, h3 { font-family: 'Outfit', sans-serif; }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
      `}</style>
    </div>
  );
}