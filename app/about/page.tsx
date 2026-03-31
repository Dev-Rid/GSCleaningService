export default function AboutPage() {
  return (
    <main className="bg-gradient-to-br from-sky-50 via-white to-cyan-50">

      {/* HERO */}
      <section className="py-20 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          About Us
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {/* Add your own intro text */}
          We are dedicated to providing top-quality cleaning services with professionalism and care.
        </p>
      </section>

      {/* ABOUT CONTENT */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center py-16">
        
        {/* TEXT */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Who We Are
          </h2>

          <p className="text-gray-600">
            {/* Replace */}
            Our company focuses on delivering reliable and affordable cleaning solutions for homes and offices.
          </p>

          <p className="text-gray-600">
            {/* Replace */}
            We use modern techniques and trusted professionals to ensure your space is always spotless.
          </p>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center">
          <img
            src="/about-cleaning.png"
            alt="About us"
            className="rounded-2xl shadow-lg w-full max-w-md"
          />
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          
          <div>
            <h3 className="text-3xl font-bold text-sky-600">500+</h3>
            <p className="text-gray-600 text-sm">Happy Clients</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-sky-600">5+</h3>
            <p className="text-gray-600 text-sm">Years Experience</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-sky-600">1000+</h3>
            <p className="text-gray-600 text-sm">Projects Done</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-sky-600">24/7</h3>
            <p className="text-gray-600 text-sm">Support</p>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            
            <div className="p-6 rounded-xl bg-white shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Trusted Professionals</h3>
              <p className="text-gray-600 text-sm">
                Skilled and experienced team you can rely on.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Affordable Pricing</h3>
              <p className="text-gray-600 text-sm">
                Quality service at competitive rates.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Reliable Service</h3>
              <p className="text-gray-600 text-sm">
                We deliver on time and exceed expectations.
              </p>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}