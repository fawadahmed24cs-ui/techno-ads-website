"use client";

import { SITE } from "@/lib/site";

const services = [
  {
    title: "UV Printing",
    description:
      "High-quality UV flatbed printing on acrylic, wood, glass, MDF and more.",
  },
  {
    title: "Acrylic Signage",
    description:
      "Premium acrylic signs for offices, showrooms and commercial spaces.",
  },
  {
    title: "Business Cards",
    description:
      "Luxury business cards with matte, glossy, textured and gold foil finishes.",
  },
  {
    title: "Wedding Invitations",
    description:
      "Elegant wedding cards with premium paper, embossing and foil printing.",
  },
  {
    title: "Sunboard Printing",
    description:
      "Durable indoor and outdoor sunboard printing for advertisements and events.",
  },
  {
    title: "Corporate Branding",
    description:
      "Complete branding solutions including brochures, folders, letterheads and more.",
  },
];

export default function Services() {
  const getWhatsAppLink = (service: string) => {
    const message = encodeURIComponent(
      `Hi Techno Ads & Prints,

I'm interested in ${service}.

Please share the pricing and more details.`
    );

    return `https://wa.me/${SITE.whatsappNumber}?text=${message}`;
  };

  return (
    <section id="services" className="bg-zinc-950 text-white py-24 px-6">
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
            Techno Ads & Prints delivers exceptional quality backed by
            over 20 years of experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service) => (
            <div
              key={service.title}
              className="bg-black border border-yellow-500/20 rounded-3xl p-8 hover:border-yellow-500 hover:-translate-y-2 transition-all duration-300"
            >

              <h3 className="text-2xl font-bold">
                {service.title}
              </h3>

              <p className="text-gray-400 mt-5 leading-7">
                {service.description}
              </p>

              <a
                href={getWhatsAppLink(service.title)}
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