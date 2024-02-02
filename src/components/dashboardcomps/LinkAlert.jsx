import React, { useState } from 'react'
import { MdCopyAll } from 'react-icons/md'
import social from '../../assets/social.png'
import social1 from '../../assets/soc.png'
import social2 from '../../assets/social2.png'



function LinkAlert({ user }) {

  const [copied, setCopied] = useState(false)

  const url = `https://rantly.vercel.app/r/${user.username}
`
  const copyToClipBoard = async (text) => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 5000);
  }
  const shareOnFacebook = () => {
    const message = "I've got an anonymous inbox open just for you! 🕵️‍♂️✉️ Click the link and share your thoughts, i wont know who sent it"
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url) + '&quote=' + encodeURIComponent(message), 'Share on Faceb ook', 'width=600,height=400');
  }
  return (
    <div>
      <div className="alert bg-black rounded-lg py-6 px-4 md:px-8 font-rale w-full">

        <div className='flex items-center gap-2 justify-between bg-white rounded'>
          <div className="text-center font-rale font-semibold p-2 rounded cursor-pointer text-black bg-opacity-40">
            {url}
          </div>


          <button onClick={() => copyToClipBoard(url)} className='bg-primary text-white p-2 rounded flex place-self-end' disabled={copied}>
            {!copied ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 font-bols">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
              </svg>

            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>

            )

            }

          </button>
        </div>


        <div className="flex flex-col py-3 w-full">
          <h5 className='text-white my-2'>Share to </h5>
          <div className="py-2 px-3 flex gap-3 justify-center items-center">
           <a href={`I've got an anonymous inbox open just for you! 🕵️‍♂️✉️ Click the link and share your thoughts, i wont know who sent it. ${url}`}><img src={social1} className='h-10' alt="" srcset="" /></a>
           <img src={social} className='h-10' alt="" srcset="" onClick={shareOnFacebook} />
            <img src={social2} className='h-10' alt="" srcset="" />

          </div>
        </div>
      </div>
    </div>
  )
}

export default LinkAlert