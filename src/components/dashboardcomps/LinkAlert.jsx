import React from 'react'
import { MdCopyAll } from 'react-icons/md'

function LinkAlert() {

  const copyToClipBoard = (text) => {
    navigator.clipboard.writeText(text)
    alert(text + " " + "Copied")
  }

  return (
    <div>
    <div className="alert bg-primary bg-opacity-25 border-2 border-primary rounded-lg py-6 px-6 font-pop text-center">Here's your rant link
     <div className="text-center font-medium font-ws bg-[#040406] px-6 py-4 rounded-md text-white mt-2 flex items-center justify-between cursor-pointer">rantly.vercel.app/oladev01 <div onClick={() => copyToClipBoard("rantly.vercel.app/oladev01")}> 
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 font-bols">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
</svg>

     </div> </div>

<div className="flex flex-col gap-4 mt-6 justify-center items-center">

  <button className="bg-primary py-2 px-4 text-white rounded md">Share on whatsapp</button>
  <button className="bg-[#040406] py-2 px-4 text-white rounded md">Share on twitter</button>

</div>
</div>    
    </div>
  )
}

export default LinkAlert