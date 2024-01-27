import React from 'react'

function Faq() {

    const faqs = [
            {title: "Are messages anonymous", desceipription: "lorem"},
            {title: "Can i share my link on my socials", desceipription: "lorem"},
            {title: "Can i bookmark messages", desceipription: "lorem"}

        ]
  return (
    <div className="container mx-auto px-4 mt-32">
        <div className="flex items-center">
            <div className="md:w-2/3">
                <h3 className="text-3xl font-ws w-1/2">Here are Some frequently asked questions.</h3>

                <div className="flex flex-col gap-6 mt-10">
                     {faqs.map(faq => (

                     
                        <div className="border border-black py-3 w-[60%] rounded">
                            <div className="accordion-head flex justify-between items-center px-6">

                            <h3 className="text-xl font-semibold">{faq.title}</h3>
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
            <div></div>
        </div>
    </div>
  )
}

export default Faq