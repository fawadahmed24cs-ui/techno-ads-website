import { SITE } from "@/lib/site";

export default function Contact() {
  return (
    <section id="contact" className="bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="uppercase tracking-[6px] text-yellow-500 text-sm font-semibold">
            Contact Us
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mt-4">
            Let's Build Something Amazing
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            Reach out to us for premium printing solutions. We're always ready
            to help with your next project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Left */}
          <div className="bg-zinc-950 border border-yellow-500/20 rounded-3xl p-8">

            <h3 className="text-3xl font-bold mb-8">
              Contact Information
            </h3>

            <div className="space-y-8">

              <div>
                <p className="text-yellow-500 font-semibold">📍 Address</p>
                <p className="text-gray-300 mt-2">
                  {SITE.address}
                </p>
              </div>

              <div>
                <p className="text-yellow-500 font-semibold">📞 Phone</p>
                <p className="text-gray-300 mt-2">
                  {SITE.phone}
                </p>
              </div>

              <div>
                <p className="text-yellow-500 font-semibold">📧 Email</p>
                <p className="text-gray-300 mt-2">
                  {SITE.email}
                </p>
              </div>

            </div>

            <div className="flex flex-wrap gap-4 mt-10">

              <a
                href={`https://wa.me/${SITE.whatsappNumber}`}
                target="_blank"
                className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition"
              >
                WhatsApp
              </a>

              <a
                href={`tel:${SITE.phone}`}
                className="border border-yellow-500 px-6 py-3 rounded-full hover:bg-yellow-500 hover:text-black transition"
              >
                Call Now
              </a>

            </div>

          </div>

          {/* Right */}

          <div className="bg-zinc-950 border border-yellow-500/20 rounded-3xl p-8 flex flex-col justify-center items-center text-center">

            <h3 className="text-3xl font-bold">
              Visit Our Store
            </h3>

            <p className="text-gray-400 mt-6">
              Located in the heart of Shivajinagar, Bengaluru.
            </p>

            <a
              href={SITE.googleMaps}
              target="_blank"
              className="mt-10 bg-yellow-500 text-black px-8 py-4 rounded-full font-bold hover:bg-yellow-400 transition"
            >
              Open in Google Maps
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}