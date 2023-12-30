import React from 'react'
import ogaImg from '../assets/igreet.png'

function Hero() {
  return (
    <div className='container text-center px-3 mx-auto md:px-10 mt-8 md:flex md:justify-between md:text-start '>
        <div className="pt-10 md:w-1/2 md:pt-20 flex-row">
            <div className="text-4xl md:text-5xl font-ws font-semibold text-gray-900">A Cool way <br></br>for your friends to rant on you Anonymously.</div>
            <div className='font-mont md:w-2/3 mt-6 text-xl text-gray-800'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptas assumenda aliquam asperiores sunt hic! </div>
            <div className='flex justify-center gap-4 items-center mt-6 md:justify-start'>
              <button className="bg-primary text-white text-xl font-pop py-3 px-6 rounded-lg">Start Ranting</button>
                <button className="border border-primary text-xl font-pop py-3 px-6 rounded-lg">Learn more</button>


            </div>
        </div>

        <div className="hidden img w-1/2 md:block">
            <img className='w-full mt-[-70px]' src={ogaImg} alt="" />
        </div>
    </div>
  )
}

export default Hero