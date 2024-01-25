import React, { useEffect, useState } from "react";
import { MdAccessTime, MdShare } from "react-icons/md";
import axios from 'axios'

function Rants() {

  const [isPending, setIsPending] = useState(false)
  const [messages, setMessages] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {

    
    const getUser = async () => {
      setIsPending(true)

      try{
        const {data} = await axios.get(`/messages/oladev01`)
        console.log(data)
        setIsPending(false)
        setMessages(data.messages)
      }catch(error){
        console.log(error)
        setError(error.message)
        setIsPending(false)
        
      }
    }

  getUser()
  }, [])


  return (
    <div className="container mx-auto px-8 md:px-10 mt-8">

      {isPending && (
        <div className="flex h-screen justify-center items-center">
          <div className="text-xl font-mont">Fetching messages...</div>
</div>
      )}

      {error && (
        <div className="flex h-screen justify-center items-center text-white">

          <div className="py-6 px-20 bg-red-800 bg-opacity-70 text-center font-mont text-lg rounded-md">
            <div className="border-b py-2 ">
                Something went wrong
            </div>
          {error}
          </div>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

        {messages && messages.map(message => (

        
        <div className="message-box border-primary bg-primary bg-opacity-25 rounded-lg">
          <div className="header px-4 py-6 bg-[#040406] text-white flex justify-between rounded-t-lg">
            <h2 className="text-lg font-pop font-semibold">Rant</h2>

            <div className="ml-4 py-1 px-1 bg-white rounded-full border border-primary text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </div>
          </div>
          <div className="body px-4 py-8 text-xl font-pop text-[#040406]">
            {message.message}
          </div>

          <div className="footer bg-[#040406] text-white p-4 rounded-b-lg flex items-center justify-between font-pop text-md">
            <p>Sent: 2Hours ago</p>

            <div className=" py-1 px-1 text-xl bg-white rounded-full border-2 border-primary text-primary">
              {" "}
              <MdShare />{" "}
            </div>
          </div>
        </div>

        ))}
      </div>
    </div>
  );
}

export default Rants;
