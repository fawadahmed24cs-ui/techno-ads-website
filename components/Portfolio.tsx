"use client";

import Image from "next/image";
import { SITE } from "@/lib/site";

const works = [
  {
    title: "Acrylic Signage",
    image: "/portfolio/acrylic-sign.jpg",
  },
  {
    title: "Banner Printing",
    image: "/portfolio/banner.jpg",
  },
  {
    title: "Business Cards",
    image: "/portfolio/business-card.jpg",
  },
  {
    title: "LED Signage",
    image: "/portfolio/led-signage.jpg",
  },
  {
    title: "Store Signage",
    image: "/portfolio/store-signage.jpg",
  },
  {
    title: "Wedding Invitations",
    image: "/portfolio/wedding-invitation.jpg",
  },
];

export default function Portfolio() {
  const message = encodeURIComponent(
    "Hi Techno Ads & Prints, I liked your portfolio and would like a similar design."
  );

  return (
    <section id="portfolio" className="bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="uppercase tracking-[6px] text-yellow-500 text-sm font-semibold">
            Our Portfolio
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mt-4">
            Some of Our Recent Work
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            A glimpse of premium printing and branding solutions delivered
            for our customers across Bengaluru.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {works.map((item) => (
            <div
              key={item.title}
              className="group overflow-hidden rounded-3xl bg-zinc-900 border border-zinc-800 hover:border-yellow-500 transition duration-300"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}

        </div>

        <div className="text-center mt-16">
          <a
            href={`https://wa.me/${SITE.whatsappNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-500 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 transition"
          >
            Request Similar Design
          </a>
        </div>

      </div>
    </section>
  );
}