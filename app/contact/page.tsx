"use client";

export default function ContactPage() {
  return (
    <main className="bg-gradient-to-br from-sky-50 via-white to-cyan-50 py-20 px-6">
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        
        {/* LEFT - INFO */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-900">
            Contact Us
          </h1>

          <p className="text-gray-600">
            {/* Replace */}
            Have questions or want to book a service? Reach out to us today.
          </p>

          <div className="space-y-3 text-gray-700">
            <p>📍 Location: Your Address Here</p>
            <p>📞 Phone: +234 xxx xxx xxxx</p>
            <p>✉️ Email: info@cleanpro.com</p>
          </div>
        </div>

        {/* RIGHT - FORM */}
        <form className="bg-white p-6 rounded-2xl shadow-md space-y-4">
          
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
          />

          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-sky-600 to-cyan-500 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Send Message
          </button>

        </form>
      </div>
    </main>
  );
}