import React, { useState } from 'react'

const App = () => {
  const [username, setUsername] = useState('')

  const submitHandle = (event) => {
    event.preventDefault()
    console.log(username)
  }

  const inputHandler = (event) => {
    setUsername(event.target.value)
  }
  return (
    <div>
      <form className='text-[40px] flex gap-[10px]  p-[7px]' onSubmit={submitHandle}>

        <div dir="ltr">
          <input
            value={username}
            onChange={inputHandler}
            type="text"
            placeholder='Enter'
            className='bg-white p-[18px] rounded-s-[10px] text-[34px]' />
        </div>

        <div dir="rtl"><button className='bg-pink-500 p-[18px] text-white text-[34px] rounded hover:bg-pink-600 rounded-s-[10px]'>Submit</button></div>

      </form>
    </div>
  )
}

export default App
