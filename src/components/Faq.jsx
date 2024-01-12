import React from 'react'

function Faq() {

    const faqs = [
            {title: "Does rantly allow for sharing to x", desceipription: "lorem"},
            {title: "Does rantly allow for sharing to x", desceipription: "lorem"},
            {title: "Does rantly allow for sharing to x", desceipription: "lorem"}

        ]
  return (
    <div className="container mx-auto px-4 mt-32">
        <div className="flex items-center">
            <div className="md:w-2/3">
                <h3 className="text-3xl font-ws w-1/2">Here are Some frequently asked questions.</h3>

                <div className="flex flex-col mt-10">
                    <div className="flex items-center justify-between">
                        <h4>Who is the creator of rantly</h4>

                        <div>  </div>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default Faq