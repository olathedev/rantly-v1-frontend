import React, { useState } from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Features from '../components/Features'
import About from '../components/About'
import Faq from '../components/Faq'
import LoginModal from '../components/LoginModal'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

function LandingPage() {

  const [loginModalOpen, setLoginModalOpen] = useState(false) 
  return (
    <div>

     {loginModalOpen && (

      <LoginModal loginModalOpen={loginModalOpen} setLoginModalOpen={setLoginModalOpen} onClose={() => setLoginModalOpen(false)} />

     )}
    
        <Nav  setLoginModalOpen={setLoginModalOpen} />

        <Hero setLoginModalOpen={setLoginModalOpen} />

        <div className="lg:mt-20">
          <Features />
          <About />
          <Faq />
          <Testimonials />

          <div className="w-full border-b border-gray-300 mt-8"></div>

          <Footer />
        </div>
    </div>
  )
}

export default LandingPage