const Showcase = () => {
    
    return (
        // The section encapsulates the pin
        <section id="showcase" className="relative w-full h-screen bg-black">
            
            {/* Sticky Media container */}
            <div className='relative w-full h-full overflow-hidden flex items-center justify-center'>
                
                {/* 🎥 Video (sits at bottom of stack) */}
                <video 
                    className="absolute inset-0 w-full h-full object-cover z-0" 
                    src="videos/bubbles.mp4" 
                    loop 
                    muted 
                    autoPlay 
                    playsInline 
                />

                {/* 🔲 CSS Mix-Blend Multiply Mask Overlay 
                    Logic: Black background + Multiply = Black blocks video.
                           White text + Multiply = Transparent hole showing video! */}
                <div className='absolute inset-0 z-10 w-full h-full bg-black flex justify-center items-center mix-blend-multiply pointer-events-none'>
                    
                    {/* The wrapper that scales up to simulate zoom */}
                    <div className="flex items-center gap-2 text-white ml-6">                    
                        {/* Native Text */}
                        <span className="text-[8vw] tracking-tighter font-semibold leading-none">M5. M5 Pro. M5 Max.</span>
                    </div>

                </div>

                {/* Content Overlay */}
                <div className='content absolute bottom-16 left-6 md:bottom-20 md:left-10 z-20'>
                    <div className="wrapper max-w-md">
                        <div className="lg:max-w-md">
                            <h6 className="text-white">Performance</h6>

                            <h2 className="text-5xl font-semibold bg-[linear-gradient(90deg,#e4f6f0,#9dcfca_31%,#6b95ac_68%,#45657d)] bg-clip-text text-transparent">
                                M5. M5 Pro. M5 Max.
                            </h2>

                            <h4 className="font-semibold bg-[linear-gradient(90deg,#e4f6f0,#9dcfca_31%,#6b95ac_68%,#45657d)] bg-clip-text text-transparent">
                                Up to 8x faster AI performance than the M1 family
                            </h4>

                            <div className="space-y-5 mt-7 pe-10">
                                <p>
                                    A powerful Neural Accelerator is built into each GPU core of the M5 family of chips, which dramatically speeds up AI tasks like image generation from diffusion models, large language model (LLM) prompt processing and on-device transformer model training. The 16-core Neural Engine drives Apple Intelligence features, making on-device AI powerful and energy efficient.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Showcase;