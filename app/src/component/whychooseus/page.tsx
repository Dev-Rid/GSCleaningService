export default function WhyChoose() {
  const benefits = [
    "Eco-Friendly Products",
    "DBS-Checked Staff",
    "Transparent Pricing",
    "Professional Equipment",
    "Digital Booking",
    "Trusted by Agents",
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-sky-50 to-cyan-50">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Why Choose Green Sahara?
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {benefits.map((b, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="font-semibold text-lg">{b}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}