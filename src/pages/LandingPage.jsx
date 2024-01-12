import React from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Features from '../components/Features'
import About from '../components/About'
import Faq from '../components/Faq'

function LandingPage() {
  return (
    <div>
        <Nav />

        <Hero />

        <div className="lg:mt-20">
          <Features />
          <About />
          <Faq />
        </div>
    </div>
  )
}

export default LandingPage