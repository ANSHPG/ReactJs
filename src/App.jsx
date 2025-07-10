import React from 'react'
import Teams from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Drivers from './pages/Drivers'
import History from './pages/History'
import Home from './pages/Home'

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/teams' element={<Layout/>}/>
        <Route path='/drivers' element={<Drivers/>}/>
        <Route path='/history' element={<History/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
