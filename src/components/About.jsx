import React from 'react'
import phone from '../assets/phone.jpg'

function About() {
  return (
    <div className="container mx-auto px-2 mt-32">
        <div className="mt-10 bg-primary rounded-xl pt-6 px-4 text-white mb-8">
        <div className="title text-center mb-8">
            <h3 className="font-semibold font-pop text-2xl lg:text-3xl mb-2">Rantly, is new and packed </h3>
            <p className="text-lg font-lg py-4 font-pop">Start ranting, join rantly and haeave full access to recieve anonymous messages, reply as well as book mark them</p>

            <div className="w-full flex justify-center mb-20">
              <button className="py-4 px-20 md:px-32 rounded-full bg-[#040406] text-lg font-pop">Get started</button>
            </div>

            <div className="relative bottom-0 flex w-full justify-center">
              <img src={phone} className='h-96 rounded-t-lg' alt="" srcset="" />
            </div>
        </div>
        </div>
    </div>
  )
}

export default About