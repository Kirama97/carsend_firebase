import React from 'react'
import Button from '../../Button';
import {NavLink } from 'react-router-dom'

const NavAdmin = () => {
  return (
    <nav className="z-50 w-full fixed top-0 right-0 bg-neutral-50/80 backdrop-blur-sm flex items-center justify-between py-3 sm:py-5 px-6 md:px-[10%] shadow-md">
      <NavLink to="/accueil" className="font-bold text-lg md:text-2xl text-textColor">carsend</NavLink>

      <div className="hidden sm:flex items-center gap-3 ">
        <Button className="bg-neutral-400/40 backdrop-blur-sm text-sm px-5 py-2 rounded-lg hover:bg-neutral-300 transition duration-300">
          Connexion
        </Button>
        <Button className="bg-textColor text-white text-sm px-5 py-2 rounded-lg hover:bg-gray-800 transition duration-300">
          Inscription
        </Button>
      </div>
    </nav>
  )
}

export default NavAdmin
