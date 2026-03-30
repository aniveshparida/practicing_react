import React from 'react'
import Button from './components/Button'

const App = () => {
  return (
    <div>
      <Button style={{background:'red', color:'white'} } onClick={()=>alert('hello')}><h1>hello</h1></Button>
      <Button  onClick={()=>alert('hello')}><h1>hello</h1></Button>
    </div>
  )
}

export default App