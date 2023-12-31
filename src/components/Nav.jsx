import {useState} from "react";
import { Link } from "react-router-dom";



function Nav() {

  const [colorChange, setColorChange] = useState(false)

  const changeNavColor = () => {
    if(window.scrollY >= 80) {
      setColorChange(true)
    }else{
      setColorChange(false)
  }
  }
  window.addEventListener('scroll', changeNavColor)

  return (
    <div className={`navbar sticky top-0 py-4 ${colorChange ? "bg-[#040406] text-white" : 'bg-none'}`}>
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
          <Link to={"dashboard/user"}>
            {" "}
            <button className="border-2 border-primary bg-primary text-white text-lg font-ws py-2 px-4 rounded-md cursor-pointer">
              Signup 
            </button>
          </Link>
          <Link to="dashboard/user">
          
            <button className="border-2 border-primary text-primary text-lg font-pop font-semibold py-2 px-4 rounded-md cursor-pointer">
              Signin 
            </button>
          </Link>
        </div>
      </div>

      {/* mobile */}

      <div className="container my-6 mx-auto px-6 flex justify-between items-center md:hidden">
        <div className="navbar-brand text-3xl font-ws font-semibold text-gray-900">
          Rantly
        </div>

        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Nav;
