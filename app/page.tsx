// "use client";

// import Link from "next/link";

// export default function Hero() {
//   return (
//     <section className="w-full min-h-[90vh] flex items-center bg-gradient-to-br from-sky-50 via-white to-cyan-50">
      
//       <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
//         {/* LEFT CONTENT */}
//         <div className="space-y-6 text-center md:text-left">
          
//           {/* Heading */}
//           <h1 className="text-4xl md:text-4xl font-bold leading-tight text-gray-900">
            // Professional. Eco-Friendly, Reliable Cleaning Services in the North East
//           </h1>

//           {/* Description (You can replace this) */}
//           <p className="text-gray-600 text-lg max-w-lg mx-auto md:mx-0">
//             {/* Add your own description here */}
            // Green Sahara Limited delivers high-quality residential and tenancy cleaning using eco-frinedly products, trained staff, and modern equipment
//           </p>
          
          // <span className=" font-extralight leading-tight text-gray-900">
          //   Book your cleaning today and experiencea fresher, healthier home
          // </span>

//           {/* Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            
//             {/* Primary Button */}
//             <Link
//               href="/booking"
//               className="bg-gradient-to-r from-sky-600 to-cyan-500 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:opacity-90 transition"
//             >
//               Get a Free Quote
//             </Link>

//             {/* Secondary Button */}
//             <Link
//               href="/services"
//               className="border border-sky-600 text-sky-600 px-6 py-3 rounded-lg font-semibold hover:bg-sky-50 transition"
//             >
//               Book a Cleaning
//             </Link>
//           </div>
//         </div>

//         {/* RIGHT CONTENT (Image / Illustration) */}
//         <div className="flex justify-center">
//           <img
//             src="/cleaning-hero.png" // replace with your image
//             alt="Cleaning Service"
//             className="w-full max-w-md md:max-w-lg drop-shadow-lg"
//           />
//         </div>

//       </div>
//     </section>
//   );
// }




"use client";

import Link from "next/link";

export default function Hero() {
  return (
    // <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-sky-50 via-white to-cyan-50">
      
    //   {/* Background blur shapes */}
    //   <div className="absolute top-20 left-10 w-72 h-72 bg-sky-200 rounded-full blur-3xl opacity-30"></div>
    //   <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-200 rounded-full blur-3xl opacity-30"></div>

    //   <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center relative z-10">
        
    //     {/* TEXT */}
    //     <div className="space-y-6 text-center md:text-left animate-fadeIn">
          
    //       <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
    //         Professional. Eco-Friendly, Reliable Cleaning Services in the North East
    //       </h1>

    //       <p className="text-gray-600 text-lg max-w-lg mx-auto md:mx-0">
    //         {/* Replace with your content */}
    //         Green Sahara Limited delivers high-quality residential and tenancy cleaning using eco-frinedly products, trained staff, and modern equipment
    //       </p>

    //       <span className=" font-extralight leading-tight text-gray-900">
    //         Book your cleaning today and experiencea fresher, healthier home
    //       </span>
    //       <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            
    //         <Link
    //           href="/booking"
    //           className="bg-gradient-to-r from-sky-600 to-cyan-500 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:opacity-90 transition"
    //         >
    //           Book Now
    //         </Link>

    //         <Link
    //           href="/services"
    //           className="border border-sky-600 text-sky-600 px-6 py-3 rounded-lg font-semibold hover:bg-sky-50 transition"
    //         >
    //           Our Services
    //         </Link>
    //       </div>
    //     </div>

    //     {/* IMAGE */}
    //     <div className="flex justify-center">
    //       <img
    //         src="/cleaning-hero.png"
    //         alt="Cleaning Service"
    //         className="w-full max-w-md md:max-w-lg drop-shadow-lg"
    //       />
    //     </div>
    //   </div>
    // </section>


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