"use client";

export default function GoogleReviews() {
  return (
    <section className="bg-zinc-950 text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[6px] text-yellow-500 text-sm font-semibold">
            Google Reviews
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mt-4">
            Trusted by Our Customers
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            We are proud to maintain a <span className="text-yellow-500 font-semibold">4.9★ Google Rating </span>
            based on <span className="text-yellow-500 font-semibold">20 genuine customer reviews</span>.
          </p>
        </div>

        {/* Rating Card */}
        <div className="bg-black border border-yellow-500/20 rounded-3xl p-10 text-center mb-16">
          <div className="text-5xl mb-4">⭐⭐⭐⭐⭐</div>

          <h3 className="text-5xl font-bold text-yellow-500">
            4.9 / 5
          </h3>

          <p className="text-gray-400 mt-3 text-lg">
            Based on 20 Google Reviews
          </p>
        </div>

        {/* Reviews */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Review 1 */}
          <div className="bg-black border border-zinc-800 rounded-3xl p-8 hover:border-yellow-500 transition">
            <div className="text-yellow-500 text-xl mb-4">
              ⭐⭐⭐⭐⭐
            </div>

            <p className="text-gray-300 italic leading-7">
              "Best quality printing at reasonable rates. Good service."
            </p>

            <h4 className="mt-6 font-bold text-white">
              Aqil Pasha
            </h4>
          </div>

          {/* Review 2 */}
          <div className="bg-black border border-zinc-800 rounded-3xl p-8 hover:border-yellow-500 transition">
            <div className="text-yellow-500 text-xl mb-4">
              ⭐⭐⭐⭐⭐
            </div>

            <p className="text-gray-300 italic leading-7">
              "Best Ads Company in the town with very reasonable pricing. One-stop shop for graphics and digital marketing."
            </p>

            <h4 className="mt-6 font-bold text-white">
              Mohammed Sufyaan Ahmed
            </h4>
          </div>

          {/* Review 3 */}
          <div className="bg-black border border-zinc-800 rounded-3xl p-8 hover:border-yellow-500 transition">
            <div className="text-yellow-500 text-xl mb-4">
              ⭐⭐⭐⭐⭐
            </div>

            <p className="text-gray-300 italic leading-7">
              "Printing quality and material quality were fantastic. Delivery commitment was perfect."
            </p>

            <h4 className="mt-6 font-bold text-white">
              Shams Saheb
            </h4>
          </div>

        </div>

        {/* Button */}
        <div className="text-center mt-16">
          <a
            href="https://share.google/tdOTrFo0R6oov9LEb"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-500 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 transition"
          >
            ⭐ Read All 20 Google Reviews
          </a>
        </div>

      </div>
    </section>
  );
}