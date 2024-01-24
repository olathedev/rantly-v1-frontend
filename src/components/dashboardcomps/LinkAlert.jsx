import React from 'react'
import { MdCopyAll } from 'react-icons/md'

function LinkAlert() {

  const copyToClipBoard = (text) => {
    navigator.clipboard.writeText(text)
    alert(text + " " + "Copied")
  }

  return (
    <div>
    <div className="alert bg-primary bg-opacity-25 border-2 border-primary rounded-lg py-3 px-6 font-pop text-center">Here's your rant link
     <div className="text-center font-medium font-ws bg-[#040406] p-3 rounded-md text-white mt-2 flex items-center justify-between cursor-pointer">rantly.vercel.app/oladev01 <div onClick={() => copyToClipBoard("rantly.vercel.app/oladev01")}> <MdCopyAll /> </div> </div>

<div className="flex flex-col gap-4 mt-6 justify-center items-center">

  <button className="bg-primary py-2 px-4 text-white rounded md">Share on whatsapp</button>
  <button className="bg-[#040406] py-2 px-4 text-white rounded md">Share on twitter</button>

</div>
</div>    
    </div>
  )
}

export default LinkAlert