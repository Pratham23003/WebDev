function Hero() {
  return (
    <section className="relative w-full text-white">
      {/* Wrapper for the 100vh banner content */}
      <div className="relative h-[85vh] sm:h-screen w-full">
        {/* bg img */}
        <img
          src="/banner.jpg"
          alt="Netflix background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Top gdnt */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black pointer-events-none"></div>

        {/* Hero */}
        <div className="relative flex flex-col items-center justify-center h-full text-center px-4 ">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black max-w-2xl">
            Unlimited movies, shows, and more
          </h1>

          <p className="mt-4 sm:mt-6 text-lg sm:text-xl sm:font-bold px-2">
            Starts at ₹149. Cancel at any time.
          </p>

          <div className="mt-9">
            <h3 className="text-base sm:text-lg px-2">
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="flex flex-col md:flex-row justify-center items-center mt-4 gap-3 w-full">
              <input
                type="email"
                className="px-4 py-4 w-full sm:max-w-[400px] rounded border border-gray-500 backdrop-blur-sm focus:border-white active:border-2"
                name="email"
                id=""
                placeholder="Email Address"
              />
              <button className="bg-red-600 px-6 py-3 sm:px-9 sm:py-3.5 rounded text-white font-sans font-semibold cursor-pointer text-xl sm:text-2xl flex items-center justify-center gap-2 hover:bg-red-800 transition-colors duration-200 whitespace-nowrap">
                Get Started
                <img src="/right.svg" className="w-6 sm:w-8" />
              </button>
            </div>
          </div>
        </div>

        {/* The glowing curve perfectly positioned at the absolute bottom of the image banner */}
        <div className="absolute -bottom-1 left-0 w-full overflow-hidden">
          <svg
            viewBox="0 0 1440 120"
            className="w-full h-[70px] sm:h-[100px] md:h-[120px]"
            preserveAspectRatio="none"
          >
            {/* Solid fill bridging to the gradient block below */}
            <path d="M0,120 C320,20 1120,20 1440,120 Z" fill="black" />
            <path
              d="M0,120 C320,20 1120,20 1440,120"
              stroke="url(#netflixGradient)"
              strokeWidth="4"
              fill="none"
              style={{ filter: "drop-shadow(0px -15px 20px rgba(229, 9, 20, 0.8))" }}
            />
            <defs>
              <linearGradient id="netflixGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(229, 9, 20, 0)" />
                <stop offset="15%" stopColor="rgba(229, 9, 20, 0.4)" />
                <stop offset="40%" stopColor="rgba(229, 9, 20, 1)" />
                <stop offset="60%" stopColor="rgba(229, 9, 20, 1)" />
                <stop offset="85%" stopColor="rgba(229, 9, 20, 0.4)" />
                <stop offset="100%" stopColor="rgba(229, 9, 20, 0)" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* The thick dark gradient block that acts as the physical bridge to the next section */}
      <div className="w-full h-32 sm:h-40 bg-gradient-to-b from-black via-black/90 to-black/0 mb-[-120px] sm:mb-[-160px] relative z-[-1] hidden"></div>
      
    </section>
  );
}

export default Hero;
