import { useState } from 'react'
import './App.css'
import { Sun, Moon } from 'lucide-react' // Changed to Sun/Moon for theme context

function App() {
  const [isDark, setIsDark] = useState(false);

  const handleClick = () => {
    setIsDark(!isDark);
  }

  return (
    // Added a wrapper class 'app-wrapper' for layout
    <div className={`app-wrapper ${isDark ? 'dark-theme' : 'light-theme'}`}>
       <div className="card">
         <h1>{isDark ? 'Dark Mode Active' : 'Light Mode Active'}</h1>
         <button onClick={handleClick} className="toggle-btn">
           {isDark ? <Sun size={20} /> : <Moon size={20} />}
           <span>Switch to {isDark ? 'Light' : 'Dark'}</span>
         </button>
       </div>
    </div>
  )
}

export default App