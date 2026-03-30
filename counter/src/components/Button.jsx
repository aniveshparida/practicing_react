import React from 'react'

const Button = (props) => {
    const {children,style,onClick}=props;
  return (
    <div>
        <button style={style? style:{background:'green', color:'white'} } onClick={onClick}>{children}</button>
    </div>
  )
}

export default Button