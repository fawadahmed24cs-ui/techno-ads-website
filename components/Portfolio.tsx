"use client";

import Image from "next/image";
import { SITE } from "@/lib/site";

const portfolio = [
  {
    title: "Acrylic Signage",
    subtitle: "Premium Signage Solutions",
    image: "/portfolio/acrylic-sign.jpg",
  },
  {
    title: "Banner Printing",
    subtitle: "Large Format Printing",
    image: "/portfolio/banner.jpg",
  },
  {
    title: "Business Cards",
    subtitle: "Corporate Branding",
    image: "/portfolio/business-card.jpg",
  },
  {
    title: "LED Signage",
    subtitle: "Illuminated Branding",
    image: "/portfolio/led-signage.jpg",
  },
  {
    title: "Store Signage",
    subtitle: "Outdoor Branding",
    image: "/portfolio/store-signage.jpg",
  },
  {
    title: "Wedding Invitations",
    subtitle: "Premium Invitations",
    image: "/portfolio/wedding-invitation.jpg",
  },
];

export default function Portfolio() {
  const message = encodeURIComponent(
    "Hi Techno Ads & Prints, I saw your portfolio and would like a similar design.Please share the details."
  );

  return (
    <section
      id="portfolio"
      className="bg-black text-white pt-12 pb-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">

          <p className="uppercase tracking-[8px] text-yellow-500 text-lg font-bold">
            OUR PORTFOLIO
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mt-4">
            Some of Our Recent Work
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg leading-8">
            A glimpse of premium printing and branding solutions delivered for
            our customers across Bengaluru.
          </p>

        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {portfolio.map((item) => (
            <div
              key={item.title}
              className="group overflow-hidden rounded-3xl border border-zinc-800 hover:border-yellow-500 transition duration-300"
            >
              <div className="relative h-96">

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p className="text-gray-300 mt-2">
                    {item.subtitle}
                  </p>
                </div>

              </div>
            </div>
          ))}

        </div>

        {/* CTA */}
        <div className="text-center mt-16">

          <a
            href={`https://wa.me/${SITE.whatsappNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-500 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 transition"
          >
            Request similar design
          </a>

        </div>

      </div>
    </section>
  );
}