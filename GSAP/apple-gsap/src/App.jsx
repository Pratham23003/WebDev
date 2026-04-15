import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import ProductView from './components/ProductView'
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/all'

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Highlights></Highlights>
      <ProductView></ProductView>
    </>
  )
}

export default App
