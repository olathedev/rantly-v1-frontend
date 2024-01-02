import React from 'react'
import ogaImg from '../assets/hero-face.svg'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='container px-6 mx-auto flex flex-col text-center items-center md:px-10 mt-4 md:mt-10 lg:flex-row lg:justify-between lg:text-start'>
        <div className="pt-10 lg:w-2/3 lg:pt-10 flex-col gap-4">
            <div className="text-3xl md:text-4xl lg:text-5xl font-pop font-bold text-gray-900">A Cool way to get Anonymous Messages.</div>
            
            <div className='font-pop lg:w-2/3 mt-4 md:mt-6 text-xl text-gray-700'><span className="font-bold">The workflow is imple, Create an account,</span> share link with friends and start getting anonymous rants. </div>
            <div className='flex items-center justify-center mt-10 lg:justify-start'>
             
             <Link to='dashboard/user'> <button className="bg-primary text-white text-lg font-pop py-3 px-16 md:py-3 md:px-20 rounded-lg md:text-xl">Start Ranting</button> </Link>
               


            </div>
        </div>

        <div className="img md:w-1/3 w-full mt-[-5px] flex justify-center">
            <img className='w-full m' src={ogaImg} alt="" />
        </div>
    </div>
  )
}

export default Hero