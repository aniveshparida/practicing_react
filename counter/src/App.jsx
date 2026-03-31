import React from 'react'
import Button from './components/Button'
import useToggle from './custom_hooks/useToggle'
const App = () => {
  const [isOpen,toggle]=useToggle(false);
  return (
    <div>
      <Button style={{background:'red', color:'white'} } onClick={toggle}><h1>click to toggle</h1></Button>
      {isOpen && <h1>this is a custom hook</h1>}
    </div>
  )
}

export default App