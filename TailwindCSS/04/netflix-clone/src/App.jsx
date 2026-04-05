import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Trending from './components/Trending'
import Reasons from './components/Reasons'

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Trending></Trending> 
      <Reasons></Reasons>
    </div>
  )
}

export default App
