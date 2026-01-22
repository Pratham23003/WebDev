import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0);
  // let counter = 0;
  const counterIncrease = ()=>{
    if(counter > 19) return;
    setCounter(counter+1);
  }
  const counterDecrease = ()=>{
    if(counter < 1) return;
    else setCounter(counter-1);
  }
  return (
    <>
    <h1>Counter (0-20) : {counter}</h1>
    <button onClick={counterIncrease}>Add Value</button>
    <br/>
    <button onClick={counterDecrease}>Decrease Value</button>
    </>
  )
}

export default App
