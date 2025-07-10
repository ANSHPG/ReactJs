import React from 'react'

const Header = () => {
  return (
    <div>
      <nav className='flex items-center justify center gap-16 py-5 px-10 justify-between bg-gray-800'>
        <h1 id="title" className='text-3xl '>F1<span id="s5" className='text-gray-400'>75</span></h1>
        <div className='flex items-center gap-8 text-lg text-gray-500' id='nav2'>
          <h4>Teams</h4>
          <h4>Drivers</h4>
          <h4>About</h4>
          <h4>Careers</h4>
        </div>
      </nav>
    </div>
  )
}

export default Header
