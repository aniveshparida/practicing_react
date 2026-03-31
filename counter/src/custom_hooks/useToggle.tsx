import React from 'react'
import {useState,useCallback} from 'react'
const useToggle = (initialToggle) => {
  const [state,setState]=useState(initialToggle);
 const toggle=useCallback(()=>{
     setState((current)=>!current);
 },[])
 return [state,toggle];
}

export default useToggle