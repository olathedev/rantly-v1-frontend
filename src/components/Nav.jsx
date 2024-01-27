import { useState } from "react";
import { Link } from "react-router-dom";



function Nav({setLoginModalOpen}) {

  const [scrollClasses, setScrollClasses] = useState(false)
  const [navOpen, setNavOpen] = useState(false)

  const changeNavColor = () => {
    if (window.scrollY >= 80) {
      setScrollClasses(true)
    } else {
      setScrollClasses(false)
    }
  }
  window.addEventListener('scroll', changeNavColor)

  return (
    <div className={`navbar sticky top-0 py-3 z-10 bg-white md:py-4 ${scrollClasses ? 'shadow-md' : 'shadow-none'}`}>
      <div className="hidden container mx-auto md:flex justify-between items-center md:px-10">
        <Link
          to="/"
          className="navbar-brand text-3xl font-ws font-semibold"
        >
          Rantly
        </Link>

        <div className="nav-links flex gap-5 text-lg font-pop items-center font-semibold cursor-pointer">
          <div className="nav-link">About</div>
          <div className="nav-link">FAQ</div>
          <div className="nav-link">Developer</div>
        </div>

        <div className="button flex gap-6">
         
            {" "}
            <button className="bg-primary text-white text-lg font-ws py-3 px-6 rounded-md cursor-pointer" onClick={() => setLoginModalOpen(true)}>
              Signup
            </button>
   
            <button className="border border-primary text-primary text-lg font-pop font-semibold py-3 px-6 rounded-md cursor-pointer" onClick={() => setLoginModalOpen(true)}>
              Signin
            </button>
      
        </div>
      </div>

      {/* mobile */}

    <div className="md:hidden container mx-auto px-6 py-2">
      <div className=" flex justify-between items-center">
        <div className="navbar-brand text-2xl font-ws font-semibold">
          Rantly
        </div>

        <button className="font-bold cursor-pointer" onClick={() => setNavOpen(!navOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-8 h-8 ${navOpen ? 'hidden' : 'block'}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />

        
     
        


          </svg>

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-8 h-8 ${navOpen ? 'block' : 'hidden'}`}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>

        </button>
      </div>

      <div className={`${navOpen ? 'block' : 'hidden'} pt-6 px-2 text-center`} onClick={() => setNavOpen(!navOpen)}>
          <ul className="flex flex-col gap-3 text-lg font-pop font-semibold">
            <li>About</li>
            <li>Faq</li>
            <li>Developer</li>

            <div className="button flex flex-col pt-2 gap-2 w-full">

            <Link to="dashboard/user">

<button className="border border-primary text-primary text-lg font-pop font-semibold py-3 px-6 rounded-md cursor-pointer w-full">
  Signin
</button>
</Link>
          <Link to={"dashboard/user"}>
            {" "}
            <button className="bg-primary text-white text-lg font-ws py-3 px-6 rounded-md cursor-pointer w-full">
              Signup
            </button>
          </Link>
        
        </div>
          </ul>
      </div>
      </div>
    </div>
  );
}

export default Nav;
