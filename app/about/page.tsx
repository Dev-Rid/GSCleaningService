export default function AboutPage() {
  return (
    // <main className="bg-gradient-to-br from-sky-50 via-white to-cyan-50">
    //   {/* HERO */}
    //   <section className="py-24 text-center px-6">
    //     <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
    //       About Us
    //     </h1>

    //     <p className="text-gray-600 max-w-2xl mx-auto text-lg">
    //       GS Cleaning Services aims to position itself as a reliable, eco-conscious,
    //       and quality-focused cleaning provider in the North East of England.
    //     </p>
    //   </section>


    //   {/* WHO WE ARE */}
    //   <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center py-16">

    //     <div className="space-y-6">
    //       <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
    //         Who We Are
    //       </h2>

    //       <p className="text-gray-600 text-lg">
    //         Green Sahara Limited is a UK-registered cleaning services company providing
    //         professional, eco-friendly cleaning solutions across the North East of England.
    //       </p>

    //       <p className="text-gray-600 text-lg">
    //         We specialize in residential cleaning, end-of-tenancy cleaning, and carpet cleaning,
    //         serving homeowners, tenants, landlords, and letting agents.
    //       </p>
    //     </div>

    //     {/* OPTIONAL IMAGE */}
    //     {/*
    //     <div className="flex justify-center">
    //       <img
    //         src="/about-cleaning.png"
    //         alt="About us"
    //         className="rounded-2xl shadow-xl w-full max-w-md"
    //       />
    //     </div>
    //     */}
    //   </section>
      
    //    {/* TEAM */}
    //   <section className="py-20 px-6 bg-white">
    //     <div className="max-w-7xl mx-auto text-center">

    //       <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
    //         Our Team
    //       </h2>

    //       <div className=" ">
    //           <p className="text-gray-600 text-lg">
    //             Green Sahara Limited is led by a Managing Director responsible for strategy, compliance, and finance. Operations are managed by an experienced team overseeing scheduling, quality control, and staff supervision.
    //           </p>

    //       </div>
    //     </div>
    //   </section>

    //   {/* CORE SECTIONS */}
    //   <section className="py-20 px-6">
    //     <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

    //       {/* Vision */}
    //       <div className="p-8 bg-white rounded-2xl shadow-sm">
    //         <h3 className="text-2xl font-semibold text-sky-600 mb-3">Our Vision</h3>
  
    //           <p className="text-gray-600 text-lg">
    
    //             To become a trusted and recognizable cleaning brand in North East England known for <span className="font-bold"> reliability, profesionalism, and environmentally responsible service</span>
    //           </p>
    //       </div>

    //       {/* Mission */}
    //       <div className="p-8 bg-white rounded-2xl shadow-sm">
    //         <h3 className="text-2xl font-semibold text-sky-600 mb-3">Our Mission</h3>
    //           <p className="text-gray-600 text-lg">

    //             To provide<span className="font-bold"> high-quality, affordable, and dispensable c;leaning services</span> using trained staff, modern-equipment, and eco-friendly products 
    //           </p>
    //       </div>

    //       {/* Values */}
    //       <div className="p-8 bg-white rounded-2xl shadow-sm">
    //         <h3 className="text-2xl font-semibold text-sky-600 mb-3">Our Values</h3>
    //           <p className="text-gray-600 text-lg">
    //             {/* Add your values here */}
    //             <p> • <span>Integrity</span> — Honest pricing, transparent communication</p>
    //             <p> • <span>Quality</span> — Consistent, high-standard cleaning every time</p>
    //             <p> • <span>Eco-responsibility</span> — Safe, sustainable cleaning products</p>
    //             <p> • <span>Professionalism</span> — Trained, insured, and DBS-checked staff</p>
    //             <p> • <span>Customer Care</span> — Your satisfaction is our priority</p>
                
    //           </p>
    //       </div>

    //       {/* Compliance */}
    //       <div className="p-8 bg-white rounded-2xl shadow-sm">
    //         <h3 className="text-2xl font-semibold text-sky-600 mb-3">
    //           Compliance & Assurance
    //         </h3>
    //         <p className="text-gray-600 text-lg">
    //             We operate with full adherence to UK regulations, including:
    //           {/* Add compliance details here */}
    //             <p> • <span>Public Liability Insurance</span></p>
    //             <p> • <span>Employers' Liability Insurance</span></p>
    //             <p> • <span>DBS checks for all staff</span></p>
    //             <p> • <span>COSHH compliance</span></p>
    //             <p> • <span>Health and safety policies</span></p>
    //             <p> • <span>GDPR compliance</span></p>
    //             <p> • <span>Waste disposal regulations</span></p>
                
    //         </p>
    //       </div>

    //     </div>
    //   </section>

    // </main>

    <main className="bg-gradient-to-br from-sky-50 via-white to-cyan-50">
  {/* HERO SECTION */}
  <section className="relative py-24 md:py-32 text-center px-6 overflow-hidden">
    {/* Decorative background element */}
    <div className="absolute inset-0 bg-grid-sky-100/[0.2] bg-[size:20px_20px] pointer-events-none" />
    
    <div className="relative z-10 max-w-4xl mx-auto ">
      <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 text-sm font-medium text-blue-700 bg-blue-50 rounded-full">
        ✨ Our Story
      </div>
      
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-gray-900 to-gray-900 bg-clip-text text-transparent mb-6">
        About Us
      </h1>
      
      <p className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
        GS Cleaning Services aims to position itself as a reliable, eco-conscious,
        and quality-focused cleaning provider in the North East of England.
      </p>
    </div>
  </section>

  {/* WHO WE ARE SECTION */}
  <section className="max-w-7xl mx-auto px-6 py-20 md:py-28">
    <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
      <div className="space-y-6 order-2 md:order-1">
        <div className="inline-flex items-center px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-full">
          About Green Sahara
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Who We Are
        </h2>
        
        <div className="space-y-4 text-gray-600 text-lg">
          <p>
            Green Sahara Limited is a UK-registered cleaning services company providing
            professional, eco-friendly cleaning solutions across the North East of England.
          </p>
          
          <p>
            We specialize in <span className="font-semibold text-gray-800">residential cleaning</span>, 
            <span className="font-semibold text-gray-800"> end-of-tenancy cleaning</span>, and 
            <span className="font-semibold text-gray-800"> carpet cleaning</span>, serving homeowners, 
            tenants, landlords, and letting agents with excellence and care.
          </p>
        </div>
        
        {/* Trust indicators */}
        <div className="flex flex-wrap gap-4 pt-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>Fully Insured</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>Eco-Friendly Products</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>DBS Checked Staff</span>
          </div>
        </div>
      </div>
      
      {/* Decorative image placeholder - uncomment and add your image */}
      <div className="order-1 md:order-2 flex justify-center">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-3xl blur-2xl opacity-20" />
          <div className="relative bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 shadow-xl border border-white/50">
            <div className="w-full max-w-md h-80 flex items-center justify-center">
              <svg className="w-32 h-32 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

   {/* TEAM SECTION */}
  <section className="py-20 px-6 bg-white">
    <div className="max-w-4xl mx-auto text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6">
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      </div>
      
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        Our Team
      </h2>
      
      <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
        Green Sahara Limited is led by a Managing Director responsible for strategy, compliance, and finance. 
        Operations are managed by an experienced team overseeing scheduling, quality control, and staff supervision.
      </p>
      
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full">
          <div className="w-2 h-2 bg-blue-500 rounded-full" />
          <span className="text-sm text-gray-600">10+ Years Combined Experience</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full">
          <div className="w-2 h-2 bg-blue-500 rounded-full" />
          <span className="text-sm text-gray-600">Fully Trained Staff</span>
        </div>
      </div>
    </div>
  </section>

  {/* CORE SECTIONS */}
  <section className="py-20 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Our Foundation
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Built on strong principles and unwavering commitment to excellence
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Vision */}
        <div className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Vision</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            To become a trusted and recognizable cleaning brand in North East England, known for 
            <span className="font-semibold text-gray-800"> reliability, professionalism, and environmentally responsible service</span>.
          </p>
        </div>

        {/* Mission */}
        <div className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            To provide <span className="font-semibold text-gray-800">high-quality, affordable, and dependable cleaning services</span> 
            using trained staff, modern equipment, and eco-friendly products.
          </p>
        </div>

        {/* Values */}
        <div className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
          <div className="space-y-3">
            {[
              { name: "Integrity", desc: "Honest pricing, transparent communication" },
              { name: "Quality", desc: "Consistent, high-standard cleaning every time" },
              { name: "Eco-responsibility", desc: "Safe, sustainable cleaning products" },
              { name: "Professionalism", desc: "Trained, insured, and DBS-checked staff" },
              { name: "Customer Care", desc: "Your satisfaction is our priority" }
            ].map((value, idx) => (
              <div key={idx} className="flex gap-3">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2.5 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-gray-800">{value.name}</span>
                  <span className="text-gray-600"> — {value.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance */}
        <div className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Compliance & Assurance</h3>
          <p className="text-gray-600 mb-3">We operate with full adherence to UK regulations, including:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              "Public Liability Insurance",
              "Employers' Liability Insurance",
              "DBS checks for all staff",
              "COSHH compliance",
              "Health and safety policies",
              "GDPR compliance",
              "Waste disposal regulations"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-gray-600 text-sm">
                <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>

 
    </main>
  );
}