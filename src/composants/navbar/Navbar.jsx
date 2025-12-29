import React from 'react'
import Button from './../Button';

const Navbar = () => {
  return (
    <nav className='w-full fixed top-0 right-0 z-100  flex items-center justify-between py-5 px-[10%]'>
     <h1 className='font-bold text-xl text-textColor'>carsend</h1>
      <div className="flex items-center gap-2">
        <Button className='bg-neutral-400/40 backdrop-blur-sm text-sm px-5 py-2'>connexion</Button>
        <Button className='text-sm bg-textColor px-5 py-2 '>inscription</Button>
      </div>
    </nav>
  )
}

export default Navbar
