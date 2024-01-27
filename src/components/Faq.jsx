import React, { useState } from 'react'
import bossImage from '../assets/igreet.png'

function Faq() {

    const faqs = [
        { title: "Are messages anonymous", desceipription: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium incidunt, laudantium autem consequuntur quis et velit maiores at amet quae!" },
        { title: "Can i share my link on my socials", desceipription: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium incidunt, laudantium autem consequuntur quis et velit maiores at amet quae!" },
        { title: "Can i bookmark messages", desceipription: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium incidunt, laudantium autem consequuntur quis et velit maiores at amet quae!" },
        { title: "Can i bookmark messages", desceipription: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium incidunt, laudantium autem consequuntur quis et velit maiores at amet quae!" }


    ]

    const [activeAccordionIndex, setActiveAccordionIndex] = useState(null)

    const accordionClick = (index) => {
        setActiveAccordionIndex(activeAccordionIndex === index ? null : index)
    }
    const [accordionOpen, setAccordionOpen] = useState(false)
    return (
        <div className="container mx-auto px-8 mt-32">
            <div className="flex flex-col w-full items-center md:flex-row">
                <div className="md:md:w-2/3">
                    <h3 className="text-2xl text-center md:text-3xl font-semibold font-ws md:w-1/2 md:text-start">Here are Some frequently asked questions.</h3>

                    <div className="flex flex-col gap-6 mt-10">
                        {faqs.map((faq, index) => (


                            <div className="border border-gray-400 py-3 px-3 md:w-[80%] rounded" key={index}>
                                <div className="accordion-head flex justify-between items-center ">

                                    <h3 className="text-lg font-pop md:text-xl font-semibold">{faq.title}</h3>
                                    <div className='text-primary font-bold cursor-pointer' onClick={() => accordionClick(index)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`${activeAccordionIndex === index ? 'hidden' : 'visible'} w-6 h-6`}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                        </svg>
          
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`${activeAccordionIndex === index ? 'visible' : 'hidden'} w-6 h-6`}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
</svg>

                                    </div>



                                </div>

                            {activeAccordionIndex === index && (
                                <div className={`accordionbody mt-4 border-t font-pop text-md py-4 transition-all duration-300 ease-in-out`}>
                                    {faq.desceipription}
                                </div>
                            )}
                                
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