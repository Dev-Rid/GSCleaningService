export default function Services() {
  const services = [
    {
      title: "Home Cleaning",
      desc: "Complete cleaning services for your home, leaving it spotless and fresh.",
    },
    {
      title: "Office Cleaning",
      desc: "Professional cleaning solutions to maintain a productive workspace.",
    },
    {
      title: "Deep Cleaning",
      desc: "Thorough cleaning of every corner for a healthier environment.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl border bg-white shadow-sm hover:shadow-lg transition"
            >
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-sky-100 text-sky-600 text-xl font-bold">
                🧼
              </div>

              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {service.title}
              </h3>

              <p className="text-gray-600 text-sm">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}