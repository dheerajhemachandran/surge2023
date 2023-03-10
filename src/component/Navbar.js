import React, { useState } from 'react';
import {useLocation} from 'react-router-dom'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';

const Navbar = ({home,events,sponsors,contact,rules,prize,phno}) => {
  const [isOpen, setIsOpen] = useState(false);
  const loc=useLocation()
  const path=loc.pathname;

 

  console.log(path)
  
  const menu1handler=()=>{
    
    home.current.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
    
  }

  const menu2handler=()=>{
    if(path==="/")
    {
    events.current.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
    }
    else
    {
      rules.current.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
    setIsOpen(false)

  }

  const menu3handler=()=>{
    if(path==="/")
    {
    sponsors.current.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
    }
    else
    {
      prize.current.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
    setIsOpen(false)

  }

  const menu4handler=()=>{
    if(path==="/")
    {
    contact.current.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
    }
    else
    {
      phno.current.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
    setIsOpen(false)

  }



  return (
    <nav className="fixed top-0 left-0 z-50 flex flex-wrap items-center justify-between p-6 md:p-0 md:w-[100vw]">
      
      <div className='md:hidden'>
        <button
          className="text-yellow-500 border border-yellow-500 rounded p-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg
              className="fill-current h-8 w-8 p-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          ) : (
            <svg
              className="fill-current h-8 w-8 p-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          )}
        </button>
        {isOpen?
          <div className="mx-5 py-1 absolute left-0 shadow-md w-48 rounded flex flex-col gap-4">
            
           
            {path==="/"?
            (<div
            data-aos="fade-down"
              className="block cursor-pointer p-2 text-white hover:bg-yellow-700 bg-yellow-500 rounded border-4 border-black transition ease-in-out duration-300"
              onClick={() => menu1handler()}
            >
              Home
            </div>):
            (<Link to="/"
            className="block cursor-pointer p-2 text-white hover:bg-yellow-700 bg-yellow-500 rounded border-4 border-black transition ease-in-out duration-300"
            >
              Home2
            </Link>)}

            

           
            <div

data-aos="fade-down"className="block cursor-pointer p-2 text-white hover:bg-yellow-700 bg-yellow-500 rounded border-4 border-black transition ease-in-out duration-300"
              onClick={() => menu2handler()}
            >
              {path==="/"?"Events":"Rules"}
            </div>
            

           
            <div
            data-aos="fade-down"
              className="block cursor-pointer p-2 text-white hover:bg-yellow-700 bg-yellow-500 rounded border-4 border-black transition ease-in-out duration-300"
              onClick={() => menu3handler()}
            >
              {path==="/"?"Sponsors":"Register"}
            </div>
            

           
            <div

data-aos="fade-down"className="block cursor-pointer p-2 text-white hover:bg-yellow-700 bg-yellow-500 rounded border-4 border-black transition ease-in-out duration-300"
              onClick={() => menu4handler()}
            >
              Contacts
            </div>
            

          </div>:<></>}
     
      </div>

      <div className='hidden md:flex text-black font-bold bg-yellow-400 p-2 w-screen'>

            {path==="/"?
            (<div
              className="cursor-pointer p-2"
              onClick={() => menu1handler()}
            >
              Home
            </div>):
            (<Link to="/"
            className="cursor-pointer p-2"
            >
              Home
            </Link>)}
            <div
              className=" cursor-pointer p-2"
              onClick={() => menu2handler()}
            >
              {path==="/"?"Events":"Rules"}
            </div>
            <div
              className=" cursor-pointer p-2"
              onClick={() => menu3handler()}
            >
              {path==="/"?"Sponsors":"Prize"}
            </div>
            <div
              className=" cursor-pointer p-2"
              onClick={() => menu4handler()}
            >
              Contacts
            </div>
          </div>
    </nav>
  );
};

export default Navbar;
