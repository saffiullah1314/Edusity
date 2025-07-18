import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <>
      <div className="hero container" id='hero'>
        <h1>We Ensure better education for a better world</h1>
        <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education</p>
        <button className='btn arrow'>Explore More<i class="fas fa-arrow-right"></i></button>
      </div>
    </>
  )
}

export default Hero
