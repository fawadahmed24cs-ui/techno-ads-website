export default function Hero() {
  return (
    <section className="min-h-screen bg-black text-white pt-32">
      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <div>

          <p className="uppercase tracking-[6px] text-yellow-500 text-sm font-semibold mb-6">
            Bengaluru's Premium Printing Partner
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Premium
            <br />
            <span className="text-yellow-500">
              Printing
            </span>
            <br />
            Solutions
          </h1>

          <p className="text-gray-300 text-lg mt-8 leading-8 max-w-xl">
            We specialize in UV printing, acrylic signage, corporate branding,
            wedding invitations, business stationery, large-format printing and
            premium branding solutions with over 20 years of industry experience.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 transition">
              Get Instant Quote
            </button>

            <button className="border border-yellow-500 text-yellow-500 px-8 py-4 rounded-full hover:bg-yellow-500 hover:text-black transition">
              View Portfolio
            </button>

          </div>

          <div className="grid grid-cols-3 gap-8 mt-16">

            <div>
              <h2 className="text-4xl font-bold text-yellow-500">
                20+
              </h2>
              <p className="text-gray-400">
                Years Experience
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-yellow-500">
                5000+
              </h2>
              <p className="text-gray-400">
                Projects
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-yellow-500">
                1000+
              </h2>
              <p className="text-gray-400">
                Happy Clients
              </p>
            </div>

          </div>

        </div>

        {/* Right Side */}

        <div className="flex justify-center">

          <div className="relative w-full max-w-lg h-[550px] rounded-3xl bg-gradient-to-br from-yellow-500 via-orange-500 to-yellow-700 p-[4px] shadow-2xl">

            <div className="bg-zinc-950 rounded-3xl h-full flex flex-col items-center justify-center text-center px-8">

              <h2 className="text-5xl font-extrabold text-yellow-500">
                TECHNO
              </h2>

              <h3 className="text-4xl font-bold text-white mt-2">
                ADS & PRINTS
              </h3>

              <p className="text-gray-400 mt-4">
                20+ Years of Excellence in Printing
              </p>

              <div className="mt-10 space-y-4 w-full">

                <div className="bg-zinc-900 rounded-xl py-4">
                  UV Printing
                </div>

                <div className="bg-zinc-900 rounded-xl py-4">
                  Acrylic Signage
                </div>

                <div className="bg-zinc-900 rounded-xl py-4">
                  Business Cards
                </div>

                <div className="bg-zinc-900 rounded-xl py-4">
                  Wedding Invitations
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}