const Highlights = () => {
  return (
    <section className="bg-[rgb(29,29,31)] w-full py-20 overflow-hidden">

      {/* Header */}
      <div className="max-w-[1300px] mx-auto px-6 flex items-center justify-between mb-10">
        <h1 className="text-white text-4xl font-semibold">
          Get the highlights.
        </h1>

        <a
          href="#"
          className="text-blue-400 hover:underline"
        >
          Watch the film
          {/* svg icon */}
        </a>
      </div>

      {/* carousel cont */}
      <div className="overflow-x-auto flex gap-6 px-6 snap-mandatory ml-[calc(40vw-600px)] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">

        {/* Card1 */}
        <div className="min-w-[85%] h-[75vh] snap-start bg-black rounded-3xl p-10 flex flex-col justify-between m-auto bg-[url(highlights/highlight1.jpg)] bg-cover bg-no-repeat">
          
          {/* Txt */}
          <h2 className="text-white text-2xl max-w-[300px]">
            M5, M5 Pro and M5 Max. One big, powerful family.
          </h2>
        </div>

        {/* Card2 */}
        <div className="min-w-[85%] h-[75vh] snap-start bg-black rounded-3xl p-10 flex flex-col justify-between m-auto bg-[url(highlights/highlight2.jpg)] bg-cover bg-no-repeat">
          
          {/* Txt */}
          <h2 className="text-white text-2xl max-w-[300px]">
            A powerful platform for artificial intelligence. Smart to the core.
          </h2>
        </div>

        {/* Card3 */}
        <div className="min-w-[85%] h-[75vh] snap-start bg-black rounded-3xl p-10 flex flex-col justify-between m-auto bg-[url(highlights/highlight3.jpg)] bg-cover bg-no-repeat">
          
          {/* Txt */}
          <h2 className="text-black text-2xl max-w-[300px]">
            Longest battery life ever in a Mac. Up to 24 hours. Hit the road, Mac.
          </h2>
        </div>

        {/* Card4 */}
        <div className="min-w-[85%] h-[75vh] snap-start bg-black rounded-3xl p-10 flex flex-col justify-between m-auto bg-[url(highlights/highlight4.jpg)] bg-cover bg-no-repeat">
          
          {/* Txt */}
          <h2 className="text-white text-2xl max-w-[300px]">
            macOS Tahoe. Stunning new design with Liquid Glass, intuitive productivity tools and a reimagined Spotlight.
          </h2>
        </div>

        {/* Card5 */}
        <div className="min-w-[85%] h-[75vh] snap-start bg-black rounded-3xl p-10 flex flex-col justify-between m-auto bg-[url(highlights/highlight5.jpg)] bg-cover bg-no-repeat">
          
          {/* Txt */}
          <h2 className="text-white text-2xl max-w-[490px]">
            Live Activities and the Phone app. Stay in touch without touching your phone.
          </h2>
        </div>
      </div>

      {/* Carousel Controller */}
      <div className="flex items-center justify-center gap-4 mt-12 w-full">
        {/* Navigation Pill */}
        <div className="flex items-center gap-4 bg-[#333336] px-5 w-auto h-14 rounded-full">
           <div className="w-10 h-2 bg-gray-200 rounded-full transition-all duration-300 cursor-pointer"></div>
           <div className="w-2 h-2 bg-gray-500 rounded-full transition-all duration-300 cursor-pointer hover:bg-gray-400"></div>
           <div className="w-2 h-2 bg-gray-500 rounded-full transition-all duration-300 cursor-pointer hover:bg-gray-400"></div>
           <div className="w-2 h-2 bg-gray-500 rounded-full transition-all duration-300 cursor-pointer hover:bg-gray-400"></div>
           <div className="w-2 h-2 bg-gray-500 rounded-full transition-all duration-300 cursor-pointer hover:bg-gray-400"></div>
        </div>

        {/* Play / Pause Circular Button */}
        <button className="flex items-center justify-center w-14 h-14 bg-[#333336] rounded-full hover:bg-gray-600 transition-colors duration-300 cursor-pointer">
          <svg className="w-5 h-5 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M5 3l14 9-14 9V3z" />
          </svg>
        </button>
      </div>

    </section>
  );
};

export default Highlights;