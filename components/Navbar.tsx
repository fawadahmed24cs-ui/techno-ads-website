"use client";

import Image from "next/image";
import { SITE } from "@/lib/site";

export default function Navbar() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-md border-b border-zinc-800 z-50">
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        {/* Logo */}
        <button
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-3"
        >
          <Image
            src="/logo.jpg"
            alt="Techno Ads & Prints"
            width={55}
            height={55}
            priority
            className="object-contain"
          />

          <span className=" text-sm md:text-xl font-bold text-yellow-500">
            TECHNO ADS & PRINTS
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-gray-300 hover:text-yellow-500 transition duration-300"
            >
              {item.name}
            </button>
          ))}

          <a
            href={`https://wa.me/${SITE.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition"
          >
            WhatsApp
          </a>
        </nav>

        {/* Mobile WhatsApp Button */}
        <a
          href={`https://wa.me/${SITE.whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="md:hidden bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-semibold"
        >
          WhatsApp
        </a>

      </div>
    </header>
  );
}