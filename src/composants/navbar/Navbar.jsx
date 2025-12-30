import React from 'react';
import Button from './../Button';

const Navbar = () => {
  return (
    <nav className="z-50 w-full fixed top-0 right-0 bg-neutral-50/80 backdrop-blur-sm flex items-center justify-between py-5 px-6 md:px-[10%] shadow-md">
      <h1 className="font-bold text-xl md:text-2xl text-textColor">carsend</h1>

      <div className="flex items-center gap-3">
        <Button className="bg-neutral-400/40 backdrop-blur-sm text-sm px-5 py-2 rounded-lg hover:bg-neutral-300 transition duration-300">
          Connexion
        </Button>
        <Button className="bg-textColor text-white text-sm px-5 py-2 rounded-lg hover:bg-gray-800 transition duration-300">
          Inscription
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;


