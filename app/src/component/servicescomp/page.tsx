export default function Services() {
  const services = [
    {
      icon: "🏠",
      title: "Residential Cleaning",
      desc: "Regular or deep cleaning to keep your home spotless.",
    },
    {
      icon: "🔑",
      title: "End of Tenancy Cleaning",
      desc: "Deposit-compliant full property cleaning.",
    },
    {
      icon: "🧼",
      title: "Carpet & Upholstery",
      desc: "Deep cleaning for stain and odour removal.",
    },
  ];

  return (
    <section id="services" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our Key Services
        </h2>
        <p className="text-gray-600 mt-3">
          Professional cleaning solutions tailored to your needs
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((s, i) => (
          <div
            key={i}
            className="p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition"
          >
            <div className="text-3xl mb-4">{s.icon}</div>
            <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
            <p className="text-gray-600 text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}