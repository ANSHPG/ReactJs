import React, {useState} from 'react'

const App = () => {
  const [num, setNum] = useState(11)
  const increement = () => {
    setNum(num+1)
  }
  const decreement = () => {
    setNum(num-1)
  }

  return (
    <div>
      <div className="container">
        <div className="head">
          <h1 id="title">F1<span id="s5">75</span></h1>
        </div>

        <div className="middle">
          <div className="team middle_c" onClick={increement}>
            <p id="teamNumber" className='number'>{num}</p>
            <p id="teamTag"  className='tag'>Teams</p>
          </div>
          <div className="driver middle_c" onClick={decreement}>
            <p id="driverNumber" className='number'>{num*2}</p>
            <p id="driverTag" className='tag'>Drivers</p>
          </div>
        </div>

        <div className="bottom">
          <h1 id="last">Powered by <span id="company">Asyhft File Servers</span></h1>
        </div>
      </div>
    </div>
  )
}

export default App
