import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Eye,EyeOff} from 'lucide-react'
function App() {
  const [password,setPassword]=useState('');
  const [isVisible,setIsVisible]=useState(false);
  const handleChange=(e)=>{
    setPassword(e.target.value);
  }
  const handleClick=()=>{
    setIsVisible(!isVisible);
  }
  return (
    <div>
     <input type={isVisible? 'text':'password'} value={password} onChange={handleChange}></input>
     <button onClick={handleClick}>{!isVisible?<EyeOff size={20}/>:<Eye size={20}/>}</button>
    </div>
  )
}

export default App
