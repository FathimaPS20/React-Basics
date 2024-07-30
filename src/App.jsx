import { useState } from 'react'
import reactLogo from'./assets/react.svg'
import viteLogo from'/vite.svg'
import './App.css'
import First from "./components/First"
import Second from "./components/Second"
import Third from "./components/Third"
import { Route,Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import { Table } from '@mui/material'
import BasicTab from './components/BasicTab'


function App() 
{ 
  const [count, setCount]=useState(0)

  return (
    <> 
    
    <Navbar/>
    
  <Routes>
    <Route path="/" element={<First name ="Tiya"/>}/>
    <Route path="/s" element={<Second place="tvm"/>}/>
    <Route path="/t" element={<Third/>}/>
    <Route path="/v" element={<BasicTab/>}/>
  </Routes>
  
  </>
 
    
    
  )
}

export default App
