import React from 'react'

const Header = () => {

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
                <div className="flex-shrink-0 cursor-pointer flex items-center gap-2">
                    {/* Using an emoji or stylized text if logo.png is basic, but we'll keep the image tag and style it */}
                    <div className="bg-orange-500 text-white p-2 rounded-xl shadow-lg shadow-orange-500/30">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
                        </svg>
                    </div>
                    <span className="font-extrabold text-2xl tracking-tight text-gray-900">Food<span className="text-orange-500">App</span></span>
                </div>

                <nav className="hidden md:block">
                    <ul className="flex space-x-8 items-center">
                        <li className="text-gray-600 hover:text-orange-500 font-medium transition-colors cursor-pointer">Home</li>
                        <li className="text-gray-600 hover:text-orange-500 font-medium transition-colors cursor-pointer">About Us</li>
                        <li className="text-gray-600 hover:text-orange-500 font-medium transition-colors cursor-pointer">Contact Us</li>
                    </ul>
                </nav>

                <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 text-gray-600 hover:text-orange-500 font-medium transition-colors cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                        <span>Cart</span>
                    </button>
                    <button className="bg-gray-900 hover:bg-gray-800 text-white px-5 py-2.5 rounded-full font-medium transition-all transform hover:scale-105 active:scale-95 shadow-md">
                        Sign In
                    </button>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header