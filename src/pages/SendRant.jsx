import React, { useState } from 'react'
import Nav from '../components/Nav'


function SendRant() {

  const [words, setWords] = useState('')

  return (
    <div>
    <Nav background={'#040406'} />

      <div className="mt-20 container mx-auto flex justify-center items-center px-6 md:text-center">

          <div>
          <h3 className="text-4xl font-ws font-semibold text-primary my-2">Oya, chook oladev some rants. </h3> 
          <p className='text-xl font-semibold mt-4 font-pop md:text-center'>Send confessions, Questions, Experiences, warnings, yarns or anything random, just dont be boring.</p>

          <form className='mt-10'>
            <input type="text" className='border-b border-primary w-full text-lg font-mont pb-2 mb-3' placeholder="Start Ranting.." value={words} onChange={(e) => setWords(e.target.value)} />
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className=" text-xl font-semibold text-primary mt-2">1/125 words</p>
              <button className="py-3 px-4 border-2 border-primary rounded-md text-xl font-ws mt-4 hover:bg-primary hover:text-white">Send Rant</button>
            </div>
          </form>
          </div>
      </div>
    </div>
  )
}

export default SendRant