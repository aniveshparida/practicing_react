import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Eye,EyeOff} from 'lucide-react'
function App() {
   const users=["Anivesh","shashank","Aaditya","Somesh","Sheersh","Akshat","Arunangshu"];
   const [searchTerm,setSearchTerm]=useState("");
   const filteredUsers=users.filter((user)=>user.toLowerCase().includes(searchTerm.toLowerCase()));
  return (
    <div>
       <input type="text" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
       <ul>
        {
          (filteredUsers.length>0)?
          (filteredUsers.map((user,index)=>(
            <li key={index}>
            {user}
            </li>
          ))
        )
          : (<li>
            <li>No users found</li>
          </li>)
        }
       </ul>
    </div>
  )
}

export default App
