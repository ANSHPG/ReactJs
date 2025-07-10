import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import UserContext from './context/UserContext.jsx'


createRoot(document.getElementById('root')).render(
  <UserContext>
<BrowserRouter>

   <App/>

</BrowserRouter>
</UserContext>

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