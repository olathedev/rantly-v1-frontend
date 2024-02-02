import React, { useEffect, useRef, useState } from "react";
import { MdAccessTime, MdShare } from "react-icons/md";
import axios from 'axios'
import html2canvas from 'html2canvas'
import { useAuthContext } from "../customhooks/useAuthContext";
import DashboardNav from "../components/dashboardcomps/DashboardNav";
import {formatDistanceToNow} from "date-fns"

function Rants() {

  const [isPending, setIsPending] = useState(false)
  const [messages, setMessages] = useState(null)
  const [error, setError] = useState(null)
  const { user } = useAuthContext()

  useEffect(() => {

    const getData = async () => {
      setIsPending(true)

      try {
        const { data } = await axios.get(`/rantly/messages`, {
          headers: {
            'Authorization': `Bearer ${user.token}`
          }
        })
        console.log(data)
        setIsPending(false)
        setMessages(data.messages)
      } catch (error) {
        console.log(error)
        setError(error.message)
        setIsPending(false)

      }
    }


    if (user) {
      getData()
    }
  }, [])

  const cardRef = useRef(null)

  const handleDownload = () => {
    // Create a temporary container with a background
    const tempContainer = document.createElement('div');
    tempContainer.style.position = 'absolute';
    tempContainer.style.top = '0';
    tempContainer.style.left = '0';
    tempContainer.style.width = '100%';
    tempContainer.style.height = '100%';
    tempContainer.style.display = 'flex';
    tempContainer.style.flexDirection = 'column';
    tempContainer.style.justifyContent = 'center';
    tempContainer.style.alignItems = 'center';

    // Add some margin on the left and right
    tempContainer.style.marginLeft = '10%';
    tempContainer.style.marginRight = '10%';

    // Set gradient background
    tempContainer.style.background = 'linear-gradient(to bottom, #13747D, #231F20)';

    const clonedCard = cardRef.current.cloneNode(true);
    tempContainer.appendChild(clonedCard);

    // Add the text at the bottom
    const text = document.createElement('p');
    text.textContent = 'rantly.vercel.app';
    text.style.marginTop = '20px'; // Adjust as needed
    text.style.color = '#ffffff'; // Set text color
    tempContainer.appendChild(text);

    document.body.appendChild(tempContainer);

    html2canvas(tempContainer).then((canvas) => {
      document.body.removeChild(tempContainer);

      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = 'downloadable-card.png';
      link.click();
    });
  }

  return (
    <>
      <DashboardNav />
      <div className="container mx-auto px-8 md:px-10 my-8 ">

        <div className="header my-10 flex gap-4 cursor-default font-semibold">
          <div className="bg-primary rounded text-black py-3 bg-opacity-30  px-6 cursor-pointer font-pop">All</div>
          <div className="rounded-full py-3 px-4 cursor-pointer font-pop">Bookmarked</div>
        </div>

        {isPending && (
          <div className="flex h-screen justify-center items-center">
            <div className="text-xl font-mont">Fetching messages...</div>
          </div>
        )}

        {error && (
          <div className="flex h-screen justify-center items-center text-white">

            <div className="-mt-60 py-6 px-20 bg-red-500 text-center font-mont text-lg rounded-md">
              <div className="py-4">
                {error}
              </div>
            </div>
          </div>
        )}
 {messages && messages.length <= 0 && (
              <div className="flex justify-center items-center mt-20">
              <div className="text-xl font-mont">You have No messages</div>
            </div>
            )}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
       
          {messages && messages.map(message => (

              

            <div ref={cardRef} className="message-box border-primary bg-primary bg-opacity-25 rounded-lg relative bottom-0" key={message._id}>
              <div className="header px-4 py-3 bg-primary text-white flex justify-between rounded-t-lg">

                <div className="flex flex-col">
                  <h2 className="text-lg font-pop font-semibold">Rant</h2 >
                  <p className="font-pop text-sm">{formatDistanceToNow(new Date(message.createdAt), {addSuffix: true})}</p>
                </div>
              
                <div className="flex gap-2">
                <div className="" onClick={handleDownload}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>

                </div>

                {/* <div className="py-1 px-1 bg-white rounded-full border border-primary text-primary cursor-pointer" onClick={handleDownload}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>


                </div> */}
                </div>

              </div>
              <div className="body px-4 py-8 text-xl font-rale text-[#040406]">
                {message.message}
              </div>
              {/* 
          <div className="footer bg-[#040406] text-white p-4 rounded-b-lg flex items-center justify-between font-pop text-md">
            <p>Sent: 2Hours ago</p>

            <div className=" py-1 px-1 text-xl bg-white rounded-full border-2 border-primary text-primary">
              {" "}
              <MdShare />{" "}
            </div>
          </div> */}
            </div>

          ))}
        </div>
      </div>

    </>
  );
}

export default Rants;
