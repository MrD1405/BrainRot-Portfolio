import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SubwaySurfer from './components/subway-surfer.jsx'
import Tile from './components/Tile.jsx'
function App() {
  
  return(
    
      <div className="absolute flex flex-row w-full justify-between items-center ">
        <SubwaySurfer />
        <Tile/>
        <SubwaySurfer />
      </div>
      
    
  )
}

export default App
