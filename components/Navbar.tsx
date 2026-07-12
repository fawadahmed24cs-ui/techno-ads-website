"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { SITE } from "@/lib/site";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (id: string) => {
    setMenuOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-yellow-500/10">

      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}

        <button
          onClick={() => scrollToSection("home")}
          className="text-2xl font-bold text-yellow-500"
        >
          TECHNO ADS & PRINTS
        </button>

        {/* Desktop Menu */}

        <nav className="hidden md:flex items-center gap-8">

          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-gray-300 hover:text-yellow-500 transition"
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

        {/* Mobile Menu Button */}

        <button
          className="md:hidden text-yellow-500"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="md:hidden bg-zinc-950 border-t border-yellow-500/20">

          <div className="flex flex-col p-6 space-y-5">

            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left text-gray-300 hover:text-yellow-500 transition"
              >
                {item.name}
              </button>
            ))}

            <a
              href={`https://wa.me/${SITE.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 text-center text-black py-3 rounded-full font-semibold"
            >
              WhatsApp Us
            </a>

          </div>

        </div>
      )}

    </header>
  );
}