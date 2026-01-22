function FooterBar({ setColor }) {
    return (
        <nav className="fixed p-1 flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
            <div className = "flex flex-wrap justify-center shadow-lg bg-white rounded-xl">
            <ul className="flex flex-wrap justify-center gap-1 px-3 py-2">
                <button className="outline-none px-4 shadow-lg bg-red-500" onClick={() => setColor('bg-red-500')}>Red</button>
                <button className="outline-none px-4 shadow-lg bg-green-500" onClick={() => setColor('bg-green-500')}>Green</button>
                <button className="outline-none px-4 shadow-lg bg-blue-500" onClick={() => setColor('bg-blue-500')}>Blue</button>
                <button className="outline-none px-4 shadow-lg bg-orange-300" onClick={() => setColor('bg-orange-300')}>Olive</button>
                <button className="outline-none px-4 shadow-lg bg-gray-500" onClick={() => setColor('bg-gray-500')}>Gray</button>
                <button className="outline-none px-4 shadow-lg bg-yellow-400" onClick={() => setColor('bg-yellow-400')}>Yellow</button>
                <button className="outline-none px-4 shadow-lg bg-pink-500" onClick={() => setColor('bg-pink-500')}>Pink</button>
                <button className="outline-none px-4 shadow-lg bg-purple-500" onClick={() => setColor('bg-purple-500')}>Purple</button>
                <button className="outline-none px-4 shadow-lg bg-purple-300" onClick={() => setColor('bg-purple-300')}>Lavender</button>
                <button className="outline-none px-4 shadow-lg bg-white text-gray-500" onClick={() => setColor('bg-white')}>White</button>
                <button className="outline-none px-4 shadow-lg bg-black text-white" onClick={() => setColor('bg-black')}>Black</button>
            </ul>
            </div>
        </nav>
    );
}

export default FooterBar;