import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">

        <h1 className="text-6xl md:text-8xl font-bold text-center">
          Techno Ads & Prints
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 mt-6 text-center max-w-3xl">
          Premium Printing Solutions for Businesses,
          Events & Corporate Branding.
        </p>

        <button className="mt-10 bg-yellow-500 text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-400 transition duration-300">
          Get Instant Quote
        </button>

      </main>
    </>
  );
}