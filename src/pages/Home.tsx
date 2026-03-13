export default function Home() {
  return (
    <main className="relative overflow-x-hidden">

      {/* Left — Fixed Character */}
      <div className="hidden md:block fixed bottom-0 left-0 w-1/2 h-screen pointer-events-none">

        <div className="absolute bottom-0 left-0 animate-hero-image">
          <img
            src="/images/diff_LAV_2025-12-23_205620_001.png"
            alt="Featured Skin"
            className="w-[45vw] max-w-none"
          />
        </div>

      </div>


      {/* Right — Scrollable Content */}
      <div className="md:ml-[50%] min-h-screen px-8 relative z-10">

        {/* Hero Text */}
        <section className="min-h-screen flex items-center">

          <div className="max-w-xl animate-hero-text space-y-6 bg-green-900/70 rounded-2xl px-6 py-10 border-2 border-solid border-green-700/70 shadow-xl">

            <h1 className="font-heading text-shadow-lg text-6xl bg-gradient-to-b from-yellow-300 to-yellow-600 bg-clip-text text-transparent text-outline-yellow">
              Fox & Fern
            </h1>

            <p className="text-xl text-neutral-300">
              Custom painted skins, crafted with character.
            </p>

            <p className="text-neutral-400">
              Unique designs tailored to your avatar — blending personality,
              storytelling, and detail into every piece.
            </p>

          </div>

        </section>

        <div className="border-t border-neutral-400/50 my-4"></div>


        {/* Artist Section */}
        <section className="py-12 animate-section max-w-xl mx-auto bg-green-900/70 rounded-2xl px-6 mb-18 mt-8 border-2 border-solid border-green-700/70 shadow-xl">

          <h2 className="font-heading text-white text-4xl mb-4 text-[var(--h1-text-color)] text-shadow-lg">The Artist</h2>

          <p className="text-lg text-emerald-400 mb-4">
            <a
              href="https://my.secondlife.com/ayako.radium"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-300 transition"
            >
              Meet Ayako Radium
            </a>
          </p>

          <p className="text-neutral-400">
            Fox & Fern creates custom anthropomorphic skins with personality,
            detail, and heart. Each design is crafted to bring your Second Life
            character to life with intention and artistry.
          </p>

        </section>

          {/* Mobile Image */}
          <div className="md:hidden flex justify-center pt-12 animate-hero-image">
            <img
              src="/images/diff_LAV_2025-12-23_205620_001.png"
              alt="Featured Skin"
              className="w-[80vw] max-w-none"
            />
          </div>

      </div>
    </main>
  );
}
