const reasons = [
  {
    title: "20+ Years Experience",
    description:
      "Serving businesses across Bengaluru with trusted printing solutions for more than two decades.",
    icon: "🏆",
  },
  {
    title: "Premium Quality",
    description:
      "High-quality materials, vibrant colors and precision finishing on every project.",
    icon: "✨",
  },
  {
    title: "Fast Delivery",
    description:
      "Quick turnaround without compromising quality, even for bulk orders.",
    icon: "🚚",
  },
  {
    title: "Affordable Pricing",
    description:
      "Competitive pricing with excellent value for businesses of every size.",
    icon: "💰",
  },
  {
    title: "Latest Printing Technology",
    description:
      "Modern UV printing, acrylic signage and large-format printing solutions.",
    icon: "🖨️",
  },
  {
    title: "1000+ Happy Clients",
    description:
      "Trusted by businesses, event organizers and corporate clients across Bengaluru.",
    icon: "❤️",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-zinc-950 text-white py-24 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[6px] text-yellow-500 text-sm font-semibold">
            Why Choose Us
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mt-4">
            Experience You Can Trust
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            Techno Ads & Prints has been helping businesses build strong
            brands through premium printing services for over 20 years.
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {reasons.map((reason) => (

            <div
              key={reason.title}
              className="bg-black rounded-3xl border border-yellow-500/20 p-8 hover:border-yellow-500 hover:-translate-y-2 transition-all duration-300"
            >

              <div className="text-5xl mb-6">
                {reason.icon}
              </div>

              <h3 className="text-2xl font-bold">
                {reason.title}
              </h3>

              <p className="text-gray-400 mt-4 leading-7">
                {reason.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}