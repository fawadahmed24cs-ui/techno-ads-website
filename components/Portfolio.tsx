"use client";

import Image from "next/image";
import { SITE } from "@/lib/site";

const portfolio = [
  {
    title: "Acrylic Signage",
    category: "Signage",
    description:
      "Premium acrylic signage for offices, showrooms and commercial spaces.",
    image: "/portfolio/acrylic-sign.jpg",
  },
  {
    title: "Banner Printing",
    category: "Large Format",
    description:
      "High-quality banners for advertising, events and branding.",
    image: "/portfolio/banner.jpg",
  },
  {
    title: "Business Cards",
    category: "Corporate Branding",
    description:
      "Premium business cards with elegant finishes and modern designs.",
    image: "/portfolio/business-card.jpg",
  },
  
  {
    title: "Store Signage",
    category: "Outdoor Signage",
    description:
      "Eye-catching storefront signs that strengthen your brand identity.",
    image: "/portfolio/store-signage.jpg",
  },
  {
    title: "Wedding Invitations",
    category: "Invitations",
    description:
      "Beautiful custom invitation cards for weddings and special occasions.",
    image: "/portfolio/wedding-invitation.jpg",
  },
  {
  title: "LED Sign Board",
  category: "Outdoor Branding",
  description:
    "Premium illuminated LED sign boards for shops, offices and commercial spaces.",
  image: "/portfolio/led-signage.jpg",
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
    <section
      id="portfolio"
      className="bg-black text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="uppercase tracking-[6px] text-yellow-500 text-sm font-semibold">
            Our Portfolio
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mt-4">
            Our Recent Work
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            Explore some of our premium printing and branding projects
            delivered with quality, precision and creativity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {portfolio.map((item) => (
            <div
              key={item.title}
              className="bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden hover:border-yellow-500 hover:-translate-y-2 transition-all duration-300 shadow-xl"
            >

              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-8">

                <span className="inline-block bg-yellow-500/10 text-yellow-500 px-4 py-2 rounded-full text-sm font-semibold">
                  {item.category}
                </span>

                <h3 className="text-2xl font-bold mt-5">
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

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}