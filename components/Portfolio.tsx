"use client";

import { SITE } from "@/lib/site";

const portfolio = [
  {
    title: "Luxury Business Cards",
    category: "Corporate Branding",
    description:
      "Premium matte, textured and gold foil business cards that leave a lasting impression.",
  },
  {
    title: "Wedding Invitations",
    category: "Premium Invitations",
    description:
      "Elegant invitation cards with premium finishes and custom designs.",
  },
  {
    title: "UV Flatbed Printing",
    category: "UV Printing",
    description:
      "High-quality UV printing on acrylic, glass, MDF, wood and more.",
  },
  {
    title: "Acrylic Sign Boards",
    category: "Signage",
    description:
      "Modern acrylic signage for offices, retail stores and commercial spaces.",
  },
  {
    title: "Corporate Brochures",
    category: "Marketing",
    description:
      "Premium brochures, catalogues and company profiles for businesses.",
  },
  {
    title: "Sunboard Printing",
    category: "Large Format",
    description:
      "Indoor and outdoor sunboard printing for events and advertisements.",
  },
];

export default function Portfolio() {
  const getWhatsAppLink = (service: string) => {
    const message = encodeURIComponent(
      `Hi Techno Ads & Prints,

I'm interested in ${service}.

Please share the pricing and more details.`
    );

    return `https://wa.me/${SITE.whatsappNumber}?text=${message}`;
  };

  return (
    <section id="portfolio" className="bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="uppercase tracking-[6px] text-yellow-500 text-sm font-semibold">
            What We Print
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mt-4">
            Premium Printing Solutions
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            From premium business stationery to large-format branding, we
            deliver high-quality printing solutions for businesses, events
            and individuals across Bengaluru.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {portfolio.map((item) => (
            <div
              key={item.title}
              className="bg-zinc-950 border border-yellow-500/20 rounded-3xl p-8 hover:border-yellow-500 hover:-translate-y-2 transition-all duration-300"
            >

              <span className="inline-block bg-yellow-500/10 text-yellow-500 px-4 py-2 rounded-full text-sm font-semibold">
                {item.category}
              </span>

              <h3 className="text-2xl font-bold mt-6">
                {item.title}
              </h3>

              <p className="text-gray-400 mt-4 leading-7">
                {item.description}
              </p>

              <a
                href={getWhatsAppLink(item.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 block w-full text-center bg-yellow-500 text-black py-3 rounded-full font-semibold hover:bg-yellow-400 transition duration-300"
              >
                Get Quote on WhatsApp
              </a>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}