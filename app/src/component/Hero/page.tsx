'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      title: 'Residential Cleaning',
      description: 'Regular weekly/fortnightly cleaning and one-off deep cleans.',
      icon: '🏠',
    },
    {
      title: 'End of Tenancy Cleaning',
      description: 'Deposit-compliant, full-property deep cleaning for landlords, tenants, and agents.',
      icon: '🔑',
    },
    {
      title: 'Carpet & Upholstery Cleaning',
      description: 'Professional hot-water extraction for stain and odour removal.',
      icon: '🧹',
    },
  ];

  const features = [
    'Eco-friendly cleaning products',
    'Fully insured & DBS-checked staff',
    'Transparent pricing',
    'Professional equipment',
    'Digital booking & invoicing',
    'Trusted by landlords and letting agents',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-green-300/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Organic Leaf Shapes */}
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

      {/* Main Content */}
      <div className="relative">
        {/* Hero Section */}
        <section className="px-6 pt-20 pb-16 max-w-7xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-emerald-200">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              Professional • Eco-Friendly • Reliable
            </div>

            {/* Main Headline */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-emerald-700 via-green-600 to-emerald-800 bg-clip-text text-transparent">
                Cleaning Services
              </span>
              <br />
              <span className="text-slate-800">
                in the North East
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mb-4 leading-relaxed">
              <span className="font-semibold text-emerald-700">Green Sahara Limited</span> delivers high-quality residential and tenancy cleaning using eco-friendly products, trained staff, and modern equipment.
            </p>

            <p className="text-lg text-slate-500 max-w-2xl mb-10">
              Book your clean today and experience a fresher, healthier home.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-20">
              <button className="group relative px-8 py-4 bg-emerald-600 text-white rounded-xl font-semibold text-lg overflow-hidden transition-all duration-300 hover:bg-emerald-700 hover:shadow-xl hover:shadow-emerald-200 hover:-translate-y-1">
                <span className="relative z-10">Get a Free Quote</span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button className="px-8 py-4 bg-white text-emerald-700 rounded-xl font-semibold text-lg border-2 border-emerald-600 hover:bg-emerald-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                Book a Cleaning
              </button>
            </div>
          </div>

          {/* Key Services */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8">
              Our <span className="text-emerald-600">Key Services</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-20">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-emerald-100 hover:border-emerald-300 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-emerald-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-gradient-to-br from-emerald-600 to-green-700 rounded-3xl p-10 md:p-16 shadow-2xl mb-20 relative overflow-hidden">
              {/* Decorative Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full blur-2xl"></div>
              </div>

              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
                  Why Choose Green Sahara?
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-5 hover:bg-white/20 transition-all duration-300 border border-white/20"
                    >
                      <div className="w-6 h-6 rounded-full bg-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-emerald-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-white font-medium leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-white rounded-2xl p-10 shadow-lg border border-emerald-100 mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Service <span className="text-emerald-600">Areas</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Proudly serving <span className="font-semibold text-emerald-700">Wallsend</span>, <span className="font-semibold text-emerald-700">Newcastle upon Tyne</span>, <span className="font-semibold text-emerald-700">North Tyneside</span>, and the wider <span className="font-semibold text-emerald-700">Tyne & Wear</span> region.
              </p>
            </div>
          </div>

          {/* Testimonials */}
          <div className={`transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8">
              What Our <span className="text-emerald-600">Clients Say</span>
            </h2>

            <div className="bg-gradient-to-br from-slate-50 to-emerald-50 rounded-2xl p-10 shadow-sm border border-emerald-100 text-center">
              <div className="text-6xl mb-4">⭐</div>
              <p className="text-lg text-slate-600 italic mb-4">
                "Testimonials coming soon!"
              </p>
              <p className="text-slate-500">
                Google reviews will be displayed here once available.
              </p>
            </div>
          </div>
        </section>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=DM+Sans:wght@400;500;600;700&display=swap');
        
        * {
          font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        h1, h2, h3 {
          font-family: 'Outfit', sans-serif;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-pulse {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}