import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Trending from './components/Trending'
import Reasons from './components/Reasons'
import FAQ from './components/FAQ'
import FooterCTA from './components/FooterCTA'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Trending></Trending> 
      <Reasons></Reasons>
      <FAQ></FAQ>
      <FooterCTA></FooterCTA>
      <Footer></Footer>
    </div>
  )
}

export default App
