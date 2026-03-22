const Hero = () => {
  return (
    <section id="hero" className="relative w-full h-[100vh] min-h-[600px] bg-black text-white flex flex-col justify-end pb-10">

      {/* vid */}
      <div className="absolute inset-0 w-full h-full flex justify-center items-center pointer-events-none z-0 overflow-hidden">
        <video
          className="w-full h-full object-contain scale-110 md:scale-100"
          src="/videos/hero.mp4"
          autoPlay
          muted
          playsInline
        />
      </div>

      {/* Text */}
      <div className="relative z-10 max-w-[1200px] w-full mx-auto px-6 flex justify-between items-end md:items-center">
        
        {/* Left */}
        <div>
          <h1 className="text-2xl text-gray-300 mb-2">MacBook Pro</h1>

          <p className="text-5xl font-semibold bg-[linear-gradient(90deg,#e4f6f0,#9dcfca_31%,#6b95ac_68%,#45657d)] bg-clip-text text-transparent">
            Fast runs in the family
          </p>

          <p className="text-lg text-gray-300 mt-2">
            Now with M5, M5 Pro and M5 Max.
          </p>
        </div>

        {/* Right */}
        <div className="mt-5">
          <div className="p-4 bg-[#2a2a2d] rounded-full flex items-center gap-4">
            
            <div>
              <p className="text-sm">From ₹189900.00 *</p>
              <p className="text-sm">or ₹29983.00/mo. for 6 mo.</p>
            </div>

            <button className="bg-blue-500 text-white py-1.5 px-5 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300">
              Buy
            </button>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;