import React from 'react'
import bossImage from '../assets/igreet.png'

function Faq() {

    const faqs = [
            {title: "Are messages anonymous", desceipription: "lorem"},
            {title: "Can i share my link on my socials", desceipription: "lorem"},
            {title: "Can i bookmark messages", desceipription: "lorem"},
            {title: "Can i bookmark messages", desceipription: "lorem"}


        ]
  return (
    <div className="container mx-auto px-8 mt-32">
        <div className="flex flex-col w-full items-center md:flex-row">
            <div className="md:md:w-2/3">
                <h3 className="text-xl text-center md:text-3xl font-semibold font-ws md:w-1/2 md:text-start">Here are Some frequently asked questions.</h3>

                <div className="flex flex-col gap-6 mt-10">
                     {faqs.map(faq => (

                     
                        <div className="border border-black py-3 md:w-[80%] rounded">
                            <div className="accordion-head flex justify-between items-center px-6">

                            <h3 className="text-lg font-mont md:text-xl font-semibold">{faq.title}</h3>
                            <div> 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>

                        </div>
                            
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            <div className='md:w-1/3'>
                <img src={bossImage} alt="" className="" />
            </div>
        </div>
    </div>
  )
}

export default Faq