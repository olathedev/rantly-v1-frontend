import React from 'react'

import cardBg from '../assets/heroDoodle.svg'
import secure from '../assets/secure.svg'
import money from '../assets/money.svg'
import convert from '../assets/convert.svg'
import phone from '../assets/phone.jpg'





function Features() {

  const cardItems = [
    {title: "Easy to use", desc: "Create an acount and get a shrable link", icon: money},
    {title: "Recieve/Share Messages", desc: "Create an acount and get a shrable link", icon: convert},
    {title: "Bookmark Messages", desc: "Create an acount and get a shrable link", icon: secure},

  ]

  return (
    <div className="container mx-auto px-8 mt-10 mb-8">
        <div className="title text-center mb-8">
            <h3 className="font-semibold font-ws text-2xl lg:text-3xl text-center text-gray-900">The best way to recieve anonymous messages </h3>
            <p className="text-grey-700 text-lg py-4 font-pop">Start ranting, join rantly and have full access to recieve anonymous messages, reply as well as book mark them</p>
        </div>

        <div className="grid grid-cols-1 px-4 md:grid-cols-3 gap-6">

          {cardItems.map(cardItem => (
            <div className="features-card rounded-md md:h-48 bg-gray-200 flex flex-col p-4 bg-cover bg-center" style={{backgroundImage: `url(${cardBg})`}}>
                <div className="icon"> <img src={cardItem.icon} alt="" /> </div>
                <div className="text-xl font-semibold font-pop mt-4">{cardItem.title}</div>
                <div className="font-pop text-grey-900 mt-2">Create an acount and get a shrable rantly link and securely share on any platform</div>
            </div>
            ))}
        </div>


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

export default Features