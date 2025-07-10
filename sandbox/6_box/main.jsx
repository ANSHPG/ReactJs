import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
<BrowserRouter>
  <App/>
</BrowserRouter>

)

// JSX - JavaSCript XML hs + HTML combnation
// npm create vite 
// npm i
// npm run dev
//  rafce

//  hooks - special type of functions 
/* 
  that changes the state 
*/ 

// Props Drilling
// npm i axios
// react toastify
// npm i react-router-dom