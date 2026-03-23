import { useState } from 'react'
import './App.css'
import { Sun, Moon } from 'lucide-react' // Changed to Sun/Moon for theme context
import {ChevronDown} from 'lucide-react'
import Posts from './components/Posts'
import Profile from './components/Profile'
import Settings from './components/Settings'
function App() {
  const [tab,setTab]=useState('Profile');
  return (
    <div>
      <nav>
        <button onclick={()=>setTab('Posts')}><Posts/></button>
     <button onClick={()=>setTab('Settings')}><Settings/></button>
     <button onClick={()=>setTab('Profile')}><Profile/></button>
     </nav>
     <hr/>
     <div>
      {tab==='Profile' && <Profile/>}
      {tab==='Posts' && <Posts/>}
      {tab==='Settings' && <Settings/>}
     </div>
    </div>

  )
}

export default App