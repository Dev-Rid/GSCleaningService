// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const pathname = usePathname();

//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "About", path: "/about" },
//     { name: "Services", path: "/services" },
//     { name: "Contact", path: "/contact" },
//   ];

//   return (
//     <nav className="w-full h-22 sticky top-0 z-50 backdrop-blur-md bg-white/80 shadow-sm">
//       <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-6">
        
//         {/* Logo */}
//         <h1 className="text-2xl font-bold bg-gradient-to-r from-sky-600 to-cyan-500 bg-clip-text text-transparent">
//           GSCleanPro
//         </h1>

//         {/* Desktop Links */}
//         <div className="hidden md:flex items-center gap-8 font-medium text-xl">
//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               href={link.path}
//               className={`relative group transition ${
//                 pathname === link.path
//                   ? "text-sky-600 font-semibold"
//                   : "text-gray-700 hover:text-sky-600"
//               }`}
//             >
//               {link.name}

//               {/* Underline animation */}
//               <span
//                 className={`absolute left-0 -bottom-1 h-[2px] bg-sky-600 transition-all duration-300 ${
//                   pathname === link.path
//                     ? "w-full"
//                     : "w-0 group-hover:w-full"
//                 }`}
//               ></span>
//             </Link>
//           ))}
//         </div>

//         {/* CTA Button */}
//         <Link
//           href="/booking"
//           className="hidden md:inline-block bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-5 py-2 rounded-lg font-semibold hover:opacity-90 transition"
//         >
//           Book Now
//         </Link>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={() => setMenuOpen(!menuOpen)}
//           className="md:hidden text-gray-800 focus:outline-none"
//         >
//           ☰
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4">
//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               href={link.path}
//               onClick={() => setMenuOpen(false)}
//               className={`block ${
//                 pathname === link.path
//                   ? "text-sky-600 font-semibold"
//                   : "text-gray-700"
//               }`}
//             >
//               {link.name}
//             </Link>
//           ))}

//           <Link
//             href="/booking"
//             onClick={() => setMenuOpen(false)}
//             className="block text-center bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-semibold text-xl"
//           >
//             Book Now
//           </Link>
//         </div>
//       )}
//     </nav>
//   )
// }









// 'use client';

// import { useState, useEffect } from 'react';

// export default function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navLinks = [
//     { name: 'Home', href: '#home' },
//     { name: 'About', href: '#about' },
//     { name: 'Services', href: '#services' },
//     { name: 'Contact', href: '#contact' },
//   ];

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled
//           ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-emerald-100/50'
//           : 'bg-transparent'
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="flex items-center justify-between h-20">
//           {/* Logo */}
//           <a href="#home" className="flex items-center gap-3 group">
//             {/* Leaf Icon Logo */}
//             <div className="relative">
//               <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-emerald-200">
//                 <svg
//                   viewBox="0 0 24 24"
//                   fill="white"
//                   className="w-6 h-6"
//                 >
//                   <path d="M12 2C10.5 2 9 2.5 8 3.5C7 4.5 6.5 6 6.5 7.5C6.5 9.5 7.5 11 9 12C7.5 13 6.5 14.5 6.5 16.5C6.5 18 7 19.5 8 20.5C9 21.5 10.5 22 12 22C13.5 22 15 21.5 16 20.5C17 19.5 17.5 18 17.5 16.5C17.5 14.5 16.5 13 15 12C16.5 11 17.5 9.5 17.5 7.5C17.5 6 17 4.5 16 3.5C15 2.5 13.5 2 12 2M12 4C12.8 4 13.5 4.3 14 4.8C14.5 5.3 14.8 6 14.8 6.8C14.8 8 14 9 12.8 9.5C12.5 9.7 12.3 9.8 12 9.8C11.7 9.8 11.5 9.7 11.2 9.5C10 9 9.2 8 9.2 6.8C9.2 6 9.5 5.3 10 4.8C10.5 4.3 11.2 4 12 4M12 14.2C12.3 14.2 12.5 14.3 12.8 14.5C14 15 14.8 16 14.8 17.2C14.8 18 14.5 18.7 14 19.2C13.5 19.7 12.8 20 12 20C11.2 20 10.5 19.7 10 19.2C9.5 18.7 9.2 18 9.2 17.2C9.2 16 10 15 11.2 14.5C11.5 14.3 11.7 14.2 12 14.2Z" />
//                 </svg>
//               </div>
//               {/* Glow effect */}
//               <div className="absolute inset-0 bg-emerald-400 rounded-xl blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
//             </div>

//             {/* Company Name */}
//             <div>
//               <div className="font-bold text-xl text-slate-800 group-hover:text-emerald-600 transition-colors duration-300">
//                 Green Sahara
//               </div>
//               <div className="text-xs text-emerald-600 font-medium -mt-1">
//                 Limited
//               </div>
//             </div>
//           </a>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center gap-8">
//             {navLinks.map((link) => (
//                 key={link.name}
//                 href={link.href}
//                 className="relative text-slate-700 hover:text-emerald-600 font-medium transition-colors duration-300 group"
//               >
//                 {link.name}
//                 <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-green-600 group-hover:w-full transition-all duration-300"></span>
//               </a>
//             ))}
//           </div>

//           {/* CTA Button (Desktop) */}
//           <div className="hidden md:block">
  
//               href="#contact"
//               className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-emerald-200 hover:-translate-y-0.5 transition-all duration-300"
//             >
//               Get a Quote
//             </a>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 hover:bg-emerald-50 rounded-lg transition-colors duration-300"
//             aria-label="Toggle menu"
//           >
//             <span
//               className={`w-6 h-0.5 bg-slate-700 transition-all duration-300 ${
//                 isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
//               }`}
//             ></span>
//             <span
//               className={`w-6 h-0.5 bg-slate-700 transition-all duration-300 ${
//                 isMobileMenuOpen ? 'opacity-0' : ''
//               }`}
//             ></span>
//             <span
//               className={`w-6 h-0.5 bg-slate-700 transition-all duration-300 ${
//                 isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
//               }`}
//             ></span>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`md:hidden overflow-hidden transition-all duration-300 ${
//           isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
//         }`}
//       >
//         <div className="bg-white/95 backdrop-blur-md border-t border-emerald-100 px-6 py-6">
//           <div className="flex flex-col gap-4">
//             {navLinks.map((link, index) => (
              
//                 key={link.name}
//                 href={link.href}
//                 onClick={() => setIsMobileMenuOpen(false)}
//                 className="text-slate-700 hover:text-emerald-600 font-medium py-2 hover:pl-2 transition-all duration-300"
//                 style={{ animationDelay: `${index * 50}ms` }}
//               >
//                 {link.name}
//               </a>
//             ))}
            
//               href="#contact"
//               onClick={() => setIsMobileMenuOpen(false)}
//               className="mt-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-xl font-semibold text-center hover:shadow-lg transition-all duration-300"
//             >
//               Get a Quote
//             </a>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=DM+Sans:wght@400;500;600;700&display=swap');
//       `}</style>
//     </nav>
//   );
// }

















'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-emerald-100/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="#home" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-emerald-200">
                <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                  <path d="M12 2C10.5 2 9 2.5 8 3.5C7 4.5 6.5 6 6.5 7.5C6.5 9.5 7.5 11 9 12C7.5 13 6.5 14.5 6.5 16.5C6.5 18 7 19.5 8 20.5C9 21.5 10.5 22 12 22C13.5 22 15 21.5 16 20.5C17 19.5 17.5 18 17.5 16.5C17.5 14.5 16.5 13 15 12C16.5 11 17.5 9.5 17.5 7.5C17.5 6 17 4.5 16 3.5C15 2.5 13.5 2 12 2Z" />
                </svg>
              </div>
              <div className="absolute inset-0 bg-emerald-400 rounded-xl blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>

            <div>
              <div className="font-bold text-xl text-slate-800 group-hover:text-emerald-600 transition">
                Green Sahara
              </div>
              <div className="text-xs text-emerald-600 font-medium -mt-1">
                Limited
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-slate-700 hover:text-emerald-600 font-medium transition group"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-green-600 group-hover:w-full transition-all"></span>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              href="#contact"
              className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-xl font-semibold hover:shadow-xl hover:-translate-y-0.5 transition"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 hover:bg-emerald-50 rounded-lg"
          >
            <span className={`w-6 h-0.5 bg-slate-700 transition ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-0.5 bg-slate-700 transition ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-slate-700 transition ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="bg-white/95 backdrop-blur-md border-t border-emerald-100 px-6 py-6 flex flex-col gap-4">
          
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-slate-700 hover:text-emerald-600 font-medium py-2"
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-xl font-semibold text-center"
          >
            Get a Quote
          </Link>

        </div>
      </div>
    </nav>
  );
}












