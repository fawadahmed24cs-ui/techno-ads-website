const services = [
  {
    title: "UV Printing",
    description:
      "High-quality UV flatbed printing on acrylic, wood, glass, MDF and more.",
    icon: "🖨️",
  },
  {
    title: "Acrylic Signage",
    description:
      "Premium acrylic signs for offices, showrooms and commercial spaces.",
    icon: "🪧",
  },
  {
    title: "Business Cards",
    description:
      "Luxury business cards with matte, glossy, textured and gold foil finishes.",
    icon: "💳",
  },
  {
    title: "Wedding Invitations",
    description:
      "Elegant wedding cards with premium paper, embossing and foil printing.",
    icon: "💍",
  },
  {
    title: "Sunboard Printing",
    description:
      "Durable indoor and outdoor sunboard printing for advertisements and events.",
    icon: "📋",
  },
  {
    title: "Corporate Branding",
    description:
      "Complete branding solutions including brochures, folders, letterheads and more.",
    icon: "🏢",
  },
];

export default function Services() {
  return (
    <section className="bg-zinc-950 text-white py-24 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[6px] text-yellow-500 text-sm font-semibold">
            What We Offer
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mt-4">
            Our Premium Services
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            From premium business stationery to large-format printing,
            Techno Ads & Prints delivers exceptional quality with over
            20 years of expertise.
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service) => (

            <div
              key={service.title}
              className="bg-black border border-yellow-500/20 rounded-3xl p-8 hover:border-yellow-500 hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-yellow-500/20"
            >

              <div className="text-5xl mb-6">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-400 leading-7">
                {service.description}
              </p>

              <button className="mt-8 text-yellow-500 font-semibold hover:translate-x-2 transition">
                Learn More →
              </button>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}