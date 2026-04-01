'use client';
 
import { useState, useEffect } from 'react';
export default function ServicesPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
 
  useEffect(() => {
    setIsVisible(true);
  }, []);
 
  const services = [
    {
      id: 0,
      icon: '🏠',
      title: 'Residential Cleaning',
      tagline: 'For busy households, families & professionals',
      overview:
        'Our residential cleaning service is designed for busy households, working professionals, families, and elderly residents who want a clean, healthy home without the stress.',
      included: [
        'Dusting and polishing',
        'Vacuuming and mopping',
        'Kitchen cleaning',
        'Bathroom sanitisation',
        'Bedrooms and living areas',
        'Internal windows',
        'Optional deep cleaning add-ons',
      ],
      options: [
        { label: 'Weekly Cleaning', icon: '📅' },
        { label: 'Fortnightly Cleaning', icon: '🗓️' },
        { label: 'One-off Deep Cleaning', icon: '✨' },
      ],
      extra: {
        heading: 'Eco-Friendly Approach',
        icon: '🌿',
        text: 'We use certified eco-cleaning products that are safe for children, pets, and allergy-sensitive households.',
      },
      pricing: [
        { label: 'Weekly clean (2-bed house)', price: '£15–£18 per hour' },
        { label: 'One-off deep clean', price: '£20–£25 per hour' },
      ],
    },
    {
      id: 1,
      icon: '🔑',
      title: 'End of Tenancy Cleaning',
      tagline: 'Deposit-compliant deep clean for tenants & landlords',
      overview:
        'A full, deposit-compliant deep clean for tenants, landlords, letting agents, and property managers.',
      included: [
        'Full property deep clean',
        'Kitchen degreasing',
        'Oven cleaning',
        'Bathroom descaling',
        'Internal windows',
        'Skirting boards, doors & frames',
        'Optional carpet cleaning',
      ],
      options: [
        { label: 'Tenants preparing for checkout', icon: '🧳' },
        { label: 'Landlords preparing for new tenants', icon: '🏘️' },
        { label: 'Letting agents managing properties', icon: '📋' },
      ],
      optionsLabel: 'Who It\'s For',
      pricing: [
        { label: '1-bed flat', price: '£120–£150' },
        { label: '2-bed property', price: '£160–£220' },
        { label: '3-bed property', price: '£220–£300' },
      ],
    },
    {
      id: 2,
      icon: '🧹',
      title: 'Carpet & Upholstery Cleaning',
      tagline: 'Professional hot-water extraction cleaning',
      overview:
        'Professional hot-water extraction cleaning using industrial-grade equipment to restore your carpets and upholstery.',
      included: [
        'Removes stains, dirt, and allergens',
        'Restores carpet freshness',
        'Eliminates odours',
        'Safe for pets and children',
      ],
      includedLabel: 'Benefits',
      options: [
        { label: 'Homes', icon: '🏡' },
        { label: 'Rental properties', icon: '🏢' },
        { label: 'Furnished lets', icon: '🛋️' },
        { label: 'End-of-tenancy cleans', icon: '🔑' },
      ],
      optionsLabel: 'Suitable For',
      pricing: [
        { label: '1–2 rooms', price: '£50–£70' },
        { label: '3–4 rooms', price: '£90–£120' },
        { label: 'Full house', price: '£120–£180' },
      ],
    },
  ];
 
  const whyUs = [
    { icon: '🌿', title: 'Eco-Friendly Cleaning', desc: 'Environmentally responsible products safe for your home, family, and the planet.' },
    { icon: '💼', title: 'Professional & Reliable', desc: 'Trained, DBS-checked, uniformed staff committed to consistent quality.' },
    { icon: '💷', title: 'Transparent Pricing', desc: 'Clear, honest pricing with no hidden fees.' },
    { icon: '🛡️', title: 'Fully Insured', desc: 'Public Liability and Employers\' Liability insurance for your peace of mind.' },
    { icon: '🔧', title: 'Modern Equipment', desc: 'Industrial carpet extractors, commercial vacuums, steam cleaners & microfibre systems.' },
    { icon: '📱', title: 'Digital Convenience', desc: 'Online booking, digital invoicing, and fast communication.' },
    { icon: '🏘️', title: 'Trusted by Letting Agents', desc: 'We work with landlords, tenants, and property managers across the North East.' },
  ];
 
  const active = services[activeTab];
 
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
              Professional • Eco-Friendly • North East England
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-emerald-700 via-green-600 to-emerald-800 bg-clip-text text-transparent">
                Our Services
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
              From weekly home cleans to end-of-tenancy deep cleans, we deliver spotless results using eco-friendly products and professional equipment.
            </p>
          </section>
 
          {/* Service Tabs */}
          <section className={`pb-20 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Tab Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              {services.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`flex-1 flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold text-left transition-all duration-300 border-2 ${
                    activeTab === i
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-xl shadow-emerald-200'
                      : 'bg-white text-slate-700 border-emerald-100 hover:border-emerald-300 hover:bg-emerald-50'
                  }`}
                >
                  <span className="text-2xl">{s.icon}</span>
                  <span className="text-sm md:text-base">{s.title}</span>
                </button>
              ))}
            </div>
 
            {/* Tab Content */}
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Overview + Included */}
              <div className="lg:col-span-2 space-y-6">
                {/* Overview */}
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-emerald-100">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-5xl">{active.icon}</div>
                    <div>
                      <h2 className="text-2xl font-bold text-slate-800">{active.title}</h2>
                      <p className="text-emerald-600 font-medium text-sm">{active.tagline}</p>
                    </div>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{active.overview}</p>
                </div>
 
                {/* What's Included */}
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-emerald-100">
                  <h3 className="text-xl font-bold text-slate-800 mb-5">
                    {active.includedLabel || "What's Included"}
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {active.included.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 bg-emerald-50 rounded-xl px-4 py-3 border border-emerald-100">
                        <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-slate-700 text-sm font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
 
                {/* Eco note if applicable */}
                {active.extra && (
                  <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-6 border border-emerald-200 flex items-start gap-4">
                    <span className="text-3xl">{active.extra.icon}</span>
                    <div>
                      <h4 className="font-bold text-emerald-800 mb-1">{active.extra.heading}</h4>
                      <p className="text-emerald-700 text-sm leading-relaxed">{active.extra.text}</p>
                    </div>
                  </div>
                )}
              </div>
 
              {/* Right Column: Options + Pricing */}
              <div className="space-y-6">
                {/* Service Options / Who it's for */}
                <div className="bg-white rounded-2xl p-7 shadow-sm border border-emerald-100">
                  <h3 className="text-lg font-bold text-slate-800 mb-4">
                    {active.optionsLabel || 'Service Options'}
                  </h3>
                  <div className="space-y-3">
                    {active.options.map((opt, i) => (
                      <div key={i} className="flex items-center gap-3 bg-emerald-50 rounded-xl px-4 py-3 border border-emerald-100 hover:border-emerald-300 transition-all group">
                        <span className="text-xl">{opt.icon}</span>
                        <span className="text-slate-700 text-sm font-medium">{opt.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
 
                {/* Pricing */}
                <div className="bg-gradient-to-br from-emerald-600 to-green-700 rounded-2xl p-7 shadow-xl relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-2xl"></div>
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-lg font-bold text-white mb-5">Pricing Guide</h3>
                    <div className="space-y-3">
                      {active.pricing.map((p, i) => (
                        <div key={i} className="flex justify-between items-center bg-white/10 rounded-xl px-4 py-3 border border-white/20">
                          <span className="text-emerald-100 text-sm">{p.label}</span>
                          <span className="text-white font-bold text-sm">{p.price}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-emerald-200 text-xs mt-4 leading-relaxed">
                      Prices may vary depending on property condition and size.
                    </p>
                    <a
                      href="/contact"
                      className="mt-5 block w-full text-center bg-white text-emerald-700 font-semibold py-3 rounded-xl hover:bg-emerald-50 transition-all duration-300 hover:-translate-y-0.5"
                    >
                      Get a Free Quote
                    </a>
                  </div>
                </div>
 
                {/* VAT Notice */}
                <div className="bg-amber-50 rounded-2xl p-5 border border-amber-200">
                  <div className="flex items-start gap-3">
                    <span className="text-xl">ℹ️</span>
                    <div>
                      <p className="text-amber-800 font-semibold text-sm mb-1">VAT Notice</p>
                      <p className="text-amber-700 text-xs leading-relaxed">
                        Green Sahara Limited will register for VAT once turnover exceeds the UK threshold. Pricing will be updated accordingly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
 
          {/* Why Choose Us */}
          <section className={`pb-20 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-gradient-to-br from-emerald-600 to-green-700 rounded-3xl p-10 md:p-16 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full blur-2xl"></div>
              </div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
                  Why Choose Green Sahara?
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {whyUs.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-5 hover:bg-white/20 transition-all duration-300 border border-white/20"
                    >
                      <span className="text-2xl flex-shrink-0">{item.icon}</span>
                      <div>
                        <p className="text-white font-bold text-sm mb-1">{item.title}</p>
                        <p className="text-emerald-200 text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
 
          {/* CTA */}
          <section className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-gradient-to-br from-slate-50 to-emerald-50 rounded-2xl p-10 shadow-sm border border-emerald-100 text-center">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">
                Ready to Book Your <span className="text-emerald-600">Clean?</span>
              </h2>
              <p className="text-slate-600 text-lg mb-8 max-w-xl mx-auto">
                Contact us today for a free, no-obligation quote tailored to your property.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-emerald-600 text-white rounded-xl font-semibold text-lg hover:bg-emerald-700 hover:shadow-xl hover:shadow-emerald-200 hover:-translate-y-1 transition-all duration-300"
                >
                  Get a Free Quote
                </a>
                <a
                  href="/about"
                  className="px-8 py-4 bg-white text-emerald-700 rounded-xl font-semibold text-lg border-2 border-emerald-600 hover:bg-emerald-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  Learn About Us
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