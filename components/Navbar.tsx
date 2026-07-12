export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-yellow-600">
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

        <h1 className="text-2xl font-bold text-yellow-500">
          Techno Ads & Prints
        </h1>

        <ul className="hidden md:flex gap-10 text-white">
          <li className="hover:text-yellow-500 cursor-pointer transition">
            Home
          </li>
          <li className="hover:text-yellow-500 cursor-pointer transition">
            Services
          </li>
          <li className="hover:text-yellow-500 cursor-pointer transition">
            Portfolio
          </li>
          <li className="hover:text-yellow-500 cursor-pointer transition">
            Contact
          </li>
        </ul>

        <button className="bg-yellow-500 text-black px-5 py-2 rounded-full font-semibold hover:bg-yellow-400 transition">
          Get Quote
        </button>

      </div>
    </nav>
  );
}