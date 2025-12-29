import React from 'react'

const Button = ({
    children ,
    type ,
    onClick ,
    disabled= false,
    className =""

     }) => {


  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        px-3 py-1 text-white text-center bg-primary
        hover:textHover border-none shadow-md
        disabled:opacity-50 disabled:cursor-not-allowed
        rounded-lg
        ${className}
      `}
    
    >
       {children}
    </button>
  )
}

export default Button
