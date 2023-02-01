import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Homepage = ({setevent,home,events,contact,sponsors}) => {
  const [ntevent, setntevent] = useState(false)
  const [tevent, settevent] = useState(false)

  return (
    <div className=' flex flex-col items-center px-5 py-32 gap-2 text-yellow-400' ref={home}>
    
      <div className='text-yellow-400 font-bold text-2xl text-center'>Surge 2023</div>
      <div className='text-red text-lg text-center'>Velammal Engineering College</div>
      <div className='text-slate-100 text-xl text-center'>EEE</div>
      <p className='mt-6 text-center sm:px-5 md:px-20 '>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
     
      
    <div className='text-2xl text-yellow-400 font-bold text-center pt-20 underline' ref={events}>Events</div>
    
    <div className='flex flex-col my-10 gap-2 md:gap-20'>
      <div className='flex flex-row gap-20 justify-center'>
      <div className='px-10 bg-slate-700 py-2 border-4 border-yellow-500 rounded-lg shadow-lg flex flex-col items-center w-[90%]'>
          <div className='text-xl text-center capitalize text-yellow-300'>technical</div>
         {tevent?
          <div className='flex flex-col text-white text-center mt-4 mb-3 md:hidden'>
          <Link to="/events" className='hover:text-yellow-500 hover:font-bold' onClick={()=>setevent(1)}>Paper presentation</Link>
          <Link to="/events" className='hover:text-yellow-500 hover:font-bold' onClick={()=>setevent(2)}>Circuit Debug</Link>
          <Link to="/events" className='hover:text-yellow-500 hover:font-bold' onClick={()=>setevent(3)}>Project Diplay</Link>
          <Link to="/events" className='hover:text-yellow-500 hover:font-bold' onClick={()=>setevent(4)}>Robo Racing (Line Follower)</Link>
        </div>:
        <div className='text-center mt-4 mb-3 md:hidden'>des</div>}
        <button onClick={()=>settevent(!tevent)} className='py-1 px-2 bg-yellow-500 rounded-lg text-white md:hidden'>view</button>
        <div className='text-center mt-4 mb-3 hidden md:block'>des</div>
      </div>
      <div className='flex-col text-white text-left border-l-2 border-yellow-600 pl-4  mt-4 mb-3 hidden md:flex'>
          <Link to="/events" className='hover:text-yellow-500 hover:font-bold' onClick={()=>setevent(1)}>Paper presentation</Link>
          <Link to="/events" className='hover:text-yellow-500 hover:font-bold' onClick={()=>setevent(2)}>Circuit Debug</Link>
          <Link to="/events" className='hover:text-yellow-500 hover:font-bold' onClick={()=>setevent(3)}>Project Diplay</Link>
          <Link to="/events" className='hover:text-yellow-500 hover:font-bold' onClick={()=>setevent(4)}>Robo Racing (Line Follower)</Link>
        </div>
      </div>
          <hr className='border-4 border-yellow-600 mb-10 md:hidden rounded-xl mx-10'/>

      <div className='flex flex-row gap-20 justify-center'>
      <div className='hidden md:flex flex-col text-white text-right border-r-2 border-yellow-600 pr-4  mt-4 mb-3'>
          <Link to="/events" className='hover:text-yellow-500 hover:font-bold' onClick={()=>setevent(5)}>Connection</Link>
          <Link to="/events" className='hover:text-yellow-500 hover:font-bold' onClick={()=>setevent(6)}>Photography (Online)</Link>
          <Link to="/events" className='hover:text-yellow-500 hover:font-bold' onClick={()=>setevent(7)}>Poster Making</Link>
          <Link to="/events" className='hover:text-yellow-500 hover:font-bold' onClick={()=>setevent(8)}>Gaming</Link>
        </div>

      <div className='px-10 bg-slate-700 py-2 border-4 border-yellow-500 rounded-lg shadow-lg flex flex-col items-center w-[90%]'>
          <div className='text-xl text-center capitalize text-yellow-300'>Non technical</div>
         {ntevent?
          <div className='flex flex-col text-white text-center mt-4 mb-3 md:hidden'>
          <Link to="/events" className='hover:text-yellow-500 hover:font-bold' onClick={()=>setevent(5)}>Connection</Link>
          <Link to="/events" className='hover:text-yellow-500 hover:font-bold' onClick={()=>setevent(6)}>Photography (Online)</Link>
          <Link to="/events" className='hover:text-yellow-500 hover:font-bold' onClick={()=>setevent(7)}>Poster Making</Link>
          <Link to="/events" className='hover:text-yellow-500 hover:font-bold' onClick={()=>setevent(8)}>Gaming</Link>
        </div>:
        <div className='text-center mt-4 mb-3 md:hidden'>des</div>}
        <button onClick={()=>setntevent(!ntevent)} className='py-1 px-2 bg-yellow-500 text-white rounded-lg md:hidden'>view</button>
        <div className='text-center mt-4 mb-3 hidden md:block'>des</div>
      </div>
      
      </div>
          <hr className='border-4 border-yellow-600 mb-10 md:hidden rounded-xl mx-10'/>
        
        <div className='mt-10 px-4 py-2 border-4 border-yellow-400 bg-slate-700 rounded-lg shadow-lg flex flex-col items-center w-fit self-center'>
          <div className='text-xl text-center capitalize text-yellow-300'>workshop</div>
          <div className='text-center mt-4 mb-3'>des</div>
          <a href="v" className='py-1 px-2 bg-yellow-500 text-white rounded-lg'>Register</a>
        </div>
    </div>

    <div className="flex flex-col lg:flex-row py-40" ref={sponsors}>
  <h1 className="text-2xl lg:text-4xl font-bold text-center md:self-start md:transform md:-rotate-90 text-yellow-600" id="sponsors">Sponsers</h1>
  <div className="p-6 md:ml-10 md:self-center">
    <p className="text-lg">Content block goes here.</p>
  </div>
</div>



    <div className='text-center underline text-2xl capitalize font-bold text-yellow-600 pt-20' ref={contact}>Contacts</div>
    <div className='flex flex-col md:flex-row gap-10'>
      <div>
        <div className='text-center text-yellow-400 font-bold text-xl'>Staff Coordinator</div>
        <div className=''>phno</div>
      </div>
      <div>
        <div className='text-center text-yellow-400 font-bold text-xl'>Student Coordinator</div>
        <div className=''>phno</div>
      </div>
    </div>
    <div className='flex flex-row gap-4 w-100 md:w-1/4 lg:2/5 justify-between rounded-lg mt-20 px-5 py-3'>
    <a href='vv' target="__blank"><img className='h-5 w-5 hover:border-4 rounded-lg md:h-10 md:w-10' src='https://cdn-icons-png.flaticon.com/512/2111/2111463.png' alt="logo"/></a>
    <a href='vv' target="__blank"><img className='h-5 w-5 hover:border-4 rounded-lg md:h-10 md:w-10' src='https://cdn-icons-png.flaticon.com/512/3938/3938026.png' alt="logo"/></a>
    <a href='vv' target="__blank"><img className='h-5 w-5 hover:border-4 rounded-lg md:h-10 md:w-10' src='https://cdn-icons-png.flaticon.com/512/5968/5968534.png' alt="logo"/></a>
    </div>
    </div>
  )
}

export default Homepage