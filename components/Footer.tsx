import { SITE } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 border-t border-yellow-500/20 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Company */}

          <div>
            <h2 className="text-3xl font-bold text-yellow-500">
              {SITE.companyName}
            </h2>

            <p className="text-gray-400 mt-5 leading-7">
              Premium printing solutions for businesses,
              events and brands with over 20 years of
              excellence.
            </p>
          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>Home</li>
              <li>Services</li>
              <li>Portfolio</li>
              <li>Contact</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Contact
            </h3>

            <p className="text-gray-400">
              {SITE.phone}
            </p>

            <p className="text-gray-400 mt-2">
              {SITE.email}
            </p>

            <p className="text-gray-400 mt-2">
              {SITE.address}
            </p>

          </div>

        </div>

        <div className="border-t border-zinc-800 mt-10 pt-8 text-center text-gray-500">

          © {year} {SITE.companyName}. All Rights Reserved.

        </div>

      </div>
    </footer>
  );
}