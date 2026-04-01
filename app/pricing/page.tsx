'use client';

import { useState, useEffect } from 'react';

export default function PricingPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const pricingCategories = [
    {
      icon: '🏠',
      title: 'Residential Cleaning',
      color: 'from-emerald-600 to-green-700',
      rows: [
        { label: 'Weekly clean (2-bed house)', price: '£15–£18 per hour' },
        { label: 'One-off deep clean', price: '£20–£25 per hour' },
      ],
      columnLabels: ['Service', 'Price'],
    },
    {
      icon: '🧹',
      title: 'Carpet Cleaning',
      color: 'from-green-600 to-teal-700',
      rows: [
        { label: '1–2 rooms', price: '£50–£70' },
        { label: '3–4 rooms', price: '£90–£120' },
        { label: 'Full house', price: '£120–£180' },
      ],
      columnLabels: ['Property Type', 'Price'],
    },
    {
      icon: '🔑',
      title: 'End of Tenancy Cleaning',
      color: 'from-emerald-700 to-green-800',
      rows: [
        { label: '1-bed flat', price: '£120–£150' },
        { label: '2-bed property', price: '£160–£220' },
        { label: '3-bed property', price: '£220–£300' },
      ],
      columnLabels: ['Property Size', 'Price'],
    },
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
              Transparent • No Hidden Fees
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="text-slate-800">Simple,</span>{' '}
              <span className="bg-gradient-to-r from-emerald-700 via-green-600 to-emerald-800 bg-clip-text text-transparent">
                Clear Pricing
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
              Honest, upfront pricing for all our cleaning services — no surprises, no hidden fees.
            </p>
          </section>

          {/* Pricing Tables */}
          <section className={`pb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="grid md:grid-cols-3 gap-8">
              {pricingCategories.map((cat, i) => (
                <div
                  key={i}
                  className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-emerald-100 hover:border-emerald-300 hover:-translate-y-2 overflow-hidden"
                >
                  {/* Card Header */}
                  <div className={`bg-gradient-to-br ${cat.color} p-7 relative overflow-hidden`}>
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-2xl"></div>
                    </div>
                    <div className="relative z-10">
                      <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{cat.icon}</div>
                      <h2 className="text-xl font-bold text-white">{cat.title}</h2>
                    </div>
                  </div>

                  {/* Table */}
                  <div className="p-6">
                    {/* Column Headers */}
                    <div className="flex justify-between items-center pb-3 mb-3 border-b border-emerald-100">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{cat.columnLabels[0]}</span>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{cat.columnLabels[1]}</span>
                    </div>
                    {/* Rows */}
                    <div className="space-y-3">
                      {cat.rows.map((row, j) => (
                        <div
                          key={j}
                          className="flex justify-between items-center bg-emerald-50 hover:bg-emerald-100 rounded-xl px-4 py-3 border border-emerald-100 transition-colors duration-200"
                        >
                          <span className="text-slate-700 text-sm font-medium">{row.label}</span>
                          <span className="text-emerald-700 font-bold text-sm whitespace-nowrap ml-4">{row.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Notices */}
          <section className={`pb-16 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Price variation notice */}
              <div className="flex items-start gap-4 bg-slate-50 rounded-2xl p-6 border border-slate-200">
                <span className="text-3xl flex-shrink-0">📋</span>
                <div>
                  <h4 className="font-bold text-slate-800 mb-1">Price Variation</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Prices may vary depending on property condition and size. Contact us for an accurate quote tailored to your property.
                  </p>
                </div>
              </div>
              {/* VAT notice */}
              <div className="flex items-start gap-4 bg-amber-50 rounded-2xl p-6 border border-amber-200">
                <span className="text-3xl flex-shrink-0">ℹ️</span>
                <div>
                  <h4 className="font-bold text-amber-800 mb-1">VAT Notice</h4>
                  <p className="text-amber-700 text-sm leading-relaxed">
                    Green Sahara Limited will register for VAT once turnover exceeds the UK threshold. Pricing will be updated accordingly.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-gradient-to-br from-emerald-600 to-green-700 rounded-3xl p-10 md:p-16 shadow-2xl relative overflow-hidden text-center">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full blur-2xl"></div>
              </div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Not Sure What You Need?</h2>
                <p className="text-emerald-100 text-lg mb-8 max-w-xl mx-auto">
                  Get in touch and we'll provide a free, no-obligation quote tailored to your property and requirements.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="px-8 py-4 bg-white text-emerald-700 rounded-xl font-semibold text-lg hover:bg-emerald-50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    Get a Free Quote
                  </a>
                  <a
                    href="/services"
                    className="px-8 py-4 bg-white/10 text-white rounded-xl font-semibold text-lg border-2 border-white/30 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
                  >
                    View Our Services
                  </a>
                </div>
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