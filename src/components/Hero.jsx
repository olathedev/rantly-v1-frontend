import React from 'react'
import ogaImg from '../assets/igreet.png'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='container px-6 mx-auto flex flex-col-reverse text-center md:px-10 mt-4 md:mt-10 md:flex-row md:justify-between md:text-start '>
        <div className="pt-10 md:w-1/2 md:pt-20 flex-col gap-4">
            <div className="text-4xl md:text-6xl font-ws font-semibold text-gray-900">A Cool way to get <span className="font-bold text-primary">Anonymous Messages.</span></div>
            <div className='font-mont md:w-2/3 mt-8 text-lg text-gray-800 font-medium'> Rantly is Sleek and <span className="font-bold">Super Easy to use</span>. Create an account, share link with friends and start getting anonymous rants on the go </div>
            <div className='flex gap-4 items-center justify-center mt-6 md:justify-start'>
             
             <Link to='dashboard/user'> <button className="bg-primary text-white text-lg font-pop py-3 px-3 md:py-3 md:px-6 rounded-lg md:text-xl">Start Ranting</button> </Link>
                <button className="border border-primary text-lg font-pop py-3 px-3 md:py-3 md:px-6 rounded-lg ml-2 md:text-xl">Learn more</button>


            </div>
        </div>

        <div className="img md:w-1/2 w-full mt-[-20px] flex justify-center">
            <img className='w-full mt-[-35px] md:mt-[-85px]' src={ogaImg} alt="" />
        </div>
    </div>
  )
}

export default Hero