import { useState } from 'react'
import FooterBar from './components/footerBar';

function App() {
  const [color, setColor] = useState("white");
  return (
    <>
    <div className={`w-full h-screen duration-200 ${color}`}>
    </div>
    <FooterBar setColor={setColor} />
    </>
  )
}

export default App
