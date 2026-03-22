import { useState } from 'react'
import './App.css'
import { Sun, Moon } from 'lucide-react' // Changed to Sun/Moon for theme context
import {ChevronDown} from 'lucide-react'
function App() {
  const [isToggle,setToggle]=useState(false);
   const handleToggle=()=>{
    setToggle(!isToggle);
   }
  return (
    <div>
      <h1>what is react?</h1>
      <button onClick={handleToggle}style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            transition: 'transform 0.3s ease',
            // Rotate the arrow 180 degrees when open
            transform: isToggle ? 'rotate(180deg)' : 'rotate(0deg)'
          }}><ChevronDown size={24}/></button>
      {
        isToggle && (
          <div>
             <h1>React is a library...</h1>
          </div>
        )
      }
    </div>
  )
}

export default App