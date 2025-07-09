import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SubwaySurfer from './components/subway-surfer.jsx'
import Tile from './components/Tile.jsx'
function App() {
  
  return(
    
      <div className="top-0 left-0 flex flex-row min-w-screen h-screen justify-between items-center ">
        <SubwaySurfer />
        <Tile/>
        <SubwaySurfer />
      </div>
      
    
  )
}

export default App
