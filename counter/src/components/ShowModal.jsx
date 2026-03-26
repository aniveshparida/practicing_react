import React from 'react'

const ShowModal = ({handleClick}) => {
  return (
    <div>
        <div style={overlayStyle}onClick={handleClick}>
            <div style={modalStyle} onClick={(e)=>e.stopPropagation()}>
                <h1>this is a modal</h1>
                <button onClick={handleClick}>Close</button>
            </div>
        </div>
    </div>
  )
}

const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };
  
  const modalStyle = {
    background: "white",
    padding: "20px",
    borderRadius: "5px"
  };
  

export default ShowModal