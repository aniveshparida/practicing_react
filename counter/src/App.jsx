import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
   
 const handleIncrement=()=>{
 setCount(count+1);
 }
 const handleDecrement=()=>{
  setCount(count-1);
 }
 const reset=()=>{
  setCount(0);
 }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>Increament</button>
      <button onClick={handleDecrement} disabled={count===0}>Decreament</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default App
