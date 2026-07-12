const portfolio = [
  {
    title: "Luxury Business Cards",
    category: "Corporate Branding",
    description:
      "Premium matte, glossy and textured business cards for professionals and brands.",
  },
  {
    title: "Wedding Invitations",
    category: "Premium Invitations",
    description:
      "Elegant wedding invitations with premium paper, embossing and foil finishes.",
  },
  {
    title: "UV Flatbed Printing",
    category: "UV Printing",
    description:
      "High-quality UV printing on acrylic, wood, glass and other premium materials.",
  },
  {
    title: "Acrylic Sign Boards",
    category: "Signage",
    description:
      "Modern acrylic signs for offices, showrooms and commercial spaces.",
  },
  {
    title: "Corporate Brochures",
    category: "Marketing",
    description:
      "Premium brochures, catalogues and company profiles designed for businesses.",
  },
  {
    title: "Sunboard Printing",
    category: "Large Format",
    description:
      "Durable indoor and outdoor sunboard printing for advertisements and events.",
  },
];

export default function Portfolio() {
  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="uppercase tracking-[6px] text-yellow-500 text-sm font-semibold">
            Our Portfolio
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mt-4">
            Recent Projects
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Explore some of our premium printing and branding work delivered over
            the last 20+ years.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {portfolio.map((item) => (
            <div
              key={item.title}
              className="bg-zinc-950 border border-yellow-500/20 rounded-3xl p-8 hover:border-yellow-500 hover:-translate-y-2 transition-all duration-300"
            >

              <p className="text-yellow-500 uppercase text-sm tracking-wider">
                {item.category}
              </p>

              <h3 className="text-2xl font-bold mt-4">
                {item.title}
              </h3>

              <p className="text-gray-400 mt-4 leading-7">
                {item.description}
              </p>

              <button className="mt-8 w-full bg-yellow-500 text-black py-3 rounded-full font-semibold hover:bg-yellow-400 transition">
                WhatsApp Us
              </button>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}