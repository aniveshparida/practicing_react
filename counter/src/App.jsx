import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
   const [input,setInput] = useState('')
  const handleChange=(e)=>{
    setInput(e.target.value);
    setCount(input.length);
  }
  return (
    <div>
       <input style={{color: count>100 ? 'red' : 'white'}} type="text" value={input} onChange={handleChange}/>
       <h1>{count}</h1>
    </div>
  )
}

export default App
