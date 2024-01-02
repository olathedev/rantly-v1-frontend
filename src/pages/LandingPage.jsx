import React from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Features from '../components/Features'
function LandingPage() {
  return (
    <div>
        <Nav />

        <Hero />

        <div className="lg:mt-20">
          <Features />
        </div>
    </div>
  )
}

export default LandingPage