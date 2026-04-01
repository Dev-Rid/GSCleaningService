export default function ServiceAreas() {
  const locations = [
    "Wallsend",
    "Newcastle upon Tyne",
    "North Tyneside",
    "Tyne & Wear",
    "Surrounding Areas",
  ];

  return (
    <section className="py-20 px-6 text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Service Areas
      </h2>

      <p className="text-gray-600 mb-8">
        Proudly serving homes across the Tyne & Wear region
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        {locations.map((loc, i) => (
          <span
            key={i}
            className="px-4 py-2 bg-sky-100 text-sky-700 rounded-full text-sm"
          >
            {loc}
          </span>
        ))}
      </div>
    </section>
  );
}