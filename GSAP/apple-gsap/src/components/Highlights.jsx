const Highlights = () => {
  return (
    <section className="bg-[rgb(29,29,31)] w-full py-20">

      {/* Header */}
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between mb-10">
        <h1 className="text-white text-4xl font-semibold">
          Get the highlights.
        </h1>

        <a
          href="#"
          className="text-blue-400 hover:underline"
        >
          Watch the film
        </a>
      </div>

      {/* carousel cont */}
      <div className="overflow-x-auto flex gap-6 px-6 snap-mandatory ml-65">

        {/* Card1 */}
        <div className="min-w-[85%] h-[75vh] snap-start bg-black rounded-3xl p-10 flex flex-col justify-between m-auto bg-[url(/highlight1.jpg)]">
          
          {/* Txt */}
          <h2 className="text-white text-2xl max-w-[300px]">
            M5, M5 Pro and M5 Max. One big, powerful family.
          </h2>
        </div>

        {/* Card2 */}
        <div className="min-w-[85%] h-[75vh] snap-start bg-black rounded-3xl p-10 flex flex-col justify-between m-auto bg-[url(/highlight2.jpg)]">
          
          {/* Txt */}
          <h2 className="text-white text-2xl max-w-[300px]">
            A powerful platform for artificial intelligence. Smart to the core.
          </h2>
        </div>

        {/* Card3 */}
        <div className="min-w-[85%] h-[75vh] snap-start bg-black rounded-3xl p-10 flex flex-col justify-between m-auto bg-[url(/highlight3.jpg)]">
          
          {/* Txt */}
          <h2 className="text-black text-2xl max-w-[300px]">
            M5, M5 Pro and M5 Max. One big, powerful family.
          </h2>
        </div>

        {/* Card4 */}
        <div className="min-w-[85%] h-[75vh] snap-start bg-black rounded-3xl p-10 flex flex-col justify-between m-auto bg-[url(/highlight4.jpg)]">
          
          {/* Txt */}
          <h2 className="text-white text-2xl max-w-[300px]">
            M5, M5 Pro and M5 Max. One big, powerful family.
          </h2>
        </div>

        {/* Card5 */}
        <div className="min-w-[85%] h-[75vh] snap-start bg-black rounded-3xl p-10 flex flex-col justify-between m-auto bg-[url(/highlight5.jpg)]">
          
          {/* Txt */}
          <h2 className="text-white text-2xl max-w-[300px]">
            M5, M5 Pro and M5 Max. One big, powerful family.
          </h2>
        </div>
      </div>

    </section>
  );
};

export default Highlights;