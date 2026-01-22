import halfLogo from '../src/assets/react-logo-half.png'
function Main() {
  return (
    <>
      <main className="w-full h-screen bg-gray-950 overflow-hidden">
        <div className="w-full h-screen" style={{ backgroundImage: `url(${halfLogo})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 10%' }}>
        <h1 className="text-white px-15 py-18 text-5xl font-bold">Fun Facts about React</h1>
        <ul className="text-white px-20 text-2xl font-light list-disc marker:text-sky-400">
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on Github</li>
            <li>Is maintained by Meta</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
        </div>
      </main>
    </>
  );
}

export default Main;
