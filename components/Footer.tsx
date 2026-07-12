import { SITE } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 border-t border-yellow-500/20 text-white py-14 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-3 gap-12">

          {/* Company */}
          <div>
            <h2 className="text-3xl font-bold text-yellow-500">
              {SITE.companyName}
            </h2>

            <p className="text-gray-400 mt-5 leading-7">
              Premium printing solutions for businesses, brands and events
              with over 20 years of excellence.
            </p>

            <a
              href={`https://wa.me/${SITE.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition"
            >
              WhatsApp Us
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col space-y-4">

              <a href="#home" className="text-gray-400 hover:text-yellow-500">
                Home
              </a>

              <a href="#services" className="text-gray-400 hover:text-yellow-500">
                Services
              </a>

              <a href="#portfolio" className="text-gray-400 hover:text-yellow-500">
                Portfolio
              </a>

              <a href="#contact" className="text-gray-400 hover:text-yellow-500">
                Contact
              </a>

            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Contact
            </h3>

            <p className="text-gray-400">{SITE.phone}</p>

            <p className="text-gray-400 mt-3">{SITE.email}</p>

            <p className="text-gray-400 mt-3 leading-7">
              {SITE.address}
            </p>

            <a
              href={SITE.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 text-yellow-500 hover:text-yellow-400"
            >
              Open in Google Maps →
            </a>
          </div>

        </div>

        <div className="border-t border-zinc-800 mt-12 pt-8 text-center text-gray-500">
          © {year} {SITE.companyName}. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}