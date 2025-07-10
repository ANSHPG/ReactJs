import React, { createContext } from 'react'
export const DataContext = createContext()

const UserContext = ({children}) => {

    const username = 'Murphy'
    console.log({children});
    

  return (
    <div>
        <DataContext.Provider value={username}>
            {children}
        </DataContext.Provider>
    </div>
  )
}

export default UserContext
