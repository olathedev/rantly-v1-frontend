import React from 'react'

function Rants() {
  return (
    <div className='container mx-auto px-8 md:px-10 mt-8'>
        <div className="grid grid-cols-1 md:grid-cols-4">
            <div className='message-box border border-primary rounded-lg'>
                <div className="header px-4 py-6 bg-[#040406] text-white flex rounded-t-lg">
                    <h2 className="text-lg font-pop font-semibold">Rant</h2>

                    <div className="flex items-center gap-3">
                        <div>2 hours ago</div>
                    </div>
                </div>
                <div className="body px-4 py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, quod? Lorem ipsum dolor sit amet.</div>
            </div>
        </div>
    </div>
  )
}

export default Rants