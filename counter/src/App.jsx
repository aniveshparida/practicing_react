import React from 'react'
import {useState} from 'react'
import ShowModal from './components/ShowModal'
const App = () => {
  const [isOpen,setIsOpen]=useState(false);
  const handleClick=()=>{
    setIsOpen(!isOpen);
  }
  return (
    <div>
       <button onClick={handleClick}>open modal</button>
       {isOpen && <ShowModal handleClick={handleClick}/>}
    </div>
  )
}

export default App