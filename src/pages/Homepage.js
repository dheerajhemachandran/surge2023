import React from 'react'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import logo from '../assets/logo.PNG'

const Homepage = ({setevent,home,events,contact,sponsors}) => {
  useEffect(()=>{
    Aos.init({duration:1000})
  },[])
  const [ntevent, setntevent] = useState(false)
  const [tevent, settevent] = useState(false)
  const [oevents,setoevents]=useState(false)

  return (
    <div className=' flex flex-col items-center px-5 gap-2 text-yellow-400' ref={home}>
    
    <div className='md:px-20 flex flex-col gap-5 items-center h-screen justify-center' data-aos="fade-up">
      <img className='h-40 w-40 mb-5' src={logo} alt="logo"/>
      <div className='text-red text-2xl text-center'>VELAMMAL ENGINEERING COLLEGE</div>
      <div className='text-slate-100 text-xl text-center'>Department of Electrical and electronics Engineering</div>
      <p className='mt-6 text-center sm:px-5 md:px-20 text-lg'>SURGE 2K23 is conducted by the department of Electrical and Electronics Engineering of Velammal Engineering College. This  fest houses various nerve wrecking and impressive technical and non technical events to test the skill set of the participants. A stage for expressing their talents and to tackle the problems given to them. Bag the exciting cash prices to prove you are a mastermind! Calling all the enthusiasts to this grandfest!
      </p> </div>
      
    <div className='text-2xl text-yellow-400 font-bold text-center pt-20 underline' data-aos="fade-up" ref={events}>Events</div>
    
    <div className='flex flex-col my-10 gap-2 md:gap-20'>
      <div className='flex flex-row gap-20 justify-center w-[100vw] px-20 my-10' data-aos="fade-up">
      <div className='px-10 bg-slate-700 py-2 border-4 border-yellow-500 rounded-lg shadow-lg flex flex-col items-center '>
          <div className='text-xl text-center capitalize text-yellow-300'>technical</div>
         {tevent?
          <div className='flex flex-col text-white text-center mt-4 mb-3 md:hidden gap-2'>
          <Link to="/paperpresentation" className='hover:text-yellow-500 hover:font-bold' >Paper presentation</Link>
          <Link to="/circuitdebug" className='hover:text-yellow-500 hover:font-bold' >Circuit Debug</Link>
          <Link to="/projectexpo" className='hover:text-yellow-500 hover:font-bold' >Project Diplay</Link>
          <Link to="/roboracing" className='hover:text-yellow-500 hover:font-bold' >Robo Racing (Line Follower)</Link>
        </div>:
        <div className='text-center mt-4 mb-3 md:hidden'>des</div>}
        <button onClick={()=>settevent(!tevent)} className='py-1 px-2 bg-yellow-500 rounded-lg text-white md:hidden'>view</button>
        <div className='text-center mt-4 mb-3 hidden md:block'>des</div>
      </div>
      <div className='flex-col text-white text-left border-l-2 border-yellow-600 pl-4  mt-4 mb-3 hidden md:flex gap-2'>
          <Link to="/paperpresentation" className='hover:text-yellow-500 hover:font-bold text-lg' >Paper presentation</Link>
          <Link to="/projectexpo" className='hover:text-yellow-500 hover:font-bold text-lg' >Project Expo</Link>
          <Link to="/circuitdebug" className='hover:text-yellow-500 hover:font-bold text-lg' >Circuit Debug</Link>
          <Link to="/roboracing" className='hover:text-yellow-500 hover:font-bold text-lg' >Robo Racing (Line Follower)</Link>
        </div>
      </div>
          <hr className='border-4 border-yellow-600 mb-10 md:hidden rounded-xl mx-36' data-aos="fade-in"/>

      <div className='flex flex-row gap-20 justify-center my-10' data-aos="fade-up">
      <div className='hidden md:flex flex-col text-white text-right border-r-2 border-yellow-600 pr-4  mt-4 mb-3 gap-2'>
          <Link to="/connection" className='hover:text-yellow-500 hover:font-bold text-lg' >Connection</Link>
          <Link to="/melomoniac" className='hover:text-yellow-500 hover:font-bold text-lg' >Melomoniac</Link>
          <Link to="/mythorfact" className='hover:text-yellow-500 hover:font-bold text-lg' >Myth or Fact</Link>
          <Link to="/murderandmystery" className='hover:text-yellow-500 hover:font-bold text-lg' >Murder and Mystery</Link>
        </div>

      <div className='px-10 bg-slate-700 py-2 border-4 border-yellow-500 rounded-lg shadow-lg flex flex-col items-center'>
          <div className='text-xl text-center capitalize text-yellow-300'>Non technical</div>
         {ntevent?
          <div className='flex flex-col text-white text-center mt-4 mb-3 md:hidden gap-2'>
          <Link to="/connection" className='hover:text-yellow-500 hover:font-bold text-lg' >Connection</Link>
          <Link to="/melomoniac" className='hover:text-yellow-500 hover:font-bold text-lg' >Melomoniac</Link>
          <Link to="/mythorfact" className='hover:text-yellow-500 hover:font-bold text-lg' >Myth or Fact</Link>
          <Link to="/murderandmystery" className='hover:text-yellow-500 hover:font-bold text-lg' >Murder and Mystery</Link>
        </div>:
        <div className='text-center mt-4 mb-3 md:hidden'>des</div>}
        <button onClick={()=>setntevent(!ntevent)} className='py-1 px-2 bg-yellow-500 text-white rounded-lg md:hidden'>view</button>
        <div className='text-center mt-4 mb-3 hidden md:block'>des</div>
      </div>
      
      </div>
          <hr className='border-4 border-yellow-600 mb-10 md:hidden rounded-xl mx-36' data-aos="fade-in"/>

          <div className='flex flex-row gap-20 justify-center my-10' data-aos="fade-up">
      <div className='px-10 bg-slate-700 py-2 border-4 border-yellow-500 rounded-lg shadow-lg flex flex-col items-center'>
          <div className='text-xl text-center capitalize text-yellow-300'>Online events</div>
         {oevents?
          <div className='flex flex-col text-white text-center mt-4 mb-3 md:hidden gap-2'>
          <Link to="/gamingbgmi" className='hover:text-yellow-500 hover:font-bold text-lg' >Gaming</Link>
          <Link to="/photography" className='hover:text-yellow-500 hover:font-bold text-lg' >Photography</Link>
        </div>:
        <div className='text-center mt-4 mb-3 md:hidden'>des</div>}
        <button onClick={()=>setoevents(!oevents)} className='py-1 px-2 bg-yellow-500 rounded-lg text-white md:hidden'>view</button>
        <div className='text-center mt-4 mb-3 hidden md:block'>des</div>
      </div>
      <div className='flex-col text-white text-left border-l-2 border-yellow-600 pl-4  mt-4 mb-3 hidden md:flex gap-2'>
          <Link to="/gamin" className='hover:text-yellow-500 hover:font-bold text-lg' >Gaming</Link>
          <Link to="/photography" className='hover:text-yellow-500 hover:font-bold text-lg' >Photography</Link>
        </div>
      </div>
        
    </div>

    <div className="flex flex-col lg:flex-row py-40" ref={sponsors} data-aos="fade-up">
  <h1 className="text-2xl lg:text-4xl  font-bold text-center lg:self-start my-auto lg:transform lg:-rotate-90 text-yellow-600 lg:mr-20" id="sponsors">Sponsers</h1>
  <div className="p-6 md:ml-10 grid grid-cols-2 gap-20 md:self-center">
  <img className='h-40 w-40' src={logo}/>
  <img className='h-40 w-40' src={logo}/>
  <img className='h-40 w-40' src={logo}/>

  <img className='h-40 w-40' src={logo}/>


  </div>
</div>



<div data-aos="fade-up">
    <div className='text-center underline text-2xl capitalize font-bold text-yellow-600 pt-20' ref={contact}>Contacts</div>
    <div className='flex flex-col gap-10  my-10 items-center md:flex-row'>
      <img className='h-40 w-40' src={logo}/>
      <img className='h-40 w-40' src={logo}/>
      <div>
        <div>
          converor & HOD
        </div>
        <div>
          Dr.R.UMA MAHESHWARI
        </div>
        <a>phno</a>
      </div>
    </div>
    <div className='flex flex-col md:flex-row gap-10'>
      <div>
        <div className='text-yellow-400 font-bold text-xl'>Staff Coordinator</div>
        <div className=''>phno</div>
      </div>
      <div>
        <div className='text-yellow-400 font-bold text-xl'>Student Coordinator</div>
        <div className=''>phno</div>
      </div>
    </div>
    <div className='flex flex-row gap-10 w-100 justify-between rounded-lg mt-20 px-5 py-3 mb-10'>
    <a href='vv' target="__blank"><img className='h-16 w-16 bg-yellow-500 p-1 hover:bg-yellow-600 rounded-lg md:h-20 md:w-20' src='https://cdn-icons-png.flaticon.com/512/717/717392.png ' alt="logo"/></a>
    <a href='vv' target="__blank"><img className='h-16 w-16 bg-yellow-500 p-1 hover:bg-yellow-600 rounded-lg md:h-20 md:w-20' src='https://cdn-icons-png.flaticon.com/512/1384/1384028.png' alt="logo"/></a>
    <a href='vv' target="__blank"><img className='h-16 w-16 bg-yellow-500 p-1 hover:bg-yellow-600 rounded-lg md:h-20 md:w-20' src='https://cdn-icons-png.flaticon.com/512/646/646094.png' alt="logo"/></a>
    </div>
    </div>
    </div>
  )
}

export default Homepage