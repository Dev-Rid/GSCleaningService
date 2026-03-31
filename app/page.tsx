"use client";

import Link from "next/link";

export default function Hero() {
  return (
     <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-sky-50 via-white to-cyan-50">

      {/* Background Glow Effects */}
      <div className="absolute top-24 left-10 w-72 h-72 bg-sky-300/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-300/30 rounded-full blur-3xl"></div>

      {/* Content Wrapper */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">

        {/* TEXT CONTENT */}
        <div className="space-y-6 text-center md:text-left">

          {/* Badge */}
          <span className="inline-block text-sm font-medium text-sky-700 bg-sky-100 px-4 py-1 rounded-full">
            Trusted Cleaning Professionals
          </span>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
            Professional, Eco-Friendly Cleaning Services
          </h1>

          {/* Subtext */}
          <p className="text-gray-600 text-lg max-w-xl mx-auto md:mx-0">
            Green Sahara Limited delivers high-quality residential and tenancy cleaning using eco-friendly products, trained staff, and modern equipment.
          </p>

          {/* Extra Note */}
          <p className="text-gray-500 text-base max-w-md mx-auto md:mx-0">
            Book your cleaning today and enjoy a fresher, healthier home.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">

            <Link
              href="/booking"
              className="bg-gradient-to-r from-sky-600 to-cyan-500 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition duration-300"
            >
              Book Now
            </Link>

            <Link
              href="/services"
              className="border border-sky-600 text-sky-600 px-8 py-3 rounded-xl font-semibold hover:bg-sky-50 transition duration-300"
            >
              Our Services
            </Link>

          </div>
        </div>

        {/* IMAGE (OPTIONAL - currently removed) */}
        {/*
        <div className="flex justify-center">
          <img
            src="/cleaning-hero.png"
            alt="Cleaning Service"
            className="w-full max-w-md md:max-w-lg drop-shadow-2xl"
          />
        </div>
        */}

      </div>
  </section>
  );
}