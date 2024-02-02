import React, { useState, useEffect, useRef } from "react";
import Nav from "../components/Nav";
import axios from "axios";
import { useParams } from "react-router-dom";
import ErrorAlert from "../components/ErrorAlert";
import loader from '../assets/loaders/loader2.svg'
import loader2 from '../assets/loaders/loader1.svg'


function SendRant() {

  const [words, setWords] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [formError, setFormError] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const [success, setSuccess] = useState(null)
  const { username } = useParams();

  const handleWordCount = (e) => {
      const value = e.target.value

      if(value.length <= 100) {
        setWords(value)
      }
  }

  useEffect(() => {
    setIsPending(true);

    const getUser = async () => {
      try {
        const { data } = await axios.get(`rantly/user/${username}`);
        console.log(data.user);
        setIsPending(false);
        setUser(data.user);
      } catch (error) {
        console.log(error);
        setError("Eje,  be like say dem send you invalid rantly link, or something else went wrong. Sha just try again")
        setIsPending(false);
        setModalOpen(true)
      }
    };

    getUser();
  }, []);

  const sendMessage = async (e) => {
    setSuccess(null)
    e.preventDefault();
    setFormError(null);

    if (words.length === 0) {
      setFormError("Rant a word or two blud");
      return;
    }


    setIsPending(true)
    try {

      const result = await axios.post(`rantly/message/${username}`, {
        message: words,
      });

      setWords("");
      setIsPending(false)
      setSuccess("Yayyy!!, your Rant has been sent")
      setModalOpen(true)
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Nav background={"#040406"} />
      {isPending && <div className="min-h-screen flex justify-center items-center"> <img src={loader2} alt="" /> </div>}

      <div className="mt-20 container mx-auto flex justify-center items-center px-6">
        {user && (
          <div>
            <h3 className="text-3xl font-rale font-semibold text-primary my-2  md:text-center">
              You're about to rant at {username}.{" "}
            </h3>
            <p className="text-lg mt-4 font-rale md:text-center">
              your rant can be in form of confessions, Questions, Experiences,
              warnings, yarns or anything random, just dont be boring.
            </p>

            <form className="mt-20" onSubmit={sendMessage}>
              <div className="mb-2">
                <textarea
                  type="text"
                  className={`border-b ${
                    !formError ? "border-primary" : "border-red-600"
                  } focus:outline-none w-full text-lg font-mont`}
                  placeholder="Start Ranting.."
                  value={words}
                  onChange={handleWordCount}
                 
                >
                  {" "}
                  Start Ranting..{" "}
                </textarea>
                <p className="text-red-600 text-md font-semibold font-mont">
                  {formError}
                </p>
              </div>
              <div className="flex flex-col md:flex-row justify-between md:items-center">
                <p className=" text-xl font-semibold text-primary mt-2">
                  /100
                </p>
                <button className="py-3 px-10  rounded-md text-xl font-pop mt-4 bg-primary text-white" disabled={isPending}>
                  {!isPending && 'Send Rant'}
                  {isPending && (
                    <img src={loader} className="h-10 mx-4" alt="" />
                  )}
                </button>
              </div>
            </form>
          </div>
        )}

        {modalOpen && (

            <div
              className={`w-screen flex justify-center items-center bg-black background bg-opacity-25 backdrop-blur-sm z-20 ${
                modalOpen ? "fixed" : "hidden"
              } inset-0`}
            >

              <ErrorAlert error={error} err="shesh, Something went wrong" ok="Success" success={success} />


            </div>
          
        )}
      </div>
    </div>
  );
}

export default SendRant;
