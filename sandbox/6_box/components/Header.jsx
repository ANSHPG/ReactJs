import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <nav className='flex items-center justify center gap-16 py-5 px-10 justify-between bg-gray-800'>
        <h1 id="title" className='text-3xl '>F1<span id="s5" className='text-gray-400'>75</span></h1>
        <input type="text"  placeholder='search' className='bg-emerald-400 text-black font-sans py-2 px-3.5'/>
        <div className='flex items-center gap-8 text-lg text-gray-500' id='nav2'>
          <Link to='/home'>Base</Link>
          <Link to='/teams'>Teams</Link>
          <Link to='/drivers'>Drivers</Link>
          <Link to='/history'>History</Link>
        </div>
      </nav>
    </div>
  )
}

export default Header
