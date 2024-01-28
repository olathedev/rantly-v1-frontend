import React from 'react'
import phone from '../assets/phone.jpg'

function About() {
  return (
    <div className="container mx-auto px-8 mt-32">
        <div className="h-96 flex justify-center items-center mt-10 bg-primary bg-opacity-80 rounded-xl pt-6 px-4 text-white mb-8">
        <div className="title text-center mb-8">
            <h3 className="font-semibold font-pop text-2xl lg:text-3xl mb-2">Rantly, is new and packed </h3>
            <p className="text-lg font-lg py-4 font-pop">Use Rantly to get anonymous messages</p>

   
              <button className="py-4 px-20 md:px-32 rounded-lg bg-slate-950 text-lg font-rale">Get started</button>
           

        </div>
        </div>
    </div>
  )
}

export default About