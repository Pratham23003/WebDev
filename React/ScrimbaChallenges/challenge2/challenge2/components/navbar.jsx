import reactLogo from '../src/assets/react-logo.png'
function Navbar(){
    return(
        <header>
            <nav className='flex items-center bg-[#21222A] h-20 p-10 text-sky-300 gap-1 font-bold text-2xl'>
                <img src = {reactLogo} height='40px' width='40px'></img>
                <span>ReactFacts</span>
            </nav>
        </header>
    )
}
export default Navbar