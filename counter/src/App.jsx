import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Eye,EyeOff} from 'lucide-react'
function App() {
  const [inputValue,setInputValue]=useState('');
  const[list,setList]=useState([]);
  const [count,setCount]=useState(0);
  const handleChange=(e)=>{
    setInputValue(e.target.value);
  }
  const handleClick=()=>{
    const isDuplicate=list.some((item)=>item.value.toLowerCase()===inputValue.trim().toLowerCase())
    if(!isDuplicate && inputValue.trim()!==''){
    setList([...list,{id:count,value:inputValue}]);
    setCount(count+1);
    setInputValue('');
    }
  }
  const handleDelete=(id)=>{
    setList(list.filter((item)=>item.id!==id));
  }
  return (
    <div>
     <input type="text" value={inputValue} onChange={handleChange}/>
     <button onClick={handleClick}>Add</button>
     <ul>
      {list.map((item)=>(
        <li key={item.id}>{item.value}
        <button onClick={()=>handleDelete(item.id)}>Delete</button>
        </li>
      )
      )}
     </ul>
    </div>
  )
}

export default App
