import { useState } from 'react'
import './App.css'
import { Sun, Moon } from 'lucide-react' // Changed to Sun/Moon for theme context
import {ChevronDown} from 'lucide-react'
import Posts from './components/Posts'
import Profile from './components/Profile'
import Settings from './components/Settings'

const App = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    
    // Use .trim() so spaces don't count as a name
    if (!formData.name.trim()) tempErrors.name = "Name is required.";
    
    if (!formData.email.includes('@')) tempErrors.email = "Invalid email format.";
    
    // This triggers if length is 0, 1, 2, 3, 4, 5, or 6
    if (formData.password.length <= 6) tempErrors.password = "Password must be at least 7 characters.";
    
    setErrors(tempErrors);
    
    // Return true if there are no keys in the error object
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    
    if (isValid) {
      console.log("SUCCESS:", formData);
      alert("Form submitted!");
      // Optional: Clear form
      setFormData({ name: '', email: '', password: '' });
    } else {
      console.log("FAILED:", "Check the error messages on screen");
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '200px' }}>
        
        <input 
          placeholder="Name" 
          value={formData.name} // Controlled component
          onChange={(e) => setFormData({...formData, name: e.target.value})} 
        />
        {errors.name && <span style={{ color: 'red', fontSize: '12px' }}>{errors.name}</span>}

        <input 
          placeholder="Email" 
          value={formData.email} // Controlled component
          onChange={(e) => setFormData({...formData, email: e.target.value})} 
        />
        {errors.email && <span style={{ color: 'red', fontSize: '12px' }}>{errors.email}</span>}

        <input 
          type="password"
          placeholder="Password" 
          value={formData.password} // Controlled component
          onChange={(e) => setFormData({...formData, password: e.target.value})} 
        />
        {errors.password && <span style={{ color: 'red', fontSize: '12px' }}>{errors.password}</span>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;