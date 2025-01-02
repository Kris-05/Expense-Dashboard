import React from 'react'

const Button = ({name, icon, onClick, bg, bPad, color, bRad}) => {
  return (
    <button 
      style={{
        padding: bPad,
        borderRadius: bRad,
        color: color
      }}
      className={`${bg} outline-none border-white shadow-md font-inherit flex items-center gap-2 cursor-pointer transition-all ease-in-out`}
      onClick={onClick}
    >
      {icon}
      {name}
    </button>
  )
}

export default Button
