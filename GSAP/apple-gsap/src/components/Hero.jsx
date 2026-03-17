import React from 'react'

const Hero = () => {
  return (
    <section id="hero">
        <div>
            <h1 className=''>MacBook Pro</h1>
            <img src="/title.png" alt="MacBook" />

            <video src="/videos/hero.mp4" autoPlay muted playsInline></video>
        </div>

        <button>Buy</button>
        <p>From ₹169900.00<a href="#">*</a></p>
    </section>
  )
}

export default Hero