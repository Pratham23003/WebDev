function Hero() {
  return (
    <section className="relative h-screen w-full text-white">
      {/* bg img */}
      <img
        src="/banner.jpg"
        alt="Netflix background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Top gdnt */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black"></div>

      {/* Hero */}
      <div className="relative flex flex-col items-center justify-center h-full text-center px-4 ">
        <h1 className="text-7xl font-black max-w-200">
          Unlimited movies, shows, and more
        </h1>

        <p className="mt-6 text-xl font-bold">
          Starts at ₹149. Cancel at any time.
        </p>

        <div className="mt-9">
          <h3 className="text-l">
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
          <div className="flex justify-center items-center mt-4 gap-3">
            <input
              type="email"
              className="px-4 py-4 w-100 rounded border border-gray-500 backdrop-blur-sm active:border-white active:border-2"
              name="email"
              id=""
              placeholder="Email Address"
            />
            <div className="">
              <button className="bg-red-600 px-9 py-4 rounded text-white font-sans font-semibold cursor-pointer text-2xl">
                Get Started
                <img src="/right.svg" className="w-8" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
