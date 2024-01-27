import React from 'react'
import ogaImg from '../assets/hero-face.svg'
import { Link } from 'react-router-dom'

function Hero({setLoginModalOpen}) {
  return (
    <div className='container px-6 mx-auto flex flex-col items-center md:px-10 mt-4 md:mt-10 md:flex-row lg:justify-between lg:text-start'>
        <div className="pt-10 md:w-2/3 flex-col gap-4">
            <div className="text-3xl md:pb-4 md:text-4xl lg:text-5xl font-rale font-bold text-gray-800 tracking-tight leading-snug lg:leading-[1.1]">
               <span className='text-secondary'>Rantly is a</span>
              <br />
              A Cool way to get Anonymous Messages.</div>
            
            <div className='font-pop lg:w-2/3 mt-4 md:mt-6 text-lg md:text-xl text-gray-700'><span className="font-bold">The workflow is simple, Create an account,</span> share link with friends and start getting anonymous rants. </div>
            <div className='flex items-center mt-10 gap-2 md:gap-3 lg:justify-start'>
             
             <button className="bg-primary text-white text-lg font-pop py-3 px-5 md:py-3 md:px-5 rounded-lg" onClick={() => setLoginModalOpen(true)}>Start Ranting</button> 
               
             <a href='https://github.com/devOlaMicheal' target='_blank'> <button className="bg-gray-200 font-pop text-lg  py-3 px-5 md:py-3 md:px-5 rounded-lg">Developer</button> </a>

            </div>
        </div>

        <div className="img md:w-1/3 w-full mt-[-5px] flex justify-center">
            <img className='w-full m' src={ogaImg} alt="" />
        </div>
    </div>
  )
}

export default Hero