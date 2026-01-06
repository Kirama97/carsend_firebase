import React from 'react';
import Button from '../../Button';
import {NavLink, useNavigate } from 'react-router-dom'
import { FaSignOutAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { useAuth } from '../../../context/AuthProvider';
import { toast } from 'react-toastify';


const Navbar = () => {

  const {logout  ,user} = useAuth()
  const navigate = useNavigate()
  if(!user) return null ;
 
  // Deconnexion
  const handleLogout = async () => {
  // alert('ok')
  await logout();
  navigate("/connexion" , {replace: true});
  toast.success("Au revoir");


  }
   
  return (
    <nav className="z-50 w-full fixed top-0 right-0 bg-neutral-50/80 backdrop-blur-sm flex items-center justify-between py-3 sm:py-5 px-6 md:px-[10%] shadow-md">
      <NavLink to="/accueil" className="font-bold text-lg md:text-2xl text-textColor">carsend</NavLink>

      <div className="hidden sm:flex items-center gap-3 ">
         <Button className="bg-primary text-primary text-sm px-5 py-2 rounded-lg hover:bg-HoverColor transition duration-300">
           <FaUser />
        </Button>
        <Button 
          onClick={handleLogout}
          title="Deconnexion" className="bg-textColor text-white text-sm px-5 py-2 rounded-lg hover:bg-gray-800 transition duration-300">
          <FaSignOutAlt />
        </Button>
       
      </div>
    </nav>
  );
};

export default Navbar;


