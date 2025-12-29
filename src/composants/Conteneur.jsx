import React from 'react'

const Conteneur = ({ children,className=""}) => {
  return (
    <section className={`w-full px-[10%] py-[5%]  ${className} `}>
       {children}
    </section>
  )
}

export default Conteneur
