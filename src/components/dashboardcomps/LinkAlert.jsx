import React from 'react'

function LinkAlert() {
  return (
    <div>
    <div className="alert bg-primary bg-opacity-25 border-2 border-primary rounded-lg py-3 px-6 font-pop">Here's your rant link <span className="font-medium font-ws bg-[#040406] p-2 rounded-md text-white">rantly.vercel.app/oladev01 </span>

<div className="flex flex-col gap-4 mt-6 justify-center items-center">

  <button className="bg-primary py-2 px-4 text-white rounded md">Share on whatsapp</button>
  <button className="bg-[#040406] py-2 px-4 text-white rounded md">Share on twitter</button>

</div>
</div>    
    </div>
  )
}

export default LinkAlert