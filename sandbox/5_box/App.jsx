import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {
  const [data, setData] = useState([])
  async function getData() {
    console.log('data Fetching...');
    
    const response = await axios.get('https://picsum.photos/v2/list?page=1&limit=30  ')
    console.log(response);

    setData(response.data)
  }

  useEffect(() => {
    getData()

  }, [ ])
  

  return (
    <div className='p-10'>
      <button onClick={getData} className='bg-emerald-700 text-white text-5xl p-6 rounded-lg font-semibold active:scale-90'>Search</button>

      <div className='bg-emerald-600 text-white p-5 flex flex-col gap-5.5'>
        {
          data.map((value, key) => {
            console.log(value);
            return <div key={key} className='bg-neutral-600 flex items-center justify-between p-5'>
              <img className='py-[15px] h-60' src={value.download_url} alt="" />
              <h1 className='font-semibold text-2xl text-blue-400'>{value.author}</h1>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default App
