'use client';

import { useState, useEffect } from 'react';

type FormDataType = {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  message: string;
};

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
     const { name, value } = e.target as {
      name: keyof FormDataType;
      value: string;
    };

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // TODO: send to API here
    console.log(formData);

    // Handle form submission here (e.g. send to API)
    setSubmitted(true);
  };

  const serviceOptions = [
    'Residential Cleaning',
    'End of Tenancy Cleaning',
    'Carpet & Upholstery Cleaning',
    'Deep Cleaning',
    'Other',
  ];

  const businessHours = [
    { day: 'Monday – Friday', hours: '8:00am – 6:00pm', open: true },
    { day: 'Saturday', hours: '9:00am – 4:00pm', open: true },
    { day: 'Sunday', hours: 'Closed', open: false },
  ];

  const contactDetails = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: 'Phone',
      value: '[Add number]',
      href: 'tel:+44000000000',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: 'Email',
      value: '[Add email]',
      href: 'mailto:info@greensahara.co.uk',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: 'Office',
      value: 'Wallsend, North Tyneside, UK',
      href: null,
    },
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
        </svg>
      ),
    },
    {
      name: 'Google',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.545 10.239v3.821h5.445c-.712 2.315-2.647 3.972-5.445 3.972a6.033 6.033 0 110-12.064c1.498 0 2.866.549 3.921 1.453l2.814-2.814A9.969 9.969 0 0012.545 2C7.021 2 2.543 6.477 2.543 12s4.478 10 10.002 10c8.396 0 10.249-7.85 9.426-11.748l-9.426-.013z"/>
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-50">

      {/* Decorative Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-300/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <svg className="absolute top-32 right-20 w-32 h-32 text-cyan-200/30 animate-float" viewBox="0 0 100 100" fill="currentColor" style={{ animationDelay: '0.5s' }}>
          <path d="M50 10 Q70 30 70 50 Q70 70 50 90 Q40 70 40 50 Q40 30 50 10 Z" />
        </svg>
        <svg className="absolute top-1/3 left-20 w-20 h-20 text-cyan-300/20 animate-float" viewBox="0 0 100 100" fill="currentColor" style={{ animationDelay: '2s' }}>
          <path d="M50 10 Q70 30 70 50 Q70 70 50 90 Q40 70 40 50 Q40 30 50 10 Z" />
        </svg>
      </div>

      <div className="relative pt-24">
        <div className="max-w-7xl mx-auto px-6 pb-20">

          {/* Hero */}
          <section className={`py-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-800 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-cyan-200">
              <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>
              We're here to help
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="text-slate-800">Get in</span>{' '}
              <span className="bg-gradient-to-r from-cyan-700 via-blue-600 to-cyan-800 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
              Contact us for bookings, quotes, or general enquiries. We're happy to help with all your cleaning needs.
            </p>
          </section>

          {/* Main Grid */}
          <section className={`pb-20 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="grid lg:grid-cols-5 gap-10">

              {/* Left: Info Cards */}
              <div className="lg:col-span-2 space-y-6">

                {/* Contact Details */}
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-cyan-100">
                  <h2 className="text-xl font-bold text-slate-800 mb-6">Contact Details</h2>
                  <div className="space-y-4">
                    {contactDetails.map((item, i) => (
                      <div key={i} className="flex items-start gap-4 group">
                        <div className="w-11 h-11 bg-cyan-100 rounded-xl flex items-center justify-center text-cyan-600 flex-shrink-0 group-hover:bg-cyan-600 group-hover:text-white transition-all duration-300">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-xs text-slate-400 font-medium uppercase tracking-wide mb-0.5">{item.label}</p>
                          {item.href ? (
                            <a href={item.href} className="text-slate-700 font-semibold hover:text-cyan-600 transition-colors">{item.value}</a>
                          ) : (
                            <p className="text-slate-700 font-semibold">{item.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Service Areas */}
                  <div className="mt-6 pt-6 border-t border-cyan-100">
                    <p className="text-xs text-slate-400 font-medium uppercase tracking-wide mb-3">Service Areas</p>
                    <div className="flex flex-wrap gap-2">
                      {['Newcastle upon Tyne', 'North Tyneside', 'Gateshead', 'Sunderland', 'Tyne & Wear'].map((area, i) => (
                        <span key={i} className="text-xs bg-cyan-50 border border-cyan-200 text-cyan-700 px-3 py-1 rounded-full font-medium">
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-cyan-100">
                  <h2 className="text-xl font-bold text-slate-800 mb-6">Business Hours</h2>
                  <div className="space-y-3">
                    {businessHours.map((item, i) => (
                      <div key={i} className="flex items-center justify-between py-2 border-b border-slate-50 last:border-0">
                        <span className="text-slate-600 font-medium text-sm">{item.day}</span>
                        <span className={`text-sm font-semibold px-3 py-1 rounded-full ${item.open ? 'bg-cyan-100 text-cyan-700' : 'bg-slate-100 text-slate-500'}`}>
                          {item.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social Media */}
                <div className="bg-gradient-to-br from-cyan-600 to-blue-700 rounded-2xl p-7 shadow-xl relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-2xl"></div>
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-lg font-bold text-white mb-2">Follow Us</h3>
                    <p className="text-cyan-200 text-sm mb-5">Stay connected for updates and offers.</p>
                    <div className="flex gap-3">
                      {socialLinks.map((s, i) => (
                        <a
                          key={i}
                          href={s.href}
                          title={s.name}
                          className="w-11 h-11 bg-white/10 hover:bg-white/25 rounded-xl flex items-center justify-center text-white transition-all duration-300 hover:scale-110 border border-white/20"
                        >
                          {s.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Contact Form */}
              <div className="lg:col-span-3">
                <div className="bg-white rounded-2xl p-10 shadow-sm border border-cyan-100 h-full">
                  {!submitted ? (
                    <>
                      <h2 className="text-2xl font-bold text-slate-800 mb-2">Send Us a Message</h2>
                      <p className="text-slate-500 mb-8">Fill in the form below and we'll get back to you shortly.</p>

                      <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Name + Email */}
                        <div className="grid sm:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name <span className="text-cyan-600">*</span></label>
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              placeholder="Your full name"
                              className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-cyan-500 focus:outline-none transition-colors text-slate-700 placeholder-slate-400 text-sm"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address <span className="text-cyan-600">*</span></label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              placeholder="your@email.com"
                              className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-cyan-500 focus:outline-none transition-colors text-slate-700 placeholder-slate-400 text-sm"
                            />
                          </div>
                        </div>

                        {/* Phone + Service */}
                        <div className="grid sm:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="+44 000 000 0000"
                              className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-cyan-500 focus:outline-none transition-colors text-slate-700 placeholder-slate-400 text-sm"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Service Required <span className="text-cyan-600">*</span></label>
                            <select
                              name="service"
                              value={formData.service}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-cyan-500 focus:outline-none transition-colors text-slate-700 text-sm bg-white"
                            >
                              <option value="" disabled>Select a service</option>
                              {serviceOptions.map((s, i) => (
                                <option key={i} value={s}>{s}</option>
                              ))}
                            </select>
                          </div>
                        </div>

                        {/* Preferred Date */}
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-2">Preferred Date</label>
                          <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-cyan-500 focus:outline-none transition-colors text-slate-700 text-sm"
                          />
                        </div>

                        {/* Message */}
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-2">Message <span className="text-cyan-600">*</span></label>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            placeholder="Tell us about your property and cleaning needs..."
                            className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-cyan-500 focus:outline-none transition-colors text-slate-700 placeholder-slate-400 text-sm resize-none"
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full py-4 bg-cyan-600 text-white rounded-xl font-semibold text-lg hover:bg-cyan-700 hover:shadow-xl hover:shadow-cyan-200 hover:-translate-y-1 transition-all duration-300"
                        >
                          Send Message
                        </button>
                      </form>
                    </>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full py-20 text-center">
                      <div className="text-7xl mb-6">✅</div>
                      <h3 className="text-2xl font-bold text-slate-800 mb-3">Message Sent!</h3>
                      <p className="text-slate-600 text-lg mb-8 max-w-sm">
                        Thank you for getting in touch. We'll get back to you as soon as possible.
                      </p>
                      <button
                        onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', service: '', date: '', message: '' }); }}
                        className="px-8 py-3 bg-cyan-600 text-white rounded-xl font-semibold hover:bg-cyan-700 transition-all duration-300"
                      >
                        Send Another Message
                      </button>
                    </div>
                  )}
                </div>
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