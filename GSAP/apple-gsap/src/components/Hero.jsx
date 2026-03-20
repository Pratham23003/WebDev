const Hero = () => {
  return (
    <section id="hero" className="w-screen h-[90vh] col-center pb-5">
      
      <video
        className="mt-[50vh] h-[1280px]"
        src="/videos/hero.mp4"
        autoPlay
        muted
        playsInline
      ></video>

      <div
        id="hero-text-container"
        className="flex justify-between w-[1280px] relative top-[-500px] items-center"
      >
        <div id="hero-text-left">

          <h1 className="text-3xl text-gray-50">MacBook Pro</h1>

          <p className="text-6xl bg-[linear-gradient(90deg,#e4f6f0,#9dcfca_31%,#6b95ac_68%,#45657d)] bg-clip-text text-transparent">
            Fast runs in the family
          </p>

          <p className="text-2xl text-white">Now with M5, M5 Pro and M5 Max.</p>
        </div>

        <div id="hero-text-right">

          <div className="p-4 bg-[#2a2a2dEB] rounded-4xl flex items-center justify-between gap-5 rounded-full">
            
            <div id="desc-container">
              <p className="text-white">
                From ₹189900.00 *<a href="#"></a>
              </p>
              <p className="text-white">or ₹29983.00/mo. for 6 mo.</p>
            </div>

            <button className="relative z-10 bg-primary text-white py-2 px-6 mt-10 lg:mt-0 rounded-full font-semibold text-lg cursor-pointer hover:bg-white hover:text-black transition-all duration-300 ease-in-out;">
              Buy
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
